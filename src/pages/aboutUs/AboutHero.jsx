import aboutImg from "../../../public/aboutUs.png"; 


export default function AboutHero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background:
          "radial-gradient(circle at center, #F4F9FF 0%, #E6F0FF 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-28 text-center relative">

        {/* HEADING */}
        <h1 className="text-4xl md:text-5xl font-semibold text-black">
          Connecting Trainers & Companies with Trust
        </h1>

        {/* DESCRIPTION */}
        <p className="mt-8 max-w-4xl mx-auto text-lg text-gray-700 leading-relaxed">
          Trainer Adda is a trusted platform designed to
          help trainers find the right opportunities and enable companies to
          hire skilled training professionals with confidence.
        </p>

        {/* RIGHT IMAGE */}
        <div className="absolute right-0 bottom-0 hidden lg:block pointer-events-none">
          <img
            src={aboutImg}
            alt="Trainer Adda Team"
            className="w-[340px]"
          />
        </div>
      </div>
    </section>
  );
}
