import { useState, useEffect, useMemo } from "react";
import { Search, MapPin, SlidersHorizontal, ChevronDown, ChevronUp, Loader2, AlertCircle } from "lucide-react";
import JobCard from "../../components/Jobs/JobCard.jsx";
import ApplyModal from "../../components/Jobs/ApplyModal.jsx";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:4000/api";

export default function FindJobs() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [fetchError, setFetchError] = useState("");

  const [searchTitle, setSearchTitle] = useState("");
  const [searchLocation, setSearchLocation] = useState("");
  const [appliedSearch, setAppliedSearch] = useState({ title: "", location: "" });

  const [openFilter, setOpenFilter] = useState(null);
  const [filters, setFilters] = useState({
    experience: "",
    level: [],
    type: [],
    mode: [],
    location: [],
    language: [],
  });

  const [applyJob, setApplyJob] = useState(null);

  useEffect(() => {
    setLoading(true);
    setFetchError("");
    fetch(`${API_URL}/jobs/public`)
      .then((r) => {
        if (!r.ok) throw new Error("Failed to load jobs");
        return r.json();
      })
      .then((data) => setJobs(Array.isArray(data) ? data : []))
      .catch((err) => setFetchError(err.message || "Could not load jobs"))
      .finally(() => setLoading(false));
  }, []);

  const toggleFilter = (name) =>
    setOpenFilter(openFilter === name ? null : name);

  const handleCheckbox = (category, value) =>
    setFilters((prev) => ({
      ...prev,
      [category]: prev[category].includes(value)
        ? prev[category].filter((v) => v !== value)
        : [...prev[category], value],
    }));

  const handleSearch = () =>
    setAppliedSearch({ title: searchTitle.trim(), location: searchLocation.trim() });

  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      const titleQ = appliedSearch.title.toLowerCase();
      const locationQ = appliedSearch.location.toLowerCase();

      if (titleQ) {
        const blob = `${job.title || ""} ${(job.skills || []).join(" ")}`.toLowerCase();
        if (!blob.includes(titleQ)) return false;
      }
      if (locationQ) {
        if (!(job.location || "").toLowerCase().includes(locationQ)) return false;
      }
      if (filters.experience) {
        if (!(job.experience || "").toLowerCase().includes(filters.experience.toLowerCase())) return false;
      }
      if (filters.level.length) {
        if (!filters.level.some((l) => (job.level || "").toLowerCase().includes(l.toLowerCase()))) return false;
      }
      if (filters.type.length) {
        if (!filters.type.some((t) => (job.trainingType || "").toLowerCase().includes(t.toLowerCase()))) return false;
      }
      if (filters.mode.length) {
        const jobMode = (job.trainingMode || job.mode || "").toLowerCase();
        if (!filters.mode.some((m) => jobMode.includes(m.toLowerCase()))) return false;
      }
      if (filters.location.length) {
        if (!filters.location.some((loc) => (job.location || "").toLowerCase().includes(loc.toLowerCase()))) return false;
      }
      if (filters.language.length) {
        const jobLangs = (job.languages || []).map((l) => l.toLowerCase());
        if (!filters.language.some((lang) => jobLangs.some((jl) => jl.includes(lang.toLowerCase())))) return false;
      }
      return true;
    });
  }, [jobs, appliedSearch, filters]);

  const clearFilters = () => {
    setFilters({ experience: "", level: [], type: [], mode: [], location: [], language: [] });
    setAppliedSearch({ title: "", location: "" });
    setSearchTitle("");
    setSearchLocation("");
  };

  const activeFilterCount =
    (appliedSearch.title ? 1 : 0) +
    (appliedSearch.location ? 1 : 0) +
    (filters.experience ? 1 : 0) +
    filters.level.length +
    filters.type.length +
    filters.mode.length +
    filters.location.length +
    filters.language.length;

  const Checkbox = ({ label, checked, onChange }) => (
    <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer select-none">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="accent-[#C1272D] w-4 h-4 cursor-pointer"
      />
      {label}
    </label>
  );

  const FilterSection = ({ id, label, children }) => (
    <div className="border-t pt-4">
      <button
        type="button"
        onClick={() => toggleFilter(id)}
        className="flex justify-between w-full text-gray-700 font-medium text-sm"
      >
        {label}
        {openFilter === id ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </button>
      {openFilter === id && <div className="mt-3">{children}</div>}
    </div>
  );

  return (
    <section className="bg-[#F7F7F7] min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* SEARCH BAR */}
        <div className="bg-white rounded-3xl border border-gray-200 shadow-md flex flex-col sm:flex-row items-stretch sm:items-center px-6 py-4 gap-4">
          <div className="flex items-center gap-3 flex-1">
            <Search size={18} className="text-gray-400 shrink-0" />
            <input
              type="text"
              placeholder="Job Title, Keywords or Skills"
              className="flex-1 outline-none text-sm text-gray-800 placeholder-gray-400"
              value={searchTitle}
              onChange={(e) => setSearchTitle(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            />
          </div>
          <div className="hidden sm:block w-px h-8 bg-gray-200" />
          <div className="flex items-center gap-3 sm:w-44">
            <MapPin size={18} className="text-gray-400 shrink-0" />
            <input
              type="text"
              placeholder="Location"
              className="flex-1 outline-none text-sm text-gray-800 placeholder-gray-400"
              value={searchLocation}
              onChange={(e) => setSearchLocation(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            />
          </div>
          <button
            type="button"
            onClick={handleSearch}
            className="bg-[#C1272D] hover:bg-[#8f1519] text-white px-7 py-2.5 rounded-xl text-sm font-semibold transition-colors"
          >
            Find Jobs
          </button>
        </div>

        {/* CONTENT */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* FILTERS SIDEBAR */}
          <aside className="bg-white rounded-2xl shadow-md p-6 space-y-4 h-fit">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2 text-base font-semibold text-gray-800">
                <SlidersHorizontal size={18} className="text-[#C1272D]" />
                All Filters
                {activeFilterCount > 0 && (
                  <span className="bg-[#C1272D] text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                    {activeFilterCount}
                  </span>
                )}
              </div>
              {activeFilterCount > 0 && (
                <button
                  type="button"
                  onClick={clearFilters}
                  className="text-xs text-[#C1272D] font-medium hover:underline"
                >
                  Clear all
                </button>
              )}
            </div>

            <FilterSection id="experience" label="Experience">
              <input
                type="text"
                placeholder="e.g. 2-4 Yrs"
                className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm outline-none focus:border-[#C1272D]"
                value={filters.experience}
                onChange={(e) => setFilters({ ...filters, experience: e.target.value })}
              />
            </FilterSection>

            <FilterSection id="level" label="Level of Training">
              <div className="space-y-2">
                {["Beginner", "Intermediate", "Advanced"].map((item) => (
                  <Checkbox
                    key={item}
                    label={item}
                    checked={filters.level.includes(item)}
                    onChange={() => handleCheckbox("level", item)}
                  />
                ))}
              </div>
            </FilterSection>

            <FilterSection id="type" label="Training Type">
              <div className="space-y-2">
                {["Corporate", "College", "Workshop", "Bootcamp"].map((item) => (
                  <Checkbox
                    key={item}
                    label={item}
                    checked={filters.type.includes(item)}
                    onChange={() => handleCheckbox("type", item)}
                  />
                ))}
              </div>
            </FilterSection>

            <FilterSection id="mode" label="Training Mode">
              <div className="space-y-2">
                {["Online", "Offline", "Hybrid"].map((item) => (
                  <Checkbox
                    key={item}
                    label={item}
                    checked={filters.mode.includes(item)}
                    onChange={() => handleCheckbox("mode", item)}
                  />
                ))}
              </div>
            </FilterSection>

            <FilterSection id="location" label="Training Location">
              <div className="space-y-2">
                {["Delhi", "Pune", "Ahmedabad", "Mumbai", "Bangalore", "Canada"].map((item) => (
                  <Checkbox
                    key={item}
                    label={item}
                    checked={filters.location.includes(item)}
                    onChange={() => handleCheckbox("location", item)}
                  />
                ))}
              </div>
            </FilterSection>

            <FilterSection id="language" label="Language Preference">
              <div className="space-y-2">
                {["English", "Hindi", "Regional"].map((item) => (
                  <Checkbox
                    key={item}
                    label={item}
                    checked={filters.language.includes(item)}
                    onChange={() => handleCheckbox("language", item)}
                  />
                ))}
              </div>
            </FilterSection>
          </aside>

          {/* JOB LIST */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            {/* Results header */}
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">
                {loading ? "Loading jobs…" : `${filteredJobs.length} job${filteredJobs.length !== 1 ? "s" : ""} found`}
              </p>
            </div>

            {/* Loading state */}
            {loading && (
              <div className="flex flex-col items-center justify-center py-24 gap-3 text-gray-400">
                <Loader2 size={36} className="animate-spin" />
                <p className="text-sm">Loading available jobs…</p>
              </div>
            )}

            {/* Error state */}
            {!loading && fetchError && (
              <div className="flex items-center gap-3 bg-red-50 border border-red-200 text-red-700 rounded-2xl px-6 py-5">
                <AlertCircle size={20} className="shrink-0" />
                <div>
                  <p className="font-semibold text-sm">Could not load jobs</p>
                  <p className="text-xs mt-0.5">{fetchError}</p>
                </div>
              </div>
            )}

            {/* Empty state */}
            {!loading && !fetchError && filteredJobs.length === 0 && (
              <div className="flex flex-col items-center justify-center py-24 gap-3 text-gray-400">
                <Search size={40} className="text-gray-300" />
                <p className="text-base font-medium text-gray-500">No jobs match your search</p>
                <p className="text-sm">Try adjusting your filters or search terms</p>
                {activeFilterCount > 0 && (
                  <button
                    type="button"
                    onClick={clearFilters}
                    className="mt-2 text-[#C1272D] text-sm font-semibold hover:underline"
                  >
                    Clear all filters
                  </button>
                )}
              </div>
            )}

            {/* Job cards */}
            {!loading && !fetchError && filteredJobs.map((job) => (
              <JobCard key={job.id} job={job} onApply={setApplyJob} />
            ))}
          </div>
        </div>
      </div>

      {/* Apply Modal */}
      {applyJob && (
        <ApplyModal job={applyJob} onClose={() => setApplyJob(null)} />
      )}
    </section>
  );
}
