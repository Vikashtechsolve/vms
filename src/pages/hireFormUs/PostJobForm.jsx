export default function PostJobForm() {
  return (
    <section className="bg-[#F5F9FF] py-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="flex items-center justify-center gap-3 mb-10">
          <div className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center">
            🔍
          </div>
          <h2 className="text-2xl font-semibold border-b-2 border-blue-600">
            Post a Job
          </h2>
        </div>

        {/* Form Card */}
        <div className="bg-[#EAF2FF] rounded-2xl p-8 shadow-sm">

 
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

 
            <div>
              <label className="text-sm text-gray-600">
                Job Title <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter the Job Title"
                className="mt-2 w-full rounded-lg border px-4 py-3 text-sm outline-none"
              />
            </div>

            <div>
              <label className="text-sm text-gray-600">
                Skills/Technologies Required <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter the Skills Required"
                className="mt-2 w-full rounded-lg border px-4 py-3 text-sm outline-none"
              />
            </div>

         
            <div>
              <label className="text-sm text-gray-600">
                Experience Required <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter the Experience"
                className="mt-2 w-full rounded-lg border px-4 py-3 text-sm outline-none"
              />
            </div>

            {/* Number of Trainers */}
            <div>
              <label className="text-sm text-gray-600">
                Number of Trainers <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                placeholder="Enter the Number of Trainers"
                className="mt-2 w-full rounded-lg border px-4 py-3 text-sm outline-none"
              />
            </div>

            
            <div>
              <label className="text-sm text-gray-600">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                placeholder="Enter the Email Address"
                className="mt-2 w-full rounded-lg border px-4 py-3 text-sm outline-none"
              />
            </div>

            <div>
              <label className="text-sm text-gray-600">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                placeholder="Enter the Phone Number"
                className="mt-2 w-full rounded-lg border px-4 py-3 text-sm outline-none"
              />
            </div>

            <div>
              <label className="text-sm text-gray-600">
                Level of Training <span className="text-red-500">*</span>
              </label>
              <select className="mt-2 w-full rounded-lg border px-4 py-3 text-sm outline-none">
                <option>Level of Training</option>
              </select>
            </div>

         
            <div>
              <label className="text-sm text-gray-600">
                Training Type <span className="text-red-500">*</span>
              </label>
              <select className="mt-2 w-full rounded-lg border px-4 py-3 text-sm outline-none">
                <option>Training Type</option>
              </select>
            </div>

      
            <div>
              <label className="text-sm text-gray-600">
                Training Mode <span className="text-red-500">*</span>
              </label>
              <select className="mt-2 w-full rounded-lg border px-4 py-3 text-sm outline-none">
                <option>Training Mode</option>
              </select>
            </div>

          
            <div>
              <label className="text-sm text-gray-600">
                Training Duration (Total Hours Approx.) <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter the Training Duration"
                className="mt-2 w-full rounded-lg border px-4 py-3 text-sm outline-none"
              />
            </div>

          
            <div>
              <label className="text-sm text-gray-600">
                Training Location <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter the Training Location"
                className="mt-2 w-full rounded-lg border px-4 py-3 text-sm outline-none"
              />
            </div>

            <div>
              <label className="text-sm text-gray-600">
                Budget / Pay Range <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter the Budget"
                className="mt-2 w-full rounded-lg border px-4 py-3 text-sm outline-none"
              />
            </div>
          </div>

          <div className="mt-6">
            <p className="text-sm text-gray-600 mb-3">
              Accommodation Provided <span className="text-red-500">*</span>
            </p>
            <div className="flex gap-6">
              <label className="flex items-center gap-2 text-sm">
                <input type="checkbox" className="w-4 h-4" /> Yes
              </label>
              <label className="flex items-center gap-2 text-sm">
                <input type="checkbox" className="w-4 h-4" /> No
              </label>
            </div>
          </div>

          <div className="mt-6">
            <p className="text-sm text-gray-600 mb-3">
              Language Preference <span className="text-red-500">*</span>
            </p>
            <div className="flex flex-wrap gap-6">
              <label className="flex items-center gap-2 text-sm">
                <input type="checkbox" className="w-4 h-4" /> English
              </label>
              <label className="flex items-center gap-2 text-sm">
                <input type="checkbox" className="w-4 h-4" /> Hindi
              </label>
              <label className="flex items-center gap-2 text-sm">
                <input type="checkbox" className="w-4 h-4" /> Regional
              </label>
            </div>
          </div>

         
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
