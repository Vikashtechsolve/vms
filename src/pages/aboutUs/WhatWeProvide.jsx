import { Users, Building2, Check } from "lucide-react";

export default function WhatWeProvide() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-black">
            What We Provide
          </h2>
          <div className="w-20 h-[2px] bg-blue-600 mx-auto mt-2" />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* For Training Professionals */}
          <div className="bg-[#EAF2FF] rounded-xl p-10 relative">
            {/* Icon */}
            <div className="absolute -top-8 left-1/2 -translate-x-1/2">
              <div className="w-16 h-16 rounded-full bg-blue-700 text-white flex items-center justify-center shadow">
                <Users size={28} />
              </div>
            </div>

            <h3 className="mt-10 text-xl font-semibold text-center">
              For Training Professionals
            </h3>

            <ul className="mt-8 space-y-4 text-sm text-gray-700">
              <li className="flex gap-3">
                <Check className="text-blue-600 mt-1" size={18} />
                Create a verified trainer profile and showcase your skills and experience.
              </li>
              <li className="flex gap-3">
                <Check className="text-blue-600 mt-1" size={18} />
                Get access to genuine hiring opportunities from trusted companies and institutes.
              </li>
              <li className="flex gap-3">
                <Check className="text-blue-600 mt-1" size={18} />
                Receive job matches based on your expertise, availability, and preferred teaching mode.
              </li>
              <li className="flex gap-3">
                <Check className="text-blue-600 mt-1" size={18} />
                Choose flexible teaching options including full-time, part-time, or project-based roles.
              </li>
              <li className="flex gap-3">
                <Check className="text-blue-600 mt-1" size={18} />
                Build professional credibility and grow your training career with quality opportunities.
              </li>
            </ul>
          </div>

          {/* For Hiring Organizations */}
          <div className="bg-[#EAF2FF] rounded-xl p-10 relative">
            {/* Icon */}
            <div className="absolute -top-8 left-1/2 -translate-x-1/2">
              <div className="w-16 h-16 rounded-full bg-blue-700 text-white flex items-center justify-center shadow">
                <Building2 size={28} />
              </div>
            </div>

            <h3 className="mt-10 text-xl font-semibold text-center">
              For Hiring Organizations
            </h3>

            <ul className="mt-8 space-y-4 text-sm text-gray-700">
              <li className="flex gap-3">
                <Check className="text-blue-600 mt-1" size={18} />
                Hire from a pool of verified and industry-experienced trainers.
              </li>
              <li className="flex gap-3">
                <Check className="text-blue-600 mt-1" size={18} />
                Post detailed training requirements including skills, experience level, teaching mode, and duration.
              </li>
              <li className="flex gap-3">
                <Check className="text-blue-600 mt-1" size={18} />
                Get intelligent trainer matches aligned with your organization’s goals and budget.
              </li>
              <li className="flex gap-3">
                <Check className="text-blue-600 mt-1" size={18} />
                Choose flexible hiring models such as full-time, part-time, contractual, or project-based engagements.
              </li>
              <li className="flex gap-3">
                <Check className="text-blue-600 mt-1" size={18} />
                Receive dedicated support from VTS to ensure smooth coordination and quality assurance throughout the engagement.
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
