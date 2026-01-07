import {
  Globe,
  Building2,
  Shuffle,
  UserCheck,
} from "lucide-react";

export default function HowVMSWorks() {
  const steps = [
    {
      icon: <Globe size={26} />,
      title: "Trainers Join the Network",
      desc: "Trainers create a detailed profile highlighting their skills, experience, and teaching preferences. Every profile goes through verification to ensure authenticity and quality.",
    },
    {
      icon: <Building2 size={26} />,
      title: "Companies Share Their Requirements",
      desc: "Organizations post their training needs by specifying required skills, experience level, mode of training, duration, and budget to get the most accurate matches.",
    },
    {
      icon: <Shuffle size={26} />,
      title: "Smart Matching & Review",
      desc: "Our system and expert team match trainers with company requirements. Companies can review profiles, interact, and shortlist trainers confidently.",
    },
    {
      icon: <UserCheck size={26} />,
      title: "Right Trainer Gets Hired",
      desc: "Once finalized, trainers are onboarded smoothly with continuous support from VTS to ensure a successful and productive collaboration.",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-black">
            How VMS Works
          </h2>
          <div className="w-20 h-[2px] bg-blue-600 mx-auto mt-2" />
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {steps.map((item, index) => (
            <div key={index}>
              {/* Icon */}
              <div className="w-16 h-16 mx-auto rounded-full bg-white shadow flex items-center justify-center text-blue-600">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="mt-6 font-semibold text-lg text-black">
                {item.title}
              </h3>

              {/* Description */}
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
