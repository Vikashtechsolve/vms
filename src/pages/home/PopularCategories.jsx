import {
  Code,
  Boxes,
  Palette,
  Brain,
  Database,
  Megaphone,
  Cloud,
  Shield,
  Smartphone,
} from "lucide-react";

const categories = [
  {
    title: "Web Development Trainers",
    desc: "Frontend, backend, and full-stack trainers for modern web technologies.",
    icon: Code,
  },
  {
    title: "DSA Trainers",
    desc: "Data Structures and Algorithms mentors for interviews and core concepts.",
    icon: Boxes,
  },
  {
    title: "UI/UX Trainers",
    desc: "Design mentors for UI, UX, product design, and design systems.",
    icon: Palette,
  },
  {
    title: "AI/ML Trainers",
    desc: "Trainers specializing in artificial intelligence and machine learning.",
    icon: Brain,
  },
  {
    title: "Data Science Trainers",
    desc: "Experts in data analysis, Python, statistics, and visualization.",
    icon: Database,
  },
  {
    title: "Digital Marketing Trainers",
    desc: "SEO, social media, performance marketing, and growth strategies.",
    icon: Megaphone,
  },
  {
    title: "Cloud Computing Trainers",
    desc: "Trainers skilled in AWS, Azure, Google Cloud, and cloud architecture.",
    icon: Cloud,
  },
  {
    title: "Cyber Security Trainers",
    desc: "Experts in network security, ethical hacking, and data protection.",
    icon: Shield,
  },
  {
    title: "App Development Trainers",
    desc: "Android, iOS, and cross-platform app development mentors.",
    icon: Smartphone,
  },
];

export default function PopularCategories() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-black">
            Popular Trainer Categories
          </h2>
          <div className="w-24 h-[2px] bg-blue-600 mx-auto mt-2"></div>
        </div>

        {/* Cards */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-[#F4F4F2] rounded-xl p-8 text-center shadow-md hover:shadow-lg transition"
              >
                {/* Icon */}
                <div className="flex justify-center mb-5">
                  <Icon className="w-10 h-10 text-red-600" />
                </div>

                <h3 className="text-lg font-semibold text-black">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center mt-8">
          <button className="bg-[#B11C20] p-4 rounded-2xl text-white">
            See All Categories
          </button>
        </div>
      </div>
    </section>
  );
}
