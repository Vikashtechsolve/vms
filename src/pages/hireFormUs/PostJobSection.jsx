import {
  User,
  TrendingUp,
  Pencil,
  Clock,
  Wallet,
} from "lucide-react";

export default function PostJobSection() {
  return (
    <section className="bg-[#FAFAFA] py-24">
      <div className="max-w-7xl mx-auto px-6 text-center">

       
        <h2 className="text-3xl md:text-4xl font-semibold text-black">
          Post a Job to Hire Trainers
        </h2>
        <div className="w-24 h-[2px] bg-blue-600 mx-auto mt-2" />

        
        <p className="mt-6 max-w-4xl mx-auto text-lg text-gray-700 leading-relaxed">
          Share your training requirements with us and connect with skilled
          trainers who match your needs. By posting a job, you make it easier
          for the right trainers to discover your opportunity and apply with
          confidence.
        </p>

        {/* Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

        
          <div className="bg-[#F1F1F1] rounded-xl p-8 shadow-lg border border-gray-200">
            <User className="mx-auto text-[#B11C20]" size={32} />
            <h3 className="mt-4 font-semibold text-lg">
              Trainer Role & Skills
            </h3>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              Clearly define the trainer role along with the specific skills,
              tools, or domains required. This helps trainers understand your
              expectations and ensures that only relevant and qualified
              professionals apply.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#F1F1F1] rounded-xl p-8 shadow-lg border border-gray-200">
            <TrendingUp className="mx-auto text-[#B11C20]" size={32} />
            <h3 className="mt-4 font-semibold text-lg">
              Experience Level
            </h3>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              Mention the preferred experience level such as beginner,
              intermediate, or senior trainers. Specifying experience helps
              attract trainers aligned with the complexity and depth of your
              training needs.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#F1F1F1] rounded-xl p-8 shadow-lg border border-gray-200">
            <Pencil className="mx-auto text-[#B11C20]" size={32} />
            <h3 className="mt-4 font-semibold text-lg">
              Teaching Mode
            </h3>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              Indicate how the training will be delivered, whether online,
              offline, or in a hybrid format. This allows trainers to assess
              feasibility and plan their availability accordingly.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-[#F1F1F1] rounded-xl p-8 shadow-lg border border-gray-200 md:col-span-1 lg:col-span-1">
            <Clock className="mx-auto text-[#B11C20]" size={32} />
            <h3 className="mt-4 font-semibold text-lg">
              Duration & Availability
            </h3>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              Specify the expected duration of the training along with required
              availability such as full-time, part-time, or specific days and
              hours. Clear timelines help trainers commit with confidence and
              reduce scheduling conflicts.
            </p>
          </div>

          {/* Card 5 */}
          <div className="bg-[#F1F1F1] rounded-xl p-8 shadow-lg border border-gray-200 md:col-span-1 lg:col-span-1">
            <Wallet className="mx-auto text-[#B11C20]" size={32} />
            <h3 className="mt-4 font-semibold text-lg">
              Budget
            </h3>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              Share your expected budget or compensation range for the training
              engagement. Providing budget details helps set clear expectations
              and ensures transparent communication between you and the trainer
              from the start.
            </p>
          </div>

        </div>

        {/* CTA Button */}
        <div className="mt-16">
          <button className="bg-[#B11C20] hover:bg-[#9C161A] transition text-white px-10 py-3 rounded-xl text-base font-medium">
            Post a Job
          </button>
        </div>
      </div>
    </section>
  );
}
