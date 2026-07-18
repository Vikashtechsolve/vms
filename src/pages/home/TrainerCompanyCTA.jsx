import { useNavigate } from "react-router-dom";

export default function TrainerCompanyCTA() {
  const navigate = useNavigate();

  return (
    <section className="bg-white pb-8">
      {/* FOR TRAINERS */}
      <div className="bg-[#EAF2FF] py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-black">For Trainers</h2>
          <div className="w-20 h-[2px] bg-blue-600 mx-auto mt-2" />

          <p className="mt-6 text-lg text-gray-700">
            Discover the right training opportunities and grow your
            professional journey with Trainer Adda
          </p>

          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <button
              type="button"
              onClick={() => navigate("/TrainerProfile")}
              className="btn-primary px-8 rounded-xl"
            >
              Join as Trainer
            </button>

            <button
              type="button"
              onClick={() => navigate("/find-jobs")}
              className="btn-secondary px-8 rounded-xl"
            >
              Explore Jobs
            </button>
          </div>
        </div>
      </div>

      {/* FOR COMPANIES */}
      <div className="bg-[#EAF2FF] py-16 lg:py-20 mt-12 lg:mt-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-black">For Companies</h2>
          <div className="w-20 h-[2px] bg-blue-600 mx-auto mt-2" />

          <p className="mt-6 text-lg text-gray-700">
            Hire skilled trainers quickly and efficiently to meet
            your training and business needs
          </p>

          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <button
              type="button"
              onClick={() => navigate("/CompanyRegistration")}
              className="btn-primary px-8 rounded-xl"
            >
              Join as a Company
            </button>

            <button
              type="button"
              onClick={() => navigate("/postJob-form")}
              className="btn-secondary px-8 rounded-xl"
            >
              Post a Job
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
