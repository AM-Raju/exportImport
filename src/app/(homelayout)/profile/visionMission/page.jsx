import ProfileHeading from "@/components/ui/ProfileHeading";
import React from "react";

const visionMission = () => {
  return (
    <div className=" container mx-auto">
      <div className=" relative bg-[url('https://i.ibb.co/Xfpkf4cZ/About-Us.webp')] w-full h-96 flex items-center justify-center">
        <div className="absolute w-full h-full bg-black/50 "></div>
        <div className="  flex items-center justify-center gap-10 z-20">
          <div className="w-1 h-20  bg-primary-green"></div>
          <ProfileHeading>Vision & Mission</ProfileHeading>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-12">
        {/* Mission Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8 ">
          {/* Image on left */}
          <div className="flex justify-center items-center">
            <img
              src="https://i.ibb.co.com/gLNvy5Yd/Mission.webp" // Replace with your actual image path
              alt="Mission Image"
              className=" shadow-lg w-full h-auto"
            />
          </div>
          {/* Mission Text on right */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">
              Mission of Indugrow
            </h2>
            <p>
              MK Engineering aims to deliver high-quality products and safety
              solutions, coupled with unparalleled levels of service and
              support, all at the most cost-effective prices.
            </p>
            <p>
              Our engineering staff is committed to establishing an enviable
              reputation for excellence, and our dedication to quality work
              execution serves as a testament to our commitment to providing
              top-quality products and cost-effective services to an
              increasingly diverse client base.
            </p>
          </div>
        </section>

        {/* Vision Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Image on right */}
          <div className="flex justify-center items-center lg:hidden">
            <img
              src="https://i.ibb.co.com/7tWVfdCX/Vision.webp" // Replace with your actual image path
              alt="Vision Image"
              className=" shadow-lg w-full h-auto"
            />
          </div>
          {/* Vision Text on left */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">
              Vision of Indugrow
            </h2>
            <p>
              Our vision is to create a platform where professionalism, quality,
              and economy converge. We aspire to achieve the pinnacle of
              reputation by delivering high-quality products, cost-effective,
              and technologically superior solutions.
            </p>
            <p>
              Our goal is to become a legendary partner by consistently
              providing quality products and services with cost-effective
              solutions within a minimal timeframe. Our communication solutions
              are crafted by individuals whose primary objective is to offer
              practical solutions for the real enhancement and improvement of
              your systems.
            </p>
          </div>
          {/* Image on right */}
          <div className="flex justify-center items-center max-lg:hidden">
            <img
              src="https://i.ibb.co.com/7tWVfdCX/Vision.webp" // Replace with your actual image path
              alt="Vision Image"
              className=" shadow-lg w-full h-auto"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default visionMission;
