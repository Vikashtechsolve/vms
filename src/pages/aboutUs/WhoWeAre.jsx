import { Target, Eye } from "lucide-react";
import teamImg from "../../../public/WhoWeAre.jpg";


export default function WhoWeAre() {
  return (
    <section className="bg-[#F7F7F5] py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-black">
            Who We Are
          </h2>
          <div className="w-20 h-[2px] bg-blue-600 mx-auto mt-2" />
        </div>

        {/* Top Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* LEFT TEXT */}
          <div className="text-gray-600 text-sm leading-relaxed space-y-6">
            <p>
              Vikash Manpower Solution (VMS) is a dedicated hiring platform built
              to connect skilled trainers with organizations that value quality
              education and professional training. We focus on creating
              meaningful connections where trainers find the right
              opportunities and companies discover reliable teaching talent.
            </p>

            <p>
              Our platform is designed to simplify the trainer hiring process
              by bringing verified professionals and genuine requirements
              together in one trusted space. From technical trainers to domain
              experts, we ensure that every match is purposeful, transparent,
              and aligned with real-world needs.
            </p>

            <p>
              Backed by Vikash Tech Solution, VMS follows a quality-first
              approach—ensuring trainers are carefully evaluated and companies
              receive the best-fit talent for their training goals.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center">
            <img
              src={teamImg}
              alt="Team Discussion"
              className="rounded-2xl shadow-lg w-full max-w-md object-cover"
            />
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="mt-20 space-y-8">

          {/* Mission */}
          <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md p-6 flex gap-4 items-start">
            <div className="text-blue-600 mt-1">
              <Target size={26} />
            </div>
            <div>
              <h3 className="font-semibold text-lg text-black">
                Our Mission
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                To connect trainers and organizations through a trusted,
                quality-driven hiring platform.
              </p>
            </div>
          </div>

          {/* Vision */}
          <div className="max-w-3xl mx-auto lg:mr-20 bg-white rounded-xl shadow-md p-6 flex gap-4 items-start">
            <div className="text-blue-600 mt-1">
              <Eye size={26} />
            </div>
            <div>
              <h3 className="font-semibold text-lg text-black">
                Our Vision
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                To be the most reliable trainer hiring ecosystem focused on
                growth, trust, and excellence.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
