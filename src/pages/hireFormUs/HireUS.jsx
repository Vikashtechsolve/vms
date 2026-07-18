import peopleImg from "../../../public/hireUs.png"; 
import TrustVerification from "../joinUs/TrustVarification";
import HowHiringWorks from "./HowHiringWorks";
import PostJobSection from "./PostJobSection";
import PricingHighlights from "./PricingHighlights";
import WhyHireFromUs from "./WhyHireFromUs";
import { useNavigate } from "react-router-dom";


export default function HireTrainersHero() {
  const navigate = useNavigate();
  return (
    <section
      className="relative"
      style={{
        background:
          "radial-gradient(circle at center, #F4F9FF 0%, #E6F0FF 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-28 text-center relative">

        {/* HEADING */}
        <h1 className="text-4xl md:text-5xl font-semibold text-black leading-tight">
          Hire Skilled Trainers <br /> with Confidence
        </h1>

        {/* DESCRIPTION */}
        <p className="mt-6 max-w-4xl mx-auto text-lg text-gray-700 leading-relaxed">
          Access a trusted network of skilled and verified trainers, streamline
          your hiring process, and confidently connect with the right
          professionals who match your organization’s training requirements.
        </p>

        {/* BUTTONS */}
        <div className="mt-10 flex justify-center gap-4 sm:gap-6 flex-wrap relative z-10">
          <button
            type="button"
            onClick={() => navigate("/CompanyRegistration")}
            className="btn-primary px-8 py-3 rounded-xl text-base"
          >
            Hire Trainers
          </button>

          <button
            type="button"
            onClick={() => navigate("/postJob-form")}
            className="btn-outline-light"
          >
            Post a Job
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="absolute right-0 bottom-0 hidden xl:block pointer-events-none">
          <img
            src={peopleImg}
            alt="Hire Trainers"
            className="w-[300px]"
          />
        </div>
      </div>
      <div>
        <WhyHireFromUs/>
        <PricingHighlights/>
        <PostJobSection/>
        <HowHiringWorks/>
        <TrustVerification/>
      </div>

      <div className="bg-[#F1F1F1] py-16 mt-20 text-center">
        <h1 className="text-2xl font-semibold text-black">Ready to Hire the Right Trainer?</h1>
        <button
          type="button"
          onClick={() => navigate("/postJob-form")}
          className="btn-primary px-8 py-3 rounded-xl text-base mt-4"
        >
          Post a Job
        </button>
      </div>
    </section>
  );
}
