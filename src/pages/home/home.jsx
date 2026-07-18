import { useNavigate } from "react-router-dom";
import heroImg from "../../../public/home.png";
import { UsersRound, MapPin, UserRoundCheck, CloudCheck } from "lucide-react";

const stats = [
  {
    icon: <UsersRound color="#B11C20" fill="#B11C20" className="shrink-0" />,
    value: "10,000 +",
    label: "Skilled Trainers Available",
  },
  {
    icon: <MapPin fill="#fff" color="#B11C20" className="shrink-0" />,
    value: "2,500 +",
    label: "Companies Hiring Trainers",
  },
  {
    icon: <UserRoundCheck fill="#B11C20" color="#B11C20" className="shrink-0" />,
    value: "25,000 +",
    label: "Successful Trainer Placements",
  },
  {
    icon: <CloudCheck color="#B11C20" className="shrink-0" />,
    value: "98%",
    label: "Client & Trainer Satisfaction",
  },
];

const Home = () => {
  const navigate = useNavigate();

  return (
    <section
      className="w-full pb-16"
      style={{
        background: "linear-gradient(180deg, #E6F0FF 0%, #F5F9FF 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-20 grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
        <div>
          <h1 className="text-4xl lg:text-5xl font-bold text-black leading-tight">
            Find & Hire <br /> Right Trainers
          </h1>

          <p className="mt-5 text-gray-700 max-w-lg text-base leading-relaxed">
            A trusted platform where trainers discover the right opportunities
            and companies connect with skilled professionals.
          </p>

          <div className="w-24 h-[2px] bg-blue-600 mt-6" />

          <div className="mt-8 flex flex-wrap gap-4">
            <button
              type="button"
              onClick={() => navigate("/TrainerProfile")}
              className="btn-primary"
            >
              Join as Trainer
            </button>

            <button
              type="button"
              onClick={() => navigate("/CompanyRegistration")}
              className="btn-secondary"
            >
              Hire Trainers
            </button>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <img
            src={heroImg}
            alt="Find and hire trainers on Trainer Adda"
            className="max-w-full h-auto"
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((item) => (
          <div
            key={item.label}
            className="bg-white/80 backdrop-blur-sm rounded-xl px-4 py-4 min-h-[88px] flex gap-4 items-center shadow-sm border border-white/60"
          >
            {item.icon}
            <div>
              <h3 className="text-xl font-semibold text-black">{item.value}</h3>
              <p className="text-sm text-gray-600">{item.label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Home;
