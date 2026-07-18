import { useState } from "react";
import contactImg from "../../../public/contactUs.png";
import contactSupport from "../../../public/support.jpg";
import contactPrivacy from "../../../public/contactUsPrivacy.jpg";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:4000/api";

const INIT = { name: "", email: "", phone: "", role: "", message: "" };

export default function ContactUs() {
  const [form, setForm] = useState(INIT);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [serverError, setServerError] = useState("");

  function set(field) {
    return (e) => {
      setForm((f) => ({ ...f, [field]: e.target.value }));
      if (errors[field]) setErrors((er) => ({ ...er, [field]: "" }));
    };
  }

  function validate() {
    const e = {};
    if (!form.name.trim()) e.name = "Full name is required";
    if (!form.email.trim()) e.email = "Email address is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email";
    if (!form.phone.trim()) e.phone = "Phone number is required";
    if (!form.role) e.role = "Please select your role";
    return e;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    setLoading(true);
    setServerError("");
    try {
      const res = await fetch(`${API_URL}/contact/submit`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Submission failed");
      setSuccess(true);
      setForm(INIT);
    } catch (err) {
      setServerError(err.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  const inputBase = "w-full px-5 py-4 rounded-lg border focus:outline-none focus:ring-2 bg-[#EAF3FF] transition";
  const inputClass = (field) =>
    `${inputBase} ${errors[field] ? "border-red-400 focus:ring-red-300" : "border-gray-300 focus:ring-blue-500"}`;

  return (
    <section
      className="relative py-24"
      style={{ background: "radial-gradient(circle at center, #F4F9FF 0%, #E6F0FF 100%)" }}
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* LEFT */}
        <div className="relative">
          <h1 className="text-4xl md:text-5xl font-semibold text-black">
            Get In Touch With Us
          </h1>
          <p className="mt-6 text-lg text-gray-700 max-w-lg">
            Have a question or need assistance?
            <br />
            Fill out the form below and our team will get back to you shortly.
          </p>
          <div className="mt-16 hidden lg:block">
            <img src={contactImg} alt="Contact Team" className="w-[420px]" />
          </div>
        </div>

        {/* RIGHT FORM */}
        <div>
          {success ? (
            <div className="bg-white rounded-2xl shadow-lg p-10 flex flex-col items-center gap-4 text-center">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="32" height="32">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h2 className="text-2xl font-semibold text-gray-900">Message Sent!</h2>
              <p className="text-gray-500 max-w-sm">
                Thank you for reaching out. Our team will get back to you within our support hours.
              </p>
              <button
                type="button"
                onClick={() => setSuccess(false)}
                className="btn-primary mt-2 px-8"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              {serverError && (
                <div className="flex items-center gap-3 bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg px-4 py-3">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18" className="shrink-0">
                    <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
                  </svg>
                  {serverError}
                </div>
              )}

              {/* Full Name */}
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">Full Name *</label>
                <input
                  type="text"
                  placeholder="Enter your Full Name"
                  value={form.name}
                  onChange={set("name")}
                  className={inputClass("name")}
                />
                {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">Email Address *</label>
                <input
                  type="email"
                  placeholder="Enter your Email Address"
                  value={form.email}
                  onChange={set("email")}
                  className={inputClass("email")}
                />
                {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">Phone Number *</label>
                <input
                  type="tel"
                  placeholder="Enter your Phone Number"
                  value={form.phone}
                  onChange={set("phone")}
                  className={inputClass("phone")}
                />
                {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
              </div>

              {/* Role */}
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">Role *</label>
                <select
                  value={form.role}
                  onChange={set("role")}
                  className={inputClass("role") + " text-gray-700"}
                >
                  <option value="">Select your Role</option>
                  <option value="Trainer">Trainer</option>
                  <option value="Company">Company</option>
                  <option value="Other">Other</option>
                </select>
                {errors.role && <p className="mt-1 text-xs text-red-500">{errors.role}</p>}
              </div>

              {/* Message (optional) */}
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">
                  Message <span className="text-gray-400 font-normal">(Optional)</span>
                </label>
                <textarea
                  rows={4}
                  placeholder="Write your message here…"
                  value={form.message}
                  onChange={set("message")}
                  className="w-full px-5 py-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#EAF3FF] resize-none transition"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn-primary mt-2 px-10 py-4 flex items-center gap-2"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="18" height="18">
                      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                    </svg>
                    Sending…
                  </>
                ) : "Submit"}
              </button>
            </form>
          )}
        </div>
      </div>

      {/* SUPPORT HOURS */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-black">Support Hours</h2>
          <div className="w-24 h-[2px] bg-blue-600 mt-2"></div>
          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <img src={contactSupport} alt="Support Team" className="rounded-xl shadow-md w-full object-cover" />
            </div>
            <div className="bg-[#F4F9FF] rounded-xl shadow-md p-10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white shrink-0">🎧</div>
                <div>
                  <h3 className="text-xl font-semibold text-black">Our Support Hours</h3>
                  <p className="mt-4 text-gray-700 leading-relaxed">
                    Our Support Team is available to assist you from{" "}
                    <span className="font-medium underline">Monday to Saturday</span>, between{" "}
                    <span className="font-medium underline">10:00 AM - 7:00 PM</span>.
                  </p>
                  <p className="mt-4 text-gray-700 leading-relaxed">
                    We aim to respond to all queries within our working hours to ensure timely and reliable support.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRIVACY */}
      <section className="bg-[#FAFAFA] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-black text-center">Your Privacy, Our Responsibility</h2>
          <div className="w-32 h-[2px] bg-blue-600 mx-auto mt-2"></div>
          <div className="mt-20 bg-[#F1F1F1] rounded-xl p-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <img src={contactPrivacy} alt="Privacy & Security" className="rounded-xl h-80 shadow-md w-full object-cover" />
            </div>
            <div className="text-gray-700 text-lg leading-relaxed">
              <h3 className="text-xl font-medium text-gray-800 mb-4">Your Privacy, Our Responsibility</h3>
              <p>
                We are committed to protecting your privacy and maintaining complete transparency in how your information is handled. Any details you share with us—whether as a trainer or a company—are kept strictly confidential and used only for communication and service-related purposes.
              </p>
              <p className="mt-6">
                We do not share your data with any third party, and all interactions on our platform remain secure and interruption-free. Your trust is important to us, and we ensure a safe, private, and reliable experience at every step.
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
