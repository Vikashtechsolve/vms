import { User } from "lucide-react";

export default function CreateTrainerProfile() {
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
        <div className="bg-[#EAF2FF] rounded-2xl p-6 sm:p-8 shadow-sm">

          {/* PERSONAL INFO */}
          <h3 className="font-semibold text-black mb-4">
            Personal Information
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Input label="Full Name" placeholder="Enter Full Name" />
            <Input label="Contact Number" placeholder="Enter the Contact Number" />
            <Input label="Location" placeholder="Enter the Location" />
          </div>

          {/* PROFESSIONAL INFO */}
          <h3 className="font-semibold text-black mt-10 mb-4">
            Professional Information
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              label="Qualification"
              placeholder="Enter Qualification eg., B.Tech, M.Tech, BCA, MCA"
            />
            <Select label="Passing Year" placeholder="Select Passing Year" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <Input
              label="Subject"
              placeholder="Enter the Subject eg., Java, React, DSA, Spring Boot"
            />
            <Input label="Payout Expectations (Per Hour)" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <Input label="Teaching Experience" />
            <Input label="Development Experience" />
            <Input label="Total Experience" />
          </div>

          {/* Work Looking For */}
          <div className="mt-6">
            <Label text="Work Looking For" />
            <div className="flex flex-wrap gap-4 mt-2">
              <Checkbox label="Part-Time Trainer" />
              <Checkbox label="Full-Time Trainer" />
            </div>
          </div>

          {/* Mode */}
          <div className="mt-6">
            <Label text="Mode" />
            <div className="flex flex-wrap gap-4 mt-2">
              <Checkbox label="Online Mode" />
              <Checkbox label="Offline Mode" />
            </div>
          </div>

          {/* Resume Upload */}
          <div className="mt-6">
            <Label text="Resume" />
            <div className="mt-2 border rounded-lg p-6 flex items-center justify-center text-sm text-gray-500">
              Upload Resume (PDF/DOC)
            </div>
          </div>

          {/* Submit */}
          <div className="mt-10 text-center">
            <button className="bg-[#B11C20] hover:bg-red-700 transition text-white px-8 py-3 rounded-lg text-sm font-medium">
              Submit Application
            </button>
          </div>

        </div>
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

const Input = ({ label, placeholder }) => (
  <div>
    <Label text={label} />
    <input
      type="text"
      placeholder={placeholder}
      className="mt-2 w-full rounded-lg border px-4 py-3 text-sm outline-none"
    />
  </div>
);

const Select = ({ label, placeholder }) => (
  <div>
    <Label text={label} />
    <select className="mt-2 w-full rounded-lg border px-4 py-3 text-sm outline-none">
      <option>{placeholder}</option>
    </select>
  </div>
);

const Checkbox = ({ label }) => (
  <label className="flex items-center gap-2 border rounded-lg px-4 py-2 text-sm text-gray-600">
    <input type="checkbox" className="w-4 h-4" />
    {label}
  </label>
);
