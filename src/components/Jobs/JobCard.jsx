import { Briefcase, BarChart, MapPin } from "lucide-react";

export default function JobCard({ job }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 flex justify-between gap-6">
      {/* LEFT */}
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-black">
          {job.company} · <span className="font-normal">{job.title}</span>
        </h3>

        <p className="mt-2 text-gray-600 text-sm">
          Skills / Technologies Required : {job.skills.join(", ")}
        </p>

        <div className="flex items-center gap-1">
          <Briefcase size={16} /> {job.experience}
        </div> 

        <div className="mt-4 flex flex-wrap gap-4 text-sm text-gray-600">
            
          <div className="flex items-center gap-1">
            <BarChart size={16} /> {job.level}
          </div>|

          <div>{job.trainingType}</div>|
          <div>{job.trainingMode}</div>|

          <div className="flex items-center gap-1">
            <MapPin size={16} /> {job.location}
          </div>
        </div>

        <p className="mt-4 text-sm text-gray-500">
          Minimum Teaching Exp. : {job.minTeachingExp} &nbsp; • &nbsp;
          Accommodation Provided : {job.accommodation} &nbsp; • &nbsp; Language
          Preference : {job.languages.join(", ")}
        </p>
      </div>

      {/* RIGHT LOGO */}
      <div className="flex items-start">
        <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center shadow">
          {job.logo ? (
            <img
              src={job.logo}
              alt={job.company}
              className="object-contain w-12 h-12"
            />
          ) : (
            <span className="text-xs text-gray-500">LOGO</span>
          )}
        </div>
      </div>
    </div>
  );
}
