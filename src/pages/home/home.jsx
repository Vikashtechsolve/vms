import React from "react";
import heroImg from "../../../public/home.png"; 

const Home = () => {
  return (
    <section
      className="w-full"
      style={{
        background:
          "linear-gradient(180deg, #E6F0FF 0%, #F5F9FF 100%)",
      }}
    >
      {/* HERO SECTION */}
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
        
        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-4xl lg:text-5xl font-bold text-black leading-tight">
            Find & Hire <br /> Right Trainers
          </h1>

          <p className="mt-5 text-gray-700 max-w-lg text-base leading-relaxed">
            A trusted platform where trainers discover the right opportunities
            and companies connect with skilled professionals.
          </p>

          <div className="w-24 h-[2px] bg-blue-600 mt-6"></div>

          {/* BUTTONS */}
          <div className="mt-8 flex gap-4">
            <button className="bg-red-600 hover:bg-red-700 transition text-white px-6 py-3 rounded-lg font-medium">
              Join as Trainer
            </button>

            <button className="border border-gray-400 hover:border-black transition px-6 py-3 rounded-lg font-medium text-gray-800">
              Hire Trainers
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center lg:justify-end">
          <img
            src={heroImg}
            alt="Trainers"
            className="max-w-full h-auto"
          />
        </div>
      </div>

      {/* STATS SECTION */}
      <div className="max-w-7xl mx-auto px-6 pb-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {/* CARD 1 */}
        <div className="bg-[#F1F1F1] rounded-lg p-6 flex gap-4 items-center">
          <div className="text-red-600 text-2xl">👥</div>
          <div>
            <h3 className="text-xl font-semibold">10,000 +</h3>
            <p className="text-sm text-gray-600">
              Skilled Trainers Available
            </p>
          </div>
        </div>

        {/* CARD 2 */}
        <div className="bg-[#F1F1F1] rounded-lg p-6 flex gap-4 items-center">
          <div className="text-red-600 text-2xl">📍</div>
          <div>
            <h3 className="text-xl font-semibold">2,500 +</h3>
            <p className="text-sm text-gray-600">
              Companies Hiring Trainers
            </p>
          </div>
        </div>

        {/* CARD 3 */}
        <div className="bg-[#F1F1F1] rounded-lg p-6 flex gap-4 items-center">
          <div className="text-red-600 text-2xl">🎯</div>
          <div>
            <h3 className="text-xl font-semibold">25,000 +</h3>
            <p className="text-sm text-gray-600">
              Successful Trainer Placements
            </p>
          </div>
        </div>

        {/* CARD 4 */}
        <div className="bg-[#F1F1F1] rounded-lg p-6 flex gap-4 items-center">
          <div className="text-red-600 text-2xl">❤️</div>
          <div>
            <h3 className="text-xl font-semibold">98%</h3>
            <p className="text-sm text-gray-600">
              Client & Trainer Satisfaction
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
