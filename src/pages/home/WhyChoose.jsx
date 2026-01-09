const features = [
  {
    title: "Verified Trainers",
    desc: "Every trainer on VMS goes through a verification process to ensure their skills, experience, and background meet professional training standards. This helps companies confidently connect with qualified and reliable trainers.",
    image: "/public/home1.png",
  },
  {
    title: "Trusted Companies",
    desc: "We partner with credible and verified organizations to maintain a professional ecosystem where trainers can work on genuine opportunities and companies can hire with confidence.",
    image: "/public/home2.png",
  },
  {
    title: "Wide Trainer Network",
    desc: "Access a large and diverse pool of trainers across multiple domains, ensuring the right expertise is always available for your business or learning needs.",
    image: "/public/home3.png",
  },
  {
    title: "Flexible Hiring Models",
    desc: "Hire trainers for short-term, long-term, part-time, or full-time requirements with flexible engagement models tailored to your needs.",
    image: "/public/home4.png",
  },
  {
    title: "End-to-End Support",
    desc: "From onboarding to engagement management, VMS provides complete support to ensure a smooth and successful training collaboration.",
    image: "/public/home5.png",
  },
];

export default function WhyChooseVMS() {
  return (
    <section className="bg-[#FAFAFA] py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-semibold text-black">Why Choose VMS</h2>
          <div className="w-20 h-[2px] bg-blue-600 mx-auto mt-2"></div>
        </div>

        {/* Content */}
        <div className="space-y-16">
          {features.map((item, index) => {
            const isReverse = index % 2 !== 0;

            return (
              <div
                key={index}
                className={`flex items-center gap-6 ${
                  isReverse ? "flex-row-reverse" : "flex-row"
                }`}
              >
                {/* Image */}
                <div className="w-1/3 flex justify-center">
                  <div
                    className=" bg-[#EAF2FF] 
                            rounded-full 
                            w-24 h-24 
                            lg:w-36 lg:h-36 
                            flex items-center justify-center 
                            shadow-md"
                                          >
                    <img
                      src={item.image}
                      alt={item.title}
                      className=" w-20 h-20 
                            lg:w-40 lg:h-40 
                            object-contain"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="w-2/3 bg-white border border-gray-200 rounded-xl p-4 shadow-md">
                  <h3 className="text-lg font-semibold text-black">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-md text-gray-600 leading-relaxed">
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
