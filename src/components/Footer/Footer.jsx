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

export default function Footer() {
  return (
    <footer className="bg-[#2C3447] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">

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
                  3rd Floor, ABC Tower,<br />
                  Sector-15, Noida,<br />
                  Uttar Pradesh, India
                </p>
              </div>

              <div className="flex gap-3">
                <Mail size={18} />
                <p>support@vikashtechsolutions.com</p>
              </div>

              <div className="flex gap-3">
                <Phone size={18} />
                <p>+91 9876543210</p>
              </div>
            </div>
          </div>

          {/* Get in Touch */}
          <div>
            <h4 className="font-semibold mb-4 underline underline-offset-8">
              Get in Touch
            </h4>
            <div className="flex gap-4 text-white">
              <Youtube />
              <Facebook />
              <Twitter />
              <Instagram />
              <Linkedin />
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-500 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">

          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="text-3xl font-bold">
              V<span className="text-red-500">M</span>S
            </span>
            <span className="text-xs text-gray-400">
              VIKASH MANPOWER SOLUTION
            </span>
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
