import { useState } from "react";
import { User, Upload, FileText } from "lucide-react";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:4000/api";

const INITIAL_FORM = {
  name: "",
  contact: "",
  location: "",
  qualification: "",
  passingYear: "",
  subject: "",
  payoutExpectations: "",
  teachingExperience: "",
  developmentExperience: "",
  totalExperience: "",
  workLookingFor: "",
  mode: "",
};

export default function CreateTrainerProfile() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [photoFile, setPhotoFile] = useState(null);
  const [resumeFile, setResumeFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckbox = (field, value) => {
    setForm((prev) => {
      const current = (prev[field] || "").split(",").filter(Boolean);
      const exists = current.includes(value);
      const updated = exists ? current.filter((v) => v !== value) : [...current, value];
      return { ...prev, [field]: updated.join(",") };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: "", text: "" });
    try {
      const fd = new FormData();
      Object.entries(form).forEach(([k, v]) => {
        if (v) fd.append(k, v);
      });
      if (photoFile) fd.append("photo", photoFile);
      if (resumeFile) fd.append("resume", resumeFile);

      const res = await fetch(`${API_URL}/trainers/register`, {
        method: "POST",
        body: fd,
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to submit");

      setForm(INITIAL_FORM);
      setPhotoFile(null);
      setResumeFile(null);
      setMessage({ type: "success", text: "Your profile has been submitted successfully!" });
    } catch (err) {
      setMessage({ type: "error", text: err.message || "Something went wrong. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-[#F5F9FF] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center">
            <User className="text-blue-600" />
          </div>
          <h2 className="text-xl sm:text-2xl font-semibold border-b-2 border-blue-600 pb-1">
            Create Your Trainer Profile
          </h2>
        </div>

        {/* Form Card */}
        <form onSubmit={handleSubmit} className="bg-[#EAF2FF] rounded-2xl p-6 sm:p-8 shadow-sm">

          {message.text && (
            <div
              className={`mb-6 px-4 py-3 rounded-lg text-sm ${
                message.type === "success" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
              }`}
            >
              {message.text}
            </div>
          )}

          {/* Profile Photo Upload */}
          <h3 className="font-semibold text-black mb-4">
            Profile Photo
          </h3>
          <div className="mb-8">
            <Label text="Upload your profile photo (stored in Cloudinary)" />
            <label className="mt-2 flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-blue-500 hover:bg-blue-50/50 transition">
              <Upload className="w-8 h-8 text-gray-500 mb-2" />
              <span className="text-sm text-gray-600">
                {photoFile ? photoFile.name : "Click to upload photo (JPG, PNG)"}
              </span>
              <input
                type="file"
                accept="image/jpeg,image/png,image/webp"
                className="hidden"
                onChange={(e) => setPhotoFile(e.target.files?.[0] || null)}
              />
            </label>
          </div>

          {/* PERSONAL INFO */}
          <h3 className="font-semibold text-black mb-4">
            Personal Information
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Input label="Full Name" name="name" placeholder="Enter Full Name" value={form.name} onChange={handleInputChange} />
            <Input label="Contact Number" name="contact" placeholder="Enter the Contact Number" value={form.contact} onChange={handleInputChange} />
            <Input label="Location" name="location" placeholder="Enter the Location" value={form.location} onChange={handleInputChange} />
          </div>

          {/* PROFESSIONAL INFO */}
          <h3 className="font-semibold text-black mt-10 mb-4">
            Professional Information
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              label="Qualification"
              name="qualification"
              placeholder="Enter Qualification eg., B.Tech, M.Tech, BCA, MCA"
              value={form.qualification}
              onChange={handleInputChange}
            />
            <PassingYearSelect label="Passing Year" value={form.passingYear} onChange={(e) => setForm((prev) => ({ ...prev, passingYear: e.target.value }))} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <Input
              label="Subject"
              name="subject"
              placeholder="Enter the Subject eg., Java, React, DSA, Spring Boot"
              value={form.subject}
              onChange={handleInputChange}
            />
            <Input label="Payout Expectations (Per Hour)" name="payoutExpectations" value={form.payoutExpectations} onChange={handleInputChange} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <Input label="Teaching Experience" name="teachingExperience" value={form.teachingExperience} onChange={handleInputChange} />
            <Input label="Development Experience" name="developmentExperience" value={form.developmentExperience} onChange={handleInputChange} />
            <Input label="Total Experience" name="totalExperience" value={form.totalExperience} onChange={handleInputChange} />
          </div>

          {/* Work Looking For */}
          <div className="mt-6">
            <Label text="Work Looking For" />
            <div className="flex flex-wrap gap-4 mt-2">
              <Checkbox
                label="Part-Time Trainer"
                checked={(form.workLookingFor || "").includes("Part-Time Trainer")}
                onChange={() => handleCheckbox("workLookingFor", "Part-Time Trainer")}
              />
              <Checkbox
                label="Full-Time Trainer"
                checked={(form.workLookingFor || "").includes("Full-Time Trainer")}
                onChange={() => handleCheckbox("workLookingFor", "Full-Time Trainer")}
              />
            </div>
          </div>

          {/* Mode */}
          <div className="mt-6">
            <Label text="Mode" />
            <div className="flex flex-wrap gap-4 mt-2">
              <Checkbox
                label="Online Mode"
                checked={(form.mode || "").includes("Online Mode")}
                onChange={() => handleCheckbox("mode", "Online Mode")}
              />
              <Checkbox
                label="Offline Mode"
                checked={(form.mode || "").includes("Offline Mode")}
                onChange={() => handleCheckbox("mode", "Offline Mode")}
              />
            </div>
          </div>

          {/* Resume Upload */}
          <div className="mt-6">
            <Label text="Resume (stored in Cloudinary)" />
            <label className="mt-2 flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-blue-500 hover:bg-blue-50/50 transition">
              <FileText className="w-8 h-8 text-gray-500 mb-2" />
              <span className="text-sm text-gray-600">
                {resumeFile ? resumeFile.name : "Click to upload resume (PDF or DOC)"}
              </span>
              <input
                type="file"
                accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                className="hidden"
                onChange={(e) => setResumeFile(e.target.files?.[0] || null)}
              />
            </label>
          </div>

          {/* Submit */}
          <div className="mt-10 text-center">
            <button
              type="submit"
              disabled={loading}
              className="bg-[#B11C20] hover:bg-red-700 disabled:opacity-70 disabled:cursor-not-allowed transition text-white px-8 py-3 rounded-lg text-sm font-medium"
            >
              {loading ? "Submitting..." : "Submit Application"}
            </button>
          </div>

        </form>
      </div>
    </section>
  );
}

/* ===== Reusable Components ===== */

const Label = ({ text }) => (
  <p className="text-sm text-gray-600">
    {text} <span className="text-red-500">*</span>
  </p>
);

const Input = ({ label, placeholder, name, value, onChange }) => (
  <div>
    <Label text={label} />
    <input
      type="text"
      name={name}
      placeholder={placeholder}
      value={value || ""}
      onChange={onChange}
      className="mt-2 w-full rounded-lg border px-4 py-3 text-sm outline-none"
    />
  </div>
);

const PassingYearSelect = ({ label, value, onChange }) => {
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: currentYear - 1979 }, (_, i) => currentYear - i);
  return (
    <div>
      <Label text={label} />
      <select
        value={value}
        onChange={onChange}
        className="mt-2 w-full rounded-lg border px-4 py-3 text-sm outline-none"
      >
        <option value="">Select Passing Year</option>
        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
    </div>
  );
};

const Checkbox = ({ label, checked, onChange }) => (
  <label className="flex items-center gap-2 border rounded-lg px-4 py-2 text-sm text-gray-600 cursor-pointer">
    <input type="checkbox" className="w-4 h-4" checked={checked} onChange={onChange} />
    {label}
  </label>
);
