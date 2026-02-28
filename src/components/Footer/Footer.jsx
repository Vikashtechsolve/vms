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
import logo from "../../../public/logo2.png";

export default function Footer() {
  return (
    <footer className="bg-[#2C3447] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-2 pt-16">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* For Trainers */}
          <div>
            <h4 className="font-semibold mb-4 underline underline-offset-8">
              For Trainers
            </h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>Join as Trainer</li>
              <li>Explore Jobs</li>
              <li>Trainer Categories</li>
              <li>How it Works</li>
            </ul>
          </div>

          {/* For Companies */}
          <div>
            <h4 className="font-semibold mb-4 underline underline-offset-8">
              For Companies
            </h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>Hire Trainers</li>
              <li>Post a Job</li>
              <li>How it Works</li>
            </ul>
          </div>

          {/* Company & Support */}
          <div>
            <h4 className="font-semibold mb-4 underline underline-offset-8">
              Company & Support
            </h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-1">
            <h4 className="font-semibold mb-4 underline underline-offset-8">
              Contact
            </h4>

            <div className="space-y-4 text-sm text-gray-300">
              <div className="flex gap-3">
                <MapPin size={18} />
                <p>
                  Vikas Tech Solutions,<br />
                  423, 4 th Floor,<br />
                  samanvay Business Square, <br />
                  Vaikuth Four crossing, <br />
                  Vadodara, Gujarat
                </p>
              </div>

              <div className="flex gap-3">
                <Mail size={18} />
                <p>support@vikashtechsolutions.com</p>
              </div>

              <div className="flex gap-3">
                <Phone size={18} />
                <p>+91 83203 53164</p>
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
                href="https://www.youtube.com/@fixWithvikas"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="hover:text-red-500 transition-colors duration-200"
              >
                <Youtube size={22} />
              </a>
              <a
                href="https://www.facebook.com/VikashTechSolution/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="hover:text-blue-500 transition-colors duration-200"
              >
                <Facebook size={22} />
              </a>
              <a
                href="https://x.com/VikashDube9198"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className="hover:text-sky-400 transition-colors duration-200"
              >
                <Twitter size={22} />
              </a>
              <a
                href="https://www.instagram.com/vikash_tech_solution/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:text-pink-500 transition-colors duration-200"
              >
                <Instagram size={22} />
              </a>
              <a
                href="https://www.linkedin.com/in/vikash-tech-solution/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:text-blue-400 transition-colors duration-200"
              >
                <Linkedin size={22} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-500 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">

          {/* Logo */}
          <div className="flex items-center gap-2">
           <img src={logo} alt="Logo" className="w-40 h-40" />
          </div>

          {/* Copyright */}
          <p className="text-sm text-gray-400">
            © VTS 2025. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
