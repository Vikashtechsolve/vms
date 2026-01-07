import {
  BadgeCheck,
  ShieldCheck,
  PhoneCall,
  Building2,
} from "lucide-react";

import trustImg from "../../../public//circleImg.jpg"; 

export default function TrustVerification() {
  return (
    <section className=" py-8 text-white">
      <div className=" bg-[#2B3247] py-8 mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-semibold">
            Trust & Verification
          </h2>
          <div className="w-24 h-[2px] bg-white mx-auto mt-3" />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-16">

          {/* LEFT CONTENT */}
          <div className="space-y-14">
            {/* Item 1 */}
            <div>
              <div className="flex items-center gap-3 mb-3">
                <h3 className="text-xl font-semibold">
                  Verified Trainers Profile
                </h3>
                <BadgeCheck className="text-white" />
              </div>
              <p className="text-gray-300 leading-relaxed text-sm">
                Every trainer profile goes through a verification process to
                ensure authenticity of skills, experience, and professional
                background, helping companies hire with confidence.
              </p>
            </div>

            {/* Item 2 */}
            <div>
              <div className="flex items-center gap-3 mb-3">
                <h3 className="text-xl font-semibold">
                  Secure Communication
                </h3>
                <PhoneCall className="text-white" />
              </div>
              <p className="text-gray-300 leading-relaxed text-sm">
                All interactions between trainers and companies take place
                through a secure platform, ensuring privacy, data protection,
                and safe professional communication.
              </p>
            </div>
          </div>

          {/* CENTER IMAGE */}
          <div className="flex justify-center">
            <div className="w-80 h-80 rounded-full overflow-hidden border-8 border-[#3A445C] shadow-xl">
              <img
                src={trustImg}
                alt="Trust & Verification"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="space-y-14">
            {/* Item 3 */}
            <div>
              <div className="flex items-center gap-3 mb-3">
                <ShieldCheck className="text-white" />
                <h3 className="text-xl font-semibold">
                  Verified Companies
                </h3>
              </div>
              <p className="text-gray-300 leading-relaxed text-sm">
                Companies are reviewed before onboarding to maintain a trusted
                environment where trainers can work with genuine and credible
                organizations.
              </p>
            </div>

            {/* Item 4 */}
            <div>
              <div className="flex items-center gap-3 mb-3">
                <Building2 className="text-white" />
                <h3 className="text-xl font-semibold">
                  Quality-Focused Hiring
                </h3>
              </div>
              <p className="text-gray-300 leading-relaxed text-sm">
                Our process emphasizes skill relevance, experience matching,
                and reliability to ensure high-quality trainer placements and
                successful training engagements.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
