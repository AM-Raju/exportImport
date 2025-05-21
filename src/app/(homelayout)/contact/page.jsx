import HomeContact from "@/components/home/homeContact/HomeContact";
import React from "react";

export const metadata = {
  title: "Contact | MK Engineering",
  description: "",
};

const ContactPage = () => {
  return (
    <div className="container mx-auto px-6 pb-12">
      <section className="w-full h-auto ">
        <div className=" mx-auto  grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Contact Us Section (2/3 on md+) */}
          <div className="relative h-64 w-full col-span-3">
            <div className="absolute inset-0 bg-[url('https://i.ibb.co.com/x033W2N/testimonial-bg.webp')]   bg-cover bg-center opacity-30"></div>
            <div className="relative z-10 text-white p-4 flex items-center justify-center h-full">
              <h1 className="relative text-primary-green text-3xl md:text-5xl font-bold z-10 ">
                Contact Us
              </h1>
            </div>
          </div>
        </div>
      </section>
      <HomeContact></HomeContact>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 md:gap-x-8">
        <div className="bg-white p-6 shadow-xs border border-primary-green text-primary-green w-full mx-auto ">
          <h2 className="text-xl font-semibold mb-4">Address</h2>
          <p className="text-gray-700 mb-2">
            📍 H #183, R#02, Avenue #03, DOHS Mirpur, Dhaka-1216
          </p>
          <p className="text-gray-700 mb-2">
            📧 Email:{" "}
            <a href="mailto:info@example.com" className="text-blue-600">
              info@indugrowbd.com
            </a>
          </p>
          <p className="text-gray-700">📞 01718-595979, 01714-942810</p>
        </div>
        {/* Contact Form */}
        <div className="bg-white shadow-lg border border-primary-green p-6 w-full mx-auto lg:col-span-2">
          <h2 className="text-xl font-semibold mb-4 text-primary-green">
            Send Us a Message
          </h2>
          <form className="space-y-4">
            <div className="lg:flex gap-2 lg:gap-6">
              <div className="flex-1">
                <label className="block text-gray-700 font-medium">
                  Name<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-primary-green rounded-md focus:ring focus:ring-blue-400 outline-none"
                  placeholder="Your Name"
                  required
                />
              </div>

              <div className="flex-1">
                <label className="block text-gray-700 font-medium">
                  Email<span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-primary-green rounded-md focus:ring focus:ring-blue-400 outline-none"
                  placeholder="Your Email"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-medium">Message</label>
              <textarea
                className="w-full px-4 py-2 border border-primary-green rounded-md focus:ring focus:ring-blue-400 outline-none"
                rows="4"
                placeholder="Your Message"
              ></textarea>
            </div>

            <button
              type="submit"
              className=" cursor-pointer w-full bg-primary-green text-white py-2 rounded-md font-semibold hover:bg-primary-green transition-all duration-500"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
