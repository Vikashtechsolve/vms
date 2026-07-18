import {
  MapPin,
  Mail,
  Phone,
  Youtube,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";
import { Link } from "react-router-dom";
import BrandLogo from "../BrandLogo.jsx";

const footerLink = "cursor-pointer hover:text-white transition-colors duration-200";

export default function Footer() {
  return (
    <footer className="bg-[#2C3447] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* For Trainers */}
          <div>
            <h4 className="font-semibold mb-4 underline underline-offset-8">
              For Trainers
            </h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>
                <Link to="/TrainerProfile" className={footerLink}>
                  Join as Trainer
                </Link>
              </li>
              <li>
                <Link to="/find-jobs" className={footerLink}>
                  Explore Jobs
                </Link>
              </li>
              <li>
                <Link to="/find-jobs" className={footerLink}>
                  Trainer Categories
                </Link>
              </li>
              <li>
                <Link to="/join-us" className={footerLink}>
                  How it Works
                </Link>
              </li>
            </ul>
          </div>

          {/* For Companies */}
          <div>
            <h4 className="font-semibold mb-4 underline underline-offset-8">
              For Companies
            </h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>
                <Link to="/CompanyRegistration" className={footerLink}>
                  Hire Trainers
                </Link>
              </li>
              <li>
                <Link to="/postJob-form" className={footerLink}>
                  Post a Job
                </Link>
              </li>
              <li>
                <Link to="/hire-from-us" className={footerLink}>
                  How it Works
                </Link>
              </li>
            </ul>
          </div>

          {/* Company & Support */}
          <div>
            <h4 className="font-semibold mb-4 underline underline-offset-8">
              Company & Support
            </h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>
                <Link to="/about-us" className={footerLink}>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact-us" className={footerLink}>
                  Contact Us
                </Link>
              </li>
              <li className="text-gray-500">Privacy Policy</li>
              <li className="text-gray-500">Terms & Conditions</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 underline underline-offset-8">
              Contact
            </h4>
            <div className="space-y-4 text-sm text-gray-300">
              <div className="flex gap-3">
                <MapPin size={18} className="shrink-0 mt-0.5" />
                <p>
                  Trainer Adda,<br />
                  423, 4th Floor,<br />
                  Samanvay Business Square,<br />
                  Vaikunth Four Crossing,<br />
                  Vadodara, Gujarat
                </p>
              </div>

              <div className="flex gap-3 items-center">
                <Mail size={18} className="shrink-0" />
                <a href="mailto:support@traineradda.com" className={footerLink}>
                  support@traineradda.com
                </a>
              </div>

              <div className="flex gap-3 items-center">
                <Phone size={18} className="shrink-0" />
                <a href="tel:+918320353164" className={footerLink}>
                  +91 83203 53164
                </a>
              </div>
            </div>
          </div>

          {/* Get in Touch */}
          <div>
            <h4 className="font-semibold mb-4 underline underline-offset-8">
              Get in Touch
            </h4>
            <div className="flex gap-4 text-white">
              <a
                href="https://www.youtube.com/@CodeWithvikas"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="cursor-pointer hover:text-red-500 transition-colors duration-200"
              >
                <Youtube size={22} />
              </a>
              <a
                href="https://www.facebook.com/VikashTechSolution/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="cursor-pointer hover:text-[#C1272D] transition-colors duration-200"
              >
                <Facebook size={22} />
              </a>
              <a
                href="https://x.com/VikashDube9198"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className="cursor-pointer hover:text-sky-400 transition-colors duration-200"
              >
                <Twitter size={22} />
              </a>
              <a
                href="https://www.instagram.com/vikash_tech_solution/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="cursor-pointer hover:text-pink-500 transition-colors duration-200"
              >
                <Instagram size={22} />
              </a>
              <a
                href="https://www.linkedin.com/in/vikash-tech-solution/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="cursor-pointer hover:text-[#C1272D] transition-colors duration-200"
              >
                <Linkedin size={22} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-500 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 pb-8">
          <BrandLogo
            variant="light"
            showTagline
            iconClassName="h-11 sm:h-12 w-auto"
          />
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Trainer Adda. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
