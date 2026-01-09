import {
  IndianRupee,
  CreditCard,
  Briefcase,
  Headphones,
} from "lucide-react";

export default function PricingHighlights() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-black">
            Simple & Transparent Pricing
          </h2>
          <div className="w-24 h-[2px] bg-blue-600 mx-auto mt-2" />
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center">

          {/* Card 1 */}
          <div>
            <div className="w-16 h-16 mx-auto rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center text-blue-600">
              <IndianRupee size={28} />
            </div>

            <h3 className="mt-6 font-semibold text-lg">
              No Hidden Charges
            </h3>

            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              We believe in complete transparency. There are no hidden fees or
              unexpected costs at any stage of the hiring process. You pay only
              for what is clearly communicated and agreed upon, ensuring full
              control over your hiring budget.
            </p>
          </div>

          {/* Card 2 */}
          <div>
            <div className="w-16 h-16 mx-auto rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center text-blue-600">
              <CreditCard size={28} />
            </div>

            <h3 className="mt-6 font-semibold text-lg">
              Pay only for Right Talent
            </h3>

            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              Our model ensures that you invest only when you successfully
              connect with a trainer who meets your requirements. This approach
              helps you avoid unnecessary expenses and ensures value-driven
              hiring outcomes.
            </p>
          </div>

          {/* Card 3 */}
          <div>
            <div className="w-16 h-16 mx-auto rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center text-blue-600">
              <Briefcase size={28} />
            </div>

            <h3 className="mt-6 font-semibold text-lg">
              Flexible Hiring Models
            </h3>

            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              Every organization has different training needs. We offer flexible
              engagement options based on duration, scope, and training format,
              allowing you to choose a model that best fits your business
              objectives.
            </p>
          </div>

          {/* Card 4 */}
          <div>
            <div className="w-16 h-16 mx-auto rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center text-blue-600">
              <Headphones size={28} />
            </div>

            <h3 className="mt-6 font-semibold text-lg">
              Value-Focused Hiring Support
            </h3>

            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              Our team works closely with you to understand your requirements
              and recommend the most suitable hiring approach, ensuring cost
              efficiency while maintaining high training quality.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
