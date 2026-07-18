export default function WhyChooseUs() {
  const steps = [
    {
      step: "1",
      title: "Trusted Trainer Network",
      desc: "Access a curated network of verified trainers across technical and professional domains, carefully evaluated for skills and reliability.",
    },
    {
      step: "2",
      title: "Smart Matching",
      desc: "We shortlist trainers who align with your skills, experience, training mode, and budget so you spend less time searching.",
    },
    {
      step: "3",
      title: "Transparent Process",
      desc: "Review profiles, connect directly, and interview candidates with clear communication at every step of the hiring journey.",
    },
    {
      step: "4",
      title: "End-to-End Support",
      desc: "From posting requirements to onboarding, Trainer Adda supports you so collaborations start smoothly and stay successful.",
    },
  ];

  return (
    <section className="bg-[#FAFAFA] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-black">
            Why Choose Us
          </h2>
          <div className="w-20 h-[2px] bg-[#C1272D] mx-auto mt-2" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item) => (
            <div
              key={item.step}
              className="bg-[#FFF0F0] min-h-72 rounded-xl p-8 shadow-md text-center"
            >
              <div className="w-12 h-12 mx-auto rounded-full bg-[#9C161A] text-white flex items-center justify-center text-lg font-semibold">
                {item.step}
              </div>
              <h3 className="mt-6 font-semibold text-lg text-black">
                {item.title}
              </h3>
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
