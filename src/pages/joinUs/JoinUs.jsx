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
  Globe,
  FilePlus,
  FilePlusCorner,
  IdCard,
  UserPlus,
} from "lucide-react";

import peopleImg from "../../../public/joinUs.png";
import TrustVerification from "./TrustVarification";
import { useNavigate } from "react-router-dom";

export default function JoinVMS() {
  const [active, setActive] = useState("trainer");
  const navigate = useNavigate();

  return (
    <section
      className="relative"
      style={{
        background:
          "radial-gradient(circle at center, #F4F9FF 0%, #E6F0FF 100%)",
      }}
    >
      {/* ================= TOP SECTION ================= */}
      <div className="max-w-7xl mx-auto px-6 py-4 lg:py-24 text-center relative">
        <h1 className="text-2xl md:text-5xl font-semibold text-black text-left md:text-center">
          Join VMS & <br className=" md:block" />
          Grow your Training Career
        </h1>

        {/* Right Image */}
        <div className="absolute right-0 bottom-0 hidden lg:block">
          <img src={peopleImg} alt="VMS Team" className="w-[300px]" />
        </div>

        <p className="mt-6 md:text-justify max-w-4xl mx-auto text-lg text-gray-700">
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
        <div className="max-w-full mx-auto px-6 text-center">
          {/* ================= TRAINER VIEW ================= */}
          {active === "trainer" && (
            <div className="">
              <h2 className="text-3xl font-semibold">
                Start Your Journey as a Trainer
              </h2>
              <div className="w-24 h-[2px] bg-blue-600 mx-auto mt-2" />

              <p className="mt-4 text-lg text-gray-700">
                Create your profile, apply for opportunities, and get hired by
                trusted companies
              </p>

              {/* Info Card */}
              <div
                className="mt-10  bg-[#EAF2FF] rounded-xl p-6 sm:p-8 lg:p-10 w-full lg:max-w-7xl
                 sm:mx-6 lg:ml-20 lg:mr-0">
                <User className="mx-auto text-blue-700 mb-4" size={36} />
                <h3 className="font-semibold text-lg">Join as a Trainer</h3>
                <p className="text-sm text-left sm:text-center text-gray-600 mt-3 leading-relaxed">
                  Become part of a trusted training network where your skills
                  and experience are valued. By joining VTS Manpower, you can
                  create a professional trainer profile, showcase your
                  expertise, and connect with verified companies looking for
                  qualified trainers. Our platform helps you find relevant
                  training opportunities, apply with ease, and get hired based
                  on your skills, experience, and availability.
                </p>
                <p className="text-sm text-left sm:text-center text-gray-600 mt-3 leading-relaxed">
                  Whether you are an experienced trainer or just starting your
                  professional journey, VTS Manpower provides a transparent and
                  secure environment to grow your career, expand your reach, and
                  work with organizations that match your goals.
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
                    icon: <Globe />,
                    title: "Join the Platform",
                    desc: "Register on VMS to become part of a growing network of professional trainers across multiple domains. Create your account in minutes and start your journey with us.",
                  },
                  {
                    icon: <FilePlusCorner />,
                    title: "Complete Your Profile",
                    desc: "Build a detailed trainer profile by adding your skills, experience, certifications, preferred training mode, and availability to help companies understand your expertise better.",
                  },
                  {
                    icon: <IdCard />,
                    title: "Apply for Opportunities",
                    desc: "Browse available training opportunities posted by companies and apply to roles that match your skills, experience level, and career goals.",
                  },
                  {
                    icon: <UserPlus fill="blue" />,
                    title: "Get Hired",
                    desc: "Connect directly with hiring companies, attend interviews or discussions, finalize terms, and begin delivering training with confidence.",
                  },
                ].map((item, i) => (
                  <div key={i} className="text-center">
                    <div className="w-14 h-14 mx-auto rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center text-blue-700">
                      {item.icon}
                    </div>
                    <h4 className="mt-4 font-semibold">{item.title}</h4>
                    <p className="text-sm text-gray-600 mt-2">{item.desc}</p>
                  </div>
                ))}
              </div>
              <div className="mt-4">
                <TrustVerification />
              </div>
              <div className="justify-center items-center py-10 px-6 flex flex-col gap-6">
                <h1 className="text-2xl font-bold text-center">
                  Ready to get started with VTS MANPOWER
                </h1>
                <button
                  onClick={() => navigate("/TrainerProfile")}
                  className="bg-[#B11C20] ali hover:bg-red-700 transition text-white px-6 py-3 rounded-lg font-medium"
                >
                  Join as a Trainer
                </button>
              </div>
            </div>
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
              <div
                className="mt-10  bg-[#EAF2FF] rounded-xl p-6 sm:p-8 lg:p-10 w-full lg:max-w-7xl
                 sm:mx-6 lg:ml-20 lg:mr-0">
                <Building2 className="mx-auto text-blue-700 mb-4" size={36} />
                <h3 className="font-semibold text-lg">Join as a Company</h3>
                <p className="text-sm text-left sm:text-center text-gray-600 mt-3 leading-relaxed">
                  Join VTS Manpower to access a curated pool of skilled and
                  verified trainers across multiple domains. By registering your
                  company, you can post your training requirements, review
                  detailed trainer profiles, and connect directly with
                  professionals who match your needs. Our platform simplifies
                  the hiring process and helps you find the right trainers
                  efficiently and confidently.
                </p>

                <p className="text-sm text-left sm:text-center text-gray-600 mt-3 leading-relaxed">
                  Whether you require trainers for short-term programs or
                  long-term engagements, VTS Manpower provides a reliable and
                  secure environment to evaluate candidates, conduct interviews,
                  and hire trainers who align with your organizational goals.
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
                    desc: "Sign up your organization on VMS to access a curated pool of qualified and verified trainers across various technical and professional domains.",
                  },
                  {
                    icon: <ClipboardList />,
                    title: "Post a Job",
                    desc: "Create detailed job postings by sharing training requirements, skill expectations, duration, location or mode, and budget preferences.",
                  },
                  {
                    icon: <Users />,
                    title: "Interview Trainer",
                    desc: "Review trainer profiles, shortlist suitable candidates, and connect with them directly to assess skills, communication, and training approach.",
                  },
                  {
                    icon: <BadgeCheck />,
                    title: "Hire Trainer",
                    desc: "Finalize the right trainer for your requirement and start your training engagement smoothly with complete clarity and confidence.",
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
               <div className="mt-4">
                <TrustVerification />
              </div>
              <div className="justify-center items-center py-10 px-6 flex flex-col gap-6">
                <h1 className="text-2xl font-bold text-center">
                  Ready to get started with VTS MANPOWER
                </h1>
                <button
                  onClick={() => navigate("/CompanyRegistration")}
                  className="bg-[#B11C20] ali hover:bg-red-700 transition text-white px-6 py-3 rounded-lg font-medium"
                >
                  Join as a company
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
