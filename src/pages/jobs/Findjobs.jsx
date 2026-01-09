import { Search, MapPin, SlidersHorizontal, ChevronDown, ChevronUp } from "lucide-react";
import jobs from "../../../public/jobs.json";
import JobCard from "../../components/Jobs/JobCard.jsx";
import { useState } from "react";

export default function FindJobs() {
  const [openFilter, setOpenFilter] = useState(null);

  const toggleFilter = (name) => {
    setOpenFilter(openFilter === name ? null : name);
  };

  const [filters, setFilters] = useState({
    experience: "",
    level: [],
    type: [],
    mode: [],
    location: [],
    language: [],
  });

  const handleCheckbox = (category, value) => {
    setFilters((prev) => ({
      ...prev,
      [category]: prev[category].includes(value)
        ? prev[category].filter((v) => v !== value)
        : [...prev[category], value],
    }));
  };

  const Checkbox = ({ label, checked, onChange }) => (
    <label className="flex items-center gap-2 text-sm text-gray-700">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="accent-blue-600"
      />
      {label}
    </label>
  );

  return (
    <section className="bg-[#F7F7F7] min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* SEARCH BAR */}
        <div className="bg-white rounded-3xl border border-black shadow-md flex items-center px-6 py-4 gap-4">
          <Search color="black" className="text-gray-400" />

          <input
            type="text"
            placeholder="Job Title, Keywords or Company"
            className="flex-1 outline-none text-sm"
          />

          <div className="w-px h-8 bg-gray-300"></div>

          <MapPin className="text-gray-400" />

          <input
            type="text"
            placeholder="Location"
            className="w-40 outline-none text-sm"
          />

          <button className="ml-auto bg-[#B11C20] text-white px-6 py-2 rounded-lg text-sm font-medium">
            Find Jobs
          </button>
        </div>

        {/* CONTENT */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* FILTERS */}
          <aside className="bg-white rounded-xl shadow-md p-6 space-y-6">
            <div className="flex items-center gap-2 text-lg font-medium mb-4">
              <SlidersHorizontal className="text-blue-600" />
              All Filters
            </div>

            {/* EXPERIENCE */}
            <div className="border-t pt-4">
              <button
                onClick={() => toggleFilter("experience")}
                className="flex justify-between w-full text-gray-700"
              >
                Experience
                {openFilter === "experience" ? <ChevronUp /> : <ChevronDown />}
              </button>

              {openFilter === "experience" && (
                <input
                  type="text"
                  placeholder="Enter experience (e.g. 2-4 Yrs)"
                  className="mt-3 w-full px-3 py-2 border rounded-md text-sm"
                  value={filters.experience}
                  onChange={(e) =>
                    setFilters({ ...filters, experience: e.target.value })
                  }
                />
              )}
            </div>

            {/* LEVEL OF TRAINING */}
            <div className="border-t pt-4">
              <button
                onClick={() => toggleFilter("level")}
                className="flex justify-between w-full text-gray-700"
              >
                Level of Training
                <ChevronDown />
              </button>

              {openFilter === "level" && (
                <div className="mt-3 space-y-2">
                  {["Beginner", "Intermediate", "Advanced"].map((item) => (
                    <Checkbox
                      key={item}
                      label={item}
                      checked={filters.level.includes(item)}
                      onChange={() => handleCheckbox("level", item)}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* TRAINING TYPE */}
            <div className="border-t pt-4">
              <button
                onClick={() => toggleFilter("type")}
                className="flex justify-between w-full text-gray-700"
              >
                Training Type
                <ChevronDown />
              </button>

              {openFilter === "type" && (
                <div className="mt-3 space-y-2">
                  {["Corporate", "College", "Workshop", "Bootcamp"].map(
                    (item) => (
                      <Checkbox
                        key={item}
                        label={item}
                        checked={filters.type.includes(item)}
                        onChange={() => handleCheckbox("type", item)}
                      />
                    )
                  )}
                </div>
              )}
            </div>

            {/* TRAINING MODE */}
            <div className="border-t pt-4">
              <button
                onClick={() => toggleFilter("mode")}
                className="flex justify-between w-full text-gray-700"
              >
                Training Mode
                <ChevronDown />
              </button>

              {openFilter === "mode" && (
                <div className="mt-3 space-y-2">
                  {["Online", "Offline", "Hybrid"].map((item) => (
                    <Checkbox
                      key={item}
                      label={item}
                      checked={filters.mode.includes(item)}
                      onChange={() => handleCheckbox("mode", item)}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* TRAINING LOCATION */}
            <div className="border-t pt-4">
              <button
                onClick={() => toggleFilter("location")}
                className="flex justify-between w-full text-gray-700"
              >
                Training Location
                <ChevronDown />
              </button>

              {openFilter === "location" && (
                <div className="mt-3 space-y-2">
                  {["Delhi", "Pune", "Ahmedabad", "Canada"].map((item) => (
                    <Checkbox
                      key={item}
                      label={item}
                      checked={filters.location.includes(item)}
                      onChange={() => handleCheckbox("location", item)}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* LANGUAGE */}
            <div className="border-t pt-4">
              <button
                onClick={() => toggleFilter("language")}
                className="flex justify-between w-full text-gray-700"
              >
                Language Preference
                <ChevronDown />
              </button>

              {openFilter === "language" && (
                <div className="mt-3 space-y-2">
                  {["English", "Hindi", "Regional"].map((item) => (
                    <Checkbox
                      key={item}
                      label={item}
                      checked={filters.language.includes(item)}
                      onChange={() => handleCheckbox("language", item)}
                    />
                  ))}
                </div>
              )}
            </div>
          </aside>

          {/* JOB LIST */}
          <div className="lg:col-span-3 space-y-8">
            {jobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
