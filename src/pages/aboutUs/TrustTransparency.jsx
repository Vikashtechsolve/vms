import {
  BadgeCheck,
  RefreshCcw,
  Handshake,
  ThumbsUp,
} from "lucide-react";

import trustImg from "../../../public/trust.jpg";

export default function TrustTransparency() {
  return (
    <section className="bg-[#2E3548] py-12">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-white">
            Trust & Transparency
          </h2>
          <div className="w-24 h-[2px] bg-white mx-auto mt-2" />
        </div>

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* IMAGE (Desktop Left) */}
          <div className="hidden lg:flex justify-center">
            <div className="w-[500px] h-[500px] rounded-full overflow-hidden shadow-lg">
              <img
                src={trustImg}
                alt="Trust & Transparency"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* CONTENT */}
          <div className="space-y-10 text-white">

            {/* Item 1 */}
            <div className="flex gap-4">
              <BadgeCheck className="text-white mt-1 w-8 h-8" />
              <div>
                <h3 className="text-lg font-semibold">
                  Verified Trainers & Partners
                </h3>
                <p className="mt-2 text-sm text-gray-300 leading-relaxed">
                  We ensure that trainers and partners on our platform are
                  reviewed and verified to maintain authenticity, credibility,
                  and professional standards.
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex gap-4">
              <RefreshCcw className="text-white mt-1 w-8 h-8" />
              <div>
                <h3 className="text-lg font-semibold">
                  Clear & Honest Process
                </h3>
                <p className="mt-2 text-sm text-gray-300 leading-relaxed">
                  From trainer onboarding to hiring workflows, our processes
                  are designed to be transparent.
                </p>
              </div>
            </div>

            {/* IMAGE (Mobile Center) */}
            <div className="flex justify-center lg:hidden py-6">
              <div className="w-64 h-64 rounded-full overflow-hidden shadow-lg">
                <img
                  src={trustImg}
                  alt="Trust & Transparency"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex gap-4">
              <Handshake className="text-white mt-1 w-8 h-8" />
              <div>
                <h3 className="text-lg font-semibold">
                  Ethical & Reliable Practices
                </h3>
                <p className="mt-2 text-sm text-gray-300 leading-relaxed">
                  We follow ethical business practices and focus on fair
                  opportunities.
                </p>
              </div>
            </div>

            {/* Item 4 */}
            <div className="flex gap-4">
              <ThumbsUp className="text-white mt-1 w-8 h-8" />
              <div>
                <h3 className="text-lg font-semibold">
                  Quality-Driven Approach
                </h3>
                <p className="mt-2 text-sm text-gray-300 leading-relaxed">
                  Quality remains at the core of everything we do.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
