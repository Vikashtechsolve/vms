const features = [
  {
    title: "Verified Trainers",
    desc: "Every trainer on Trainer Adda goes through a verification process to ensure their skills, experience, and background meet professional training standards. This helps companies confidently connect with qualified and reliable trainers.",
    image: "/home1.png",
  },
  {
    title: "Trusted Companies",
    desc: "We partner with credible and verified organizations to maintain a professional ecosystem where trainers can work on genuine opportunities and companies can hire with confidence.",
    image: "/home2.png",
  },
  {
    title: "Wide Trainer Network",
    desc: "Access a large and diverse pool of trainers across multiple domains, ensuring the right expertise is always available for your business or learning needs.",
    image: "/home3.png",
  },
  {
    title: "Flexible Hiring Models",
    desc: "Hire trainers for short-term, long-term, part-time, or full-time requirements with flexible engagement models tailored to your needs.",
    image: "/home4.png",
  },
  {
    title: "End-to-End Support",
    desc: "From onboarding to engagement management, Trainer Adda provides complete support to ensure a smooth and successful training collaboration.",
    image: "/home5.png",
  },
];

export default function WhyChooseTrainerAdda() {
  return (
    <section className="bg-[#FAFAFA] py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-semibold text-black">Why Choose Trainer Adda</h2>
          <div className="w-20 h-[2px] bg-[#C1272D] mx-auto mt-2"></div>
        </div>

        {/* Content */}
        <div className="space-y-16">
          {features.map((item, index) => {
            const isReverse = index % 2 !== 0;

            return (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-center gap-6 md:gap-10 ${
                  isReverse ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Image */}
                <div className="w-full md:w-1/3 flex justify-center">
                  <div
                    className="bg-[#C1272D]/10 rounded-full w-24 h-24 lg:w-36 lg:h-36 flex items-center justify-center shadow-md overflow-hidden"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-16 h-16 lg:w-28 lg:h-28 object-contain"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="w-full md:w-2/3 bg-white border border-gray-200 rounded-xl p-4 sm:p-6 shadow-md">
                  <h3 className="text-lg font-semibold text-black">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-base text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
