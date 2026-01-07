const features = [
  {
    title: "Verified Trainers",
    desc: "Every trainer on VMS goes through a verification process to ensure their skills, experience, and background meet professional training standards. This helps companies confidently connect with qualified and reliable trainers.",
    image: "/images/verified-trainers.png",
  },
  {
    title: "Trusted Companies",
    desc: "We partner with credible and verified organizations to maintain a professional ecosystem where trainers can work on genuine opportunities and companies can hire with confidence.",
    image: "/images/trusted-companies.png",
  },
  {
    title: "Wide Trainer Network",
    desc: "Access a large and diverse pool of trainers across multiple domains, ensuring the right expertise is always available for your business or learning needs.",
    image: "/images/trainer-network.png",
  },
  {
    title: "Flexible Hiring Models",
    desc: "Hire trainers for short-term, long-term, part-time, or full-time requirements with flexible engagement models tailored to your needs.",
    image: "/images/flexible-hiring.png",
  },
  {
    title: "End-to-End Support",
    desc: "From onboarding to engagement management, VMS provides complete support to ensure a smooth and successful training collaboration.",
    image: "/images/support.png",
  },
];

export default function WhyChooseVMS() {
  return (
    <section className="bg-[#FAFAFA] py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-semibold text-black">
            Why Choose VMS
          </h2>
          <div className="w-20 h-[2px] bg-blue-600 mx-auto mt-2"></div>
        </div>

        {/* Content */}
        <div className="space-y-20">
          {features.map((item, index) => {
            const isReverse = index % 2 !== 0;

            return (
              <div
                key={index}
                className={`flex flex-col lg:flex-row items-center gap-12 ${
                  isReverse ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image */}
                <div className="w-full lg:w-1/2 flex justify-center">
                  <div className="bg-[#EAF2FF] rounded-full p-8 shadow-md">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-52 h-52 object-contain"
                    />
                  </div>
                </div>

                {/* Card */}
                <div className="w-full lg:w-1/2 bg-white rounded-xl p-8 shadow-lg">
                  <h3 className="text-xl font-semibold text-black">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-gray-600 leading-relaxed">
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
