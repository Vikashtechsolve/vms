import { useState } from "react";

const trainerSteps = [
  {
    step: "1",
    title: "Create Your Profile",
    desc: "Build your professional profile with skills, experience, and availability to get discovered by companies.",
  },
  {
    step: "2",
    title: "Apply for Jobs",
    desc: "Browse relevant training opportunities and apply to roles that match your expertise.",
  },
  {
    step: "3",
    title: "Get Hired",
    desc: "Connect with companies, discuss requirements, and start your training assignment.",
  },
];

const companySteps = [
  {
    step: "1",
    title: "Post a Job",
    desc: "Share your training needs, required skills, and project details in a few simple steps.",
  },
  {
    step: "2",
    title: "Review Trainer Profiles",
    desc: "Browse verified trainer profiles, compare skills, experience, and availability.",
  },
  {
    step: "3",
    title: "Hire the Right Trainer",
    desc: "Connect directly, finalize details, and hire trainers that match your business needs.",
  },
];

export default function HowItWorks() {
  const [activeTab, setActiveTab] = useState("trainers");
  const steps = activeTab === "trainers" ? trainerSteps : companySteps;

  return (
    <section className="bg-[#FAFAFA] py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        
        {/* Heading */}
        <h2 className="text-3xl font-semibold text-black">How It Works</h2>
        <div className="w-20 h-[2px] bg-blue-600 mx-auto mt-2"></div>

        {/* Toggle */}
        <div className="mt-8 flex justify-center">
          <div className="bg-[#EEEEEE] rounded-full p-2 flex gap-2">
            <button
              onClick={() => setActiveTab("trainers")}
              className={`px-3 py-2 rounded-full text-sm font-medium transition
                ${
                  activeTab === "trainers"
                    ? "bg-[#B11C20] text-white"
                    : "bg-white text-black"
                }`}
            >
              For Trainers
            </button>

            <button
              onClick={() => setActiveTab("companies")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition
                ${
                  activeTab === "companies"
                    ? "bg-[#B11C20] text-white"
                    : "bg-white text-black"
                }`}
            >
              For Companies
            </button>
          </div>
        </div>

        {/* Cards */}
        <div
          className="
            mt-14
            flex gap-6 overflow-x-auto
            snap-x snap-mandatory scrollbar-hide
            md:grid md:grid-cols-3 md:gap-8
            md:overflow-visible
          "
        >
          {steps.map((item) => (
            <div
              key={item.step}
              className="
                bg-[#EAF2FF] rounded-xl p-8
                shadow-md hover:shadow-lg transition
                min-w-[85%] snap-center
                md:min-w-0
              "
            >
              {/* Step Circle */}
              <div className="w-12 h-12 mx-auto rounded-full bg-blue-700 text-white flex items-center justify-center text-xl font-semibold">
                {item.step}
              </div>

              <h3 className="mt-6 text-lg font-semibold text-black">
                {item.title}
              </h3>

              <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
