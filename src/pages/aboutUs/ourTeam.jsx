const teamMembers = [
  {
    name: "Vikash Dubey",
    role: "Founder & Tech Mentor",
    desc: "Vikash Dubey is the visionary behind Vikash Tech Solutions, dedicated to transforming the way students and professionals learn. With deep expertise in full-stack development and product architecture.",
    img: "/vikashDubey.jpg",
  },
  {
    name: "Amit Vaghamshi",
    role: "Software Developer / Tech Mentor",
    desc: "A passionate tech mentor with deep expertise in software development and coding fundamentals. He guides learners through hands-on projects, real-world problem-solving, and industry-relevant practices.",
    img: "/Amit.jpg",
  },
  {
    name: "Swati Sharma",
    role: "Program Manager",
    desc: "A results-driven Program Manager skilled in leading cross-functional teams and ensuring seamless project execution from start to finish.",
    img: "/Swati.jpg",
  },
  {
    name: "Jiya Kapoor",
    role: "UI/UX Designer",
    desc: "A passionate UI/UX Designer dedicated to crafting intuitive, user-centered digital experiences and visually stunning interfaces.",
    img: "Jiya.jpg",
  },
  {
    name: "Mustakim Shaikh",
    role: "Senior Software Developer",
    desc: "A Senior Software Developer with strong expertise in designing scalable and efficient systems and writing high-quality code.",
    img: "/mustakim.jpg",
  },
  {
    name: "Vikram Desai",
    role: "Tech Mentor",
    desc: "Provides mentorship on coding best practices, debugging techniques, and industry-ready skills to prepare students for competitive environments.",
    img: "/vikram.jpg",
  },
];

export default function OurTeam() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-black">
            Our Team
          </h2>
          <div className="w-20 h-[2px] bg-blue-600 mx-auto mt-2"></div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-20">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center">

              {/* Image */}
              <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-6">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Name */}
              <h3 className="text-lg font-semibold text-black">
                {member.name}
              </h3>

              {/* Role */}
              <p className="text-sm text-gray-600 mt-1">
                {member.role}
              </p>

              {/* Description */}
              <p className="text-sm text-gray-500 mt-4 leading-relaxed">
                {member.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
