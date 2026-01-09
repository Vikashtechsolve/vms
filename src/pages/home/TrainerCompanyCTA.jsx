import { useNavigate } from 'react-router-dom';


export default function TrainerCompanyCTA() {

    // const navigate = useNavigate();

  return (
    <section className="bg-white">
      
      {/* FOR TRAINERS */}
      <div className="bg-[#EAF2FF] py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-black">
            For Trainers
          </h2>
          <div className="w-20 h-[2px] bg-blue-600 mx-auto mt-2"></div>

          <p className="mt-6 text-lg text-gray-700">
            Discover the right training opportunities and grow your
            professional journey with VMS
          </p>

          <div className="mt-10 flex gap-2 justify-center">
            <button
            //  onClick={() => navigate('/join-us')}
             className="bg-[#B11C20] hover:bg-red-700 transition text-white px-8 py-3 rounded-xl font-medium text-sm">
              Join as Trainer
            </button>

            <button className="bg-[#B11C20] hover:bg-red-700 transition text-white px-8 py-3 rounded-xl text-sm font-medium">
              Explore Jobs
            </button>
          </div>
        </div>
      </div>

      {/* FOR COMPANIES */}
      <div className="bg-[#EAF2FF] py-20 mt-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-black">
            For Companies
          </h2>
          <div className="w-20 h-[2px] bg-blue-600 mx-auto mt-2"></div>

          <p className="mt-6 text-lg text-gray-700">
            Hire skilled trainers quickly and efficiently to meet
            your training and business needs
          </p>

          <div className="mt-10 flex gap-2 justify-center">
            <button className="bg-[#B11C20] hover:bg-red-700 transition text-white px-8 py-3 rounded-xl text-sm font-medium">
              Join as a Company
            </button>

            <button className="bg-[#B11C20] hover:bg-red-700 transition text-white px-8 py-3 rounded-xl text-sm font-medium">
              Post a Job
            </button>
          </div>
        </div>
      </div>

    </section>
  );
}
