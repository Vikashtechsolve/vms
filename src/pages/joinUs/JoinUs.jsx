import { useState } from "react";
import {
  User,
  FileText,
  Send,
  CheckCircle,
  Building2,
  ClipboardList,
  Users,
  BadgeCheck,
} from "lucide-react";

import peopleImg from "../../../public/joinUs.png";
import TrustVerification from "./TrustVarification";

export default function JoinVMS() {
  const [active, setActive] = useState("trainer");

  return (
    <section
      className="relative"
      style={{
        background:
          "radial-gradient(circle at center, #F4F9FF 0%, #E6F0FF 100%)",
      }}
    >
      {/* ================= TOP SECTION ================= */}
      <div className="max-w-7xl mx-auto px-6 py-24 text-center relative">
        <h1 className="text-4xl md:text-5xl font-semibold text-black">
          Join VMS & <br className="hidden md:block" />
          Grow your Training Career
        </h1>

        {/* Right Image */}
        <div className="absolute right-6 bottom-0 hidden lg:block">
          <img src={peopleImg} alt="VMS Team" className="w-[350px]" />
        </div>

        <p className="mt-6 max-w-4xl mx-auto text-lg text-gray-700">
          We bring together skilled trainers and trusted organizations on one
          seamless platform, making it easier to showcase your expertise, find
          the right opportunities, and collaborate with companies that value
          quality training.
        </p>

        {/* Toggle */}
        <div className="mt-10 flex justify-center">
          <div className="bg-[#EFEFEF] rounded-full p-2 flex gap-2">
            <button
              onClick={() => setActive("trainer")}
              className={`px-6 py-2 rounded-full text-sm font-medium ${
                active === "trainer"
                  ? "bg-[#B11C20] text-white"
                  : "text-gray-600"
              }`}
            >
              Join as Trainer
            </button>

            <button
              onClick={() => setActive("company")}
              className={`px-6 py-2 rounded-full text-sm font-medium ${
                active === "company"
                  ? "bg-[#B11C20] text-white"
                  : "text-gray-600"
              }`}
            >
              Join as Company
            </button>
          </div>
        </div>
      </div>

      {/* ================= DYNAMIC CONTENT ================= */}
      <div className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">

          {/* ================= TRAINER VIEW ================= */}
          {active === "trainer" && (
            <>
              <h2 className="text-3xl font-semibold">
                Start Your Journey as a Trainer
              </h2>
              <div className="w-24 h-[2px] bg-blue-600 mx-auto mt-2" />

              <p className="mt-4 text-lg text-gray-700">
                Create your profile, apply for opportunities, and get hired by
                trusted companies
              </p>

              {/* Info Card */}
              <div className="mt-10 bg-[#EAF2FF] rounded-xl p-10">
                <User className="mx-auto text-blue-700 mb-4" size={36} />
                <h3 className="font-semibold text-lg">Join as a Trainer</h3>
                <p className="text-sm text-gray-600 mt-3 leading-relaxed">
                  Become part of a trusted training network, showcase your
                  expertise, and connect with verified companies.
                </p>

                <button className="mt-6 bg-[#B11C20] text-white px-6 py-2 rounded-lg">
                  Build your Trainer Profile »
                </button>
              </div>

              {/* How it Works */}
              <h3 className="text-2xl font-semibold mt-16">How It Works</h3>
              <div className="w-20 h-[2px] bg-blue-600 mx-auto mt-2" />

              <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mt-12">
                {[
                  {
                    icon: <User />,
                    title: "Join the Platform",
                    desc: "Register on VMS and become part of a growing trainer network.",
                  },
                  {
                    icon: <FileText />,
                    title: "Complete Your Profile",
                    desc: "Add skills, experience, certifications, and availability.",
                  },
                  {
                    icon: <Send />,
                    title: "Apply for Opportunities",
                    desc: "Browse jobs that match your expertise and goals.",
                  },
                  {
                    icon: <CheckCircle />,
                    title: "Get Hired",
                    desc: "Connect with companies and start your training journey.",
                  },
                ].map((item, i) => (
                  <div key={i} className="text-center">
                    <div className="w-14 h-14 mx-auto rounded-full bg-white shadow flex items-center justify-center text-blue-700">
                      {item.icon}
                    </div>
                    <h4 className="mt-4 font-semibold">{item.title}</h4>
                    <p className="text-sm text-gray-600 mt-2">{item.desc}</p>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* ================= COMPANY VIEW ================= */}
          {active === "company" && (
            <>
              <h2 className="text-3xl font-semibold">
                Start Hiring with Confidence
              </h2>
              <div className="w-24 h-[2px] bg-blue-600 mx-auto mt-2" />

              <p className="mt-4 text-lg text-gray-700">
                Post requirements, connect with skilled trainers, and hire the
                right talent
              </p>

              {/* Info Card */}
              <div className="mt-10 bg-[#EAF2FF] rounded-xl p-10">
                <Building2 className="mx-auto text-blue-700 mb-4" size={36} />
                <h3 className="font-semibold text-lg">Join as a Company</h3>
                <p className="text-sm text-gray-600 mt-3 leading-relaxed">
                  Access verified trainers across multiple domains and simplify
                  your hiring process.
                </p>

                <button className="mt-6 bg-[#B11C20] text-white px-6 py-2 rounded-lg">
                  Hire Training Experts »
                </button>
              </div>

              {/* How it Works */}
              <h3 className="text-2xl font-semibold mt-16">How It Works</h3>
              <div className="w-20 h-[2px] bg-blue-600 mx-auto mt-2" />

              <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mt-12">
                {[
                  {
                    icon: <Building2 />,
                    title: "Join the Platform",
                    desc: "Sign up to access a curated pool of trainers.",
                  },
                  {
                    icon: <ClipboardList />,
                    title: "Post a Job",
                    desc: "Share requirements, skills, and engagement details.",
                  },
                  {
                    icon: <Users />,
                    title: "Interview Trainer",
                    desc: "Review profiles and connect directly with trainers.",
                  },
                  {
                    icon: <BadgeCheck />,
                    title: "Hire Trainer",
                    desc: "Finalize and start training with confidence.",
                  },
                ].map((item, i) => (
                  <div key={i} className="text-center">
                    <div className="w-14 h-14 mx-auto rounded-full bg-white shadow flex items-center justify-center text-blue-700">
                      {item.icon}
                    </div>
                    <h4 className="mt-4 font-semibold">{item.title}</h4>
                    <p className="text-sm text-gray-600 mt-2">{item.desc}</p>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
      <div>
        <TrustVerification/>
      </div>

      <div className="justify-center items-center py-10 px-6 flex flex-col gap-6">
        <h1 className="text-2xl font-bold text-center" >Ready to get started with VTS MANPOWER</h1>
        <button className="bg-red-600 ali hover:bg-red-700 transition text-white px-6 py-3 rounded-lg font-medium">
          Join
        </button>
      </div>
    </section>
  );
}
