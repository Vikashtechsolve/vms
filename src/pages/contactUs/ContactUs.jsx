import contactImg from "../../../public/contactUs.png";
import contactSupport from "../../../public/support.jpg";
import contactPrivacy from "../../../public/contactUsPrivacy.jpg";

export default function ContactUs() {
  return (
    <section
      className="relative py-24"
      style={{
        background:
          "radial-gradient(circle at center, #F4F9FF 0%, #E6F0FF 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* LEFT CONTENT */}
        <div className="relative">
          <h1 className="text-4xl md:text-5xl font-semibold text-black">
            Get In Touch With Us
          </h1>

          <p className="mt-6 text-lg text-gray-700 max-w-lg">
            Have a question or need assistance?
            <br />
            Fill out the form below and our team will get back to you shortly.
          </p>

          {/* Image */}
          <div className="mt-16 hidden lg:block">
            <img src={contactImg} alt="Contact Team" className="w-[420px]" />
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="bg-transparent">
          <form className="space-y-8">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                placeholder="Enter your Full Name"
                className="w-full px-5 py-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#EAF3FF]"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                placeholder="Enter your Email Address"
                className="w-full px-5 py-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#EAF3FF]"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                placeholder="Enter your Phone Number"
                className="w-full px-5 py-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#EAF3FF]"
              />
            </div>

            {/* Role */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">
                Role *
              </label>
              <select className="w-full px-5 py-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#EAF3FF] text-gray-500">
                <option>Select your Role</option>
                <option>Trainer</option>
                <option>Company</option>
              </select>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="mt-4 px-10 py-4 bg-[#B11C20] text-white rounded-lg font-medium hover:bg-red-700 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      {/* SUPPORT HOURS SECTION */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <h2 className="text-3xl font-semibold text-black">Support Hours</h2>
          <div className="w-24 h-[2px] bg-blue-600 mt-2"></div>

          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* LEFT IMAGE */}
            <div>
              <img
                src={contactSupport}
                alt="Support Team"
                className="rounded-xl shadow-md w-full object-cover"
              />
            </div>

            {/* RIGHT CARD */}
            <div className="bg-[#F4F9FF] rounded-xl shadow-md p-10">
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white">
                  🎧
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-xl font-semibold text-black">
                    Our Support Hours
                  </h3>

                  <p className="mt-4 text-gray-700 leading-relaxed">
                    Our Support Team is available to assist you from{" "}
                    <span className="font-medium underline">
                      Monday to Saturday
                    </span>
                    , between{" "}
                    <span className="font-medium underline">
                      10:00 AM - 7:00 PM
                    </span>
                    .
                  </p>

                  <p className="mt-4 text-gray-700 leading-relaxed">
                    We aim to respond to all queries within our working hours to
                    ensure timely and reliable support.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* PRIVACY & RESPONSIBILITY SECTION */}
      <section className="bg-[#FAFAFA] py-24">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <h2 className="text-3xl font-semibold text-black text-center">
            Your Privacy, Our Responsibility
          </h2>
          
          <div className="w-32 h-[2px] bg-blue-600 mx-auto mt-2"></div>

          <div className="mt-20 bg-[#F1F1F1] p-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* LEFT IMAGE */}
            <div className="">
              <img
                src={contactPrivacy}
                alt="Privacy & Security"
                className="rounded-xl h-80 shadow-md w-3xl object-cover"
              />
            </div>

            {/* RIGHT CONTENT */}
            <div className="text-gray-700 text-lg leading-relaxed">
              <h3 className="text-xl font-medium text-gray-800 mb-4">
                Your Privacy, Our Responsibility
              </h3>

              <p>
                We are committed to protecting your privacy and maintaining
                complete transparency in how your information is handled. Any
                details you share with us—whether as a trainer or a company—are
                kept strictly confidential and used only for communication and
                service-related purposes.
              </p>

              <p className="mt-6">
                We do not share your data with any third party, and all
                interactions on our platform remain secure and
                interruption-free. Your trust is important to us, and we ensure
                a safe, private, and reliable experience at every step.
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
