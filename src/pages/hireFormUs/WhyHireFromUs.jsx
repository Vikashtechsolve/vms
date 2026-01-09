import {
  BadgeCheck,
  Briefcase,
  PhoneCall,
  Headphones,
  UserCheck,
} from "lucide-react";

import hireImg from "../../../public/image.jpg"; 


export default function WhyHireFromUs() {
  return (
    <section className="bg-[#F1F1F1] py-8">
      <div className="max-w-8xl mx-auto px-8 ">

        {/* Heading */}
        <div className="text-center  mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-black">
            Why Hire Trainers From Us?
          </h2>
          <div className="w-24 h-[2px] bg-blue-600 mx-auto mt-2" />
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* LEFT IMAGE */}
          <div className="flex justify-center">
            <img
              src={hireImg}
              alt="Why Hire Trainers"
              className="rounded-2xl shadow-lg w-full  object-cover"
            />
          </div>

      
          <div className="space-y-10">

            {/* Item 1 */}
            <div className="flex gap-4">
             <BadgeCheck className="text-blue-600 mt-1 w-20 md:w-6 md:h-6" />
              <div>
                <h3 className="text-lg font-semibold text-black">
                  Verified & Checked Trainers
                </h3>
                <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                  Our process emphasizes skill relevance, experience matching,
                  and reliability to ensure high-quality trainer placements and
                  successful training engagements.
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex gap-4">
              <Briefcase className="text-blue-600 mt-1 w-20 md:w-6 md:h-6"/>
              <div>
                <h3 className="text-lg font-semibold text-black">
                  Industry-Experienced Mentors
                </h3>
                <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                  Hire trainers with real-world industry experience who
                  understand practical requirements and deliver result-driven
                  training.
                </p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex gap-4">
              <PhoneCall className="text-blue-600 mt-1 w-20 md:w-6 md:h-6" />
              <div>
                <h3 className="text-lg font-semibold text-black">
                  Quality Assurance by VTS
                </h3>
                <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                  VTS ensures training quality by reviewing profiles,
                  monitoring feedback, and maintaining high professional
                  standards.
                </p>
              </div>
            </div>

            {/* Item 4 */}
            <div className="flex gap-4">
              <Headphones className="text-blue-600 mt-1 w-20 md:w-6 md:h-6" />
              <div>
                <h3 className="text-lg font-semibold text-black">
                  Dedicated Support
                </h3>
                <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                  Our support team assists you throughout the hiring process,
                  from requirement posting to trainer onboarding and
                  coordination.
                </p>
              </div>
            </div>

            {/* Item 5 */}
            <div className="flex gap-4">
              <UserCheck className="text-blue-600 mt-1 w-20 md:w-6 md:h-6" />
              <div>
                <h3 className="text-lg font-semibold text-black">
                  Best Trainer Match for your Requirements
                </h3>
                <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                  We help you connect with trainers who best match your specific
                  skills, experience, and training objectives.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
