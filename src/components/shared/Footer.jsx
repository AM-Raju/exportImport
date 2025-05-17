import Image from "next/image";

import SocialIcons from "../ui/SocialIcons";
import Logo from "../ui/Logo";

export default function Footer() {
  return (
    <footer className="relative bg-dark-green text-white py-10">
      {/* Background Image with Opacity */}
      <div className="absolute inset-0 bg-dark-green bg-[url('https://i.ibb.co/WvDMDyWn/footer-bg2.webp')] opacity-5 bg-cover bg-center "></div>

      {/* Footer Content */}
      <div className="relative container mx-auto px-6">
        {/* Logo and Text */}
        <div className="text-center">
          <div className="mb-8 flex items-center justify-center">
            <Logo></Logo>
          </div>
          <p className="max-w-xl mx-auto text-gray-300">
            Bringing the best of nature to the world—fresh, safe, and
            sustainably grown agro products. We connect farmers to global
            markets with trust, quality, and a commitment to agricultural
            excellence.
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-4 mt-4">
          <SocialIcons></SocialIcons>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 mt-6 pt-4 flex flex-col md:flex-row justify-between text-sm text-gray-200">
          <p>
            &copy; {new Date().getFullYear()} Your Company. All rights reserved.
          </p>
          <div className="flex gap-4 mt-2 md:mt-0">
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white">
              Contact
            </a>
            <a href="#" className="hover:text-white">
              Home
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
