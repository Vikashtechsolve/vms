export default function CompanyRegistration() {
  return (
    <section className="min-h-screen bg-[#F5F9FF] px-4 py-6">
      <div className="max-w-5xl mx-auto bg-gradient-to-br from-[#EEF5FF] to-[#F8FBFF] rounded-2xl p-5 sm:p-6 md:p-10">

        {/* Company Details */}
        <h3 className="text-base font-semibold text-gray-800 mb-4">
          Company Details
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
          <Input label="Company Name *" placeholder="Enter Company Name" />
          <Input label="Company Type *" placeholder="Enter Company Type" />
          <Input label="Company Size *" placeholder="Enter Company Size" />
        </div>

        {/* Contact Person Details */}
        <h3 className="text-base font-semibold text-gray-800 mb-4">
          Contact Person Details
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
          <Input label="HR Name *" placeholder="Enter HR Name" />
          <Input label="Email*" placeholder="Enter the Email" />
          <Input label="Contact Number *" placeholder="Enter the Contact Number" />
        </div>

        {/* Hiring Preferences */}
        <h3 className="text-base font-semibold text-gray-800 mb-4">
          Hiring Preferences
        </h3>

        <div className="mb-5">
          <Input
            label="Training Skills Required *"
            placeholder="Enter the Skills Required"
          />
        </div>

        {/* Hiring Type */}
        <div className="mb-5">
          <p className="text-sm font-medium text-gray-600 mb-2">
            Hiring Type*
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <CheckboxCard label="Part-Time Trainer" />
            <CheckboxCard label="Full-Time Trainer" />
          </div>
        </div>

        {/* Mode */}
        <div className="mb-8">
          <p className="text-sm font-medium text-gray-600 mb-2">
            Mode *
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <CheckboxCard label="Online Mode" />
            <CheckboxCard label="Offline Mode" />
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button className="bg-red-600 text-white px-8 py-2 rounded-md shadow hover:bg-red-700">
            Submit Application
          </button>
        </div>
      </div>
    </section>
  );
}

/* ---------- Reusable Input ---------- */
function Input({ label, placeholder }) {
  return (
    <div>
      <label className="block text-sm text-gray-500 mb-1">
        {label}
      </label>
      <input
        type="text"
        placeholder={placeholder}
        className="w-full bg-[#F3F7FF] border border-gray-200 rounded-lg px-4 py-2 text-sm outline-none"
      />
    </div>
  );
}

/* ---------- Checkbox Card ---------- */
function CheckboxCard({ label }) {
  return (
    <label className="flex items-center gap-3 bg-[#F3F7FF] border border-gray-200 rounded-lg px-4 py-3 cursor-pointer">
      <input type="checkbox" className="w-4 h-4" />
      <span className="text-sm text-gray-500">{label}</span>
    </label>
  );
}
