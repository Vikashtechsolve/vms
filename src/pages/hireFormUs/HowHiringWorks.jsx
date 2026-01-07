export default function HowHiringWorks() {
  const steps = [
    {
      step: "1",
      title: "Share Your Requirement",
      desc: "Tell us about your training needs, required skills, experience level, teaching mode, and availability by submitting a simple job requirement.",
    },
    {
      step: "2",
      title: "We Match you with Trainers",
      desc: "Based on your requirement, we shortlist and match you with suitable trainers who align with your expectations and training objectives.",
    },
    {
      step: "3",
      title: "Review & Interview",
      desc: "Review trainer profiles, connect with shortlisted trainers, and conduct discussions or interviews to evaluate fit before making a decision.",
    },
    {
      step: "4",
      title: "Hire the Right Trainer",
      desc: "Finalize your selection and onboard the trainer with confidence, knowing you have chosen the right professional for your training needs.",
    },
  ];

  return (
    <section className="bg-[#FAFAFA] py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-black">
            How Hiring Works
          </h2>
          <div className="w-20 h-[2px] bg-blue-600 mx-auto mt-2" />
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item) => (
            <div
              key={item.step}
              className="bg-[#E6F0FF] h-72 rounded-xl p-8 shadow-md text-center"
            >
              {/* Step Number */}
              <div className="w-12 h-12 mx-auto rounded-full bg-blue-700 text-white flex items-center justify-center text-lg font-semibold">
                {item.step}
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
