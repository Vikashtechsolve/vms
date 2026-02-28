import { Briefcase, BarChart, MapPin, Clock, Globe, Users } from "lucide-react";

export default function JobCard({ job, onApply }) {
  const skills = Array.isArray(job.skills)
    ? job.skills
    : job.skills
    ? job.skills.split(",").map((s) => s.trim()).filter(Boolean)
    : [];

  const languages = Array.isArray(job.languages)
    ? job.languages
    : job.language
    ? job.language.split(",").map((l) => l.trim()).filter(Boolean)
    : [];

  const trainingMode = job.trainingMode || job.mode || "";

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-200 p-6 flex flex-col gap-4 border border-gray-100">
      {/* TOP: title + logo */}
      <div className="flex justify-between items-start gap-4">
        <div className="flex-1">
          <h3 className="text-lg font-bold text-gray-900 leading-snug">
            {job.title}
          </h3>
          {skills.length > 0 && (
            <p className="mt-1 text-sm text-gray-500">
              <span className="font-medium text-gray-700">Skills:</span>{" "}
              {skills.join(", ")}
            </p>
          )}
        </div>
        <div className="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center shadow-sm shrink-0">
          {job.logo ? (
            <img
              src={job.logo}
              alt="company logo"
              className="object-contain w-10 h-10"
            />
          ) : (
            <span className="text-xs text-gray-400 font-medium">LOGO</span>
          )}
        </div>
      </div>

      {/* META TAGS */}
      <div className="flex flex-wrap gap-2 text-xs">
        {job.level && (
          <span className="flex items-center gap-1 bg-blue-50 text-blue-700 px-3 py-1 rounded-full font-medium">
            <BarChart size={12} /> {job.level}
          </span>
        )}
        {job.trainingType && (
          <span className="bg-purple-50 text-purple-700 px-3 py-1 rounded-full font-medium">
            {job.trainingType}
          </span>
        )}
        {trainingMode && (
          <span className="bg-green-50 text-green-700 px-3 py-1 rounded-full font-medium">
            {trainingMode}
          </span>
        )}
        {job.location && (
          <span className="flex items-center gap-1 bg-orange-50 text-orange-700 px-3 py-1 rounded-full font-medium">
            <MapPin size={12} /> {job.location}
          </span>
        )}
      </div>

      {/* DETAILS ROW */}
      <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-600">
        {job.experience && (
          <span className="flex items-center gap-1">
            <Briefcase size={14} className="text-gray-400" />
            <span className="font-medium text-gray-700">Exp:</span> {job.experience}
          </span>
        )}
        {job.duration && (
          <span className="flex items-center gap-1">
            <Clock size={14} className="text-gray-400" />
            <span className="font-medium text-gray-700">Duration:</span> {job.duration}
          </span>
        )}
        {job.trainersNeeded && (
          <span className="flex items-center gap-1">
            <Users size={14} className="text-gray-400" />
            <span className="font-medium text-gray-700">Trainers needed:</span> {job.trainersNeeded}
          </span>
        )}
      </div>

      {/* FOOTER: accommodation, language, apply */}
      <div className="flex items-center justify-between gap-4 pt-2 border-t border-gray-100">
        <div className="flex flex-wrap gap-x-4 text-xs text-gray-500">
          {job.accommodation && (
            <span>
              Accommodation: <span className="text-gray-700 font-medium">{job.accommodation}</span>
            </span>
          )}
          {languages.length > 0 && (
            <span className="flex items-center gap-1">
              <Globe size={12} />
              {languages.join(", ")}
            </span>
          )}
        </div>
        {onApply && (
          <button
            type="button"
            onClick={() => onApply(job)}
            className="shrink-0 bg-[#B11C20] hover:bg-[#8f1519] text-white text-sm font-semibold px-5 py-2 rounded-lg transition-colors duration-150"
          >
            Apply
          </button>
        )}
      </div>
    </div>
  );
}
