"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { FiMenu, FiX } from "react-icons/fi";
import { RiArrowDownSLine } from "react-icons/ri";

const navItems = [
  { name: "Home", href: "/" },
  {
    name: "Services",
    dropdown: [
      { name: "Web Design", href: "/services/web-design" },
      { name: "Development", href: "/services/development" },
      { name: "SEO", href: "/services/seo" },
    ],
  },
  {
    name: "About",
    dropdown: [
      { name: "Company", href: "/about/company" },
      { name: "Team", href: "/about/team" },
      { name: "Careers", href: "/about/careers" },
    ],
  },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

const Header = () => {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMobile = () => setMobileOpen(!mobileOpen);
  const isActive = (href) => pathname.startsWith(href);

  return (
    <header className="bg-white shadow z-50 relative">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo Section */}
        <Link href="/" className="text-2xl font-bold text-gray-800">
          {/* Text Logo */}
          MyBrand
          {/* Optional Image Logo */}
          {/* <Image src="/logo.png" alt="Logo" width={120} height={40} /> */}
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-0 items-center">
          {navItems.map((item, index) =>
            item.dropdown ? (
              <div key={index} className="relative group">
                <button
                  className={`relative px-8 py-2 font-medium ${
                    isActive(item.dropdown[0].href)
                      ? "text-white"
                      : "text-gray-700"
                  } group-hover:text-white z-10 overflow-hidden`}
                >
                  <span className="flex items-center ">
                    <span className="relative z-10 group-hover:text-white">
                      {item.name}
                    </span>
                    <span className="mt-1 ml-1 relative z-10 group-hover:text-white">
                      <RiArrowDownSLine />
                    </span>
                  </span>

                  <span className="absolute -top-10 left-0 w-3/4 opacity-0 group-hover:opacity-100 h-20 bg-blue-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out rounded-r-full" />
                  <span className="absolute -bottom-10  right-0 w-3/4 opacity-0 group-hover:opacity-100 h-20 bg-blue-500 transform translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out rounded-l-full" />
                </button>

                <div className="absolute left-0 mt-2 w-44 bg-white rounded shadow-lg opacity-0 group-hover:opacity-100 transform scale-95 group-hover:scale-100 transition-all duration-300 z-20">
                  {item.dropdown.map((sub, idx) => (
                    <Link
                      key={idx}
                      href={sub.href}
                      className={`block px-8 py-2 text-sm  relative text-gray-700 group/sub ${
                        isActive(sub.href) ? "text-white" : ""
                      } overflow-hidden`}
                    >
                      <span className="relative z-10 group-hover/sub:text-white">
                        {sub.name}
                      </span>

                      <span className="absolute inset-0 bg-blue-500 opacity-0 group-hover/sub:opacity-100 transition-opacity duration-500" />
                      <span className="absolute top-0 left-0 w-1/2 h-full bg-blue-500 transform -translate-x-full opacity-0 group-hover/sub:opacity-100 group-hover/sub:translate-x-0 transition-transform duration-500 ease-out rounded-r-full" />
                      <span className="absolute bottom-0 right-0 w-1/2 h-full bg-blue-500 transform translate-x-full opacity-0 group-hover/sub:opacity-100  group-hover/sub:translate-x-0 transition-transform duration-500 ease-out rounded-l-full" />
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={index}
                href={item.href}
                className={`relative px-8 py-2 text-gray-700 font-medium group/sub overflow-hidden ${
                  isActive(item.href) ? "text-red-500" : "text-gray-700"
                }`}
              >
                <span className="relative z-10 group-hover/sub:text-white">
                  {item.name}
                </span>

                <span className="absolute -top-10 left-0 w-3/4 h-20 bg-blue-500 transform -translate-x-full opacity-0 group-hover/sub:opacity-100 group-hover/sub:translate-x-0 transition-transform duration-500 ease-out rounded-r-full" />
                <span className="absolute -bottom-10 right-0 w-3/4 h-20 bg-blue-500 transform translate-x-full opacity-0 group-hover/sub:opacity-100  group-hover/sub:translate-x-0 transition-transform duration-500 ease-out rounded-l-full" />
              </Link>
            )
          )}
        </nav>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={toggleMobile}>
            {mobileOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {mobileOpen && (
        <div className="fixed inset-0 bg-white z-40 p-6 md:hidden animate-bounce-in-right overflow-y-auto">
          <div className="flex justify-between items-center mb-6">
            {/* Mobile Logo */}
            <Link
              href="/"
              className="text-2xl font-bold text-gray-800"
              onClick={toggleMobile}
            >
              MyBrand
              {/* <Image src="/logo.png" alt="Logo" width={120} height={40} /> */}
            </Link>
            <button onClick={toggleMobile}>
              <FiX size={28} />
            </button>
          </div>

          <nav className="space-y-4">
            {navItems.map((item, index) =>
              item.dropdown ? (
                <div key={index}>
                  <div className="font-semibold text-gray-800">{item.name}</div>
                  <div className="ml-4 mt-2 space-y-1">
                    {item.dropdown.map((sub, idx) => (
                      <Link
                        key={idx}
                        href={sub.href}
                        onClick={toggleMobile}
                        className={`block text-gray-600 ${
                          isActive(sub.href) ? "font-bold text-blue-600" : ""
                        }`}
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={index}
                  href={item.href}
                  onClick={toggleMobile}
                  className={`block font-medium ${
                    isActive(item.href) ? "text-blue-600" : "text-gray-800"
                  }`}
                >
                  {item.name}
                </Link>
              )
            )}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
