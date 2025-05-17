import ProfileHeading from "@/components/ui/ProfileHeading";
import React from "react";

const Certifications = () => {
  return (
    <div className=" container mx-auto">
      <div className=" relative bg-[url('https://i.ibb.co/Xfpkf4cZ/About-Us.webp')] w-full h-96 flex items-center justify-center">
        <div className="absolute w-full h-full bg-black/50 "></div>
        <div className="  flex items-center justify-center gap-10 z-20">
          <div className="w-1 h-20  bg-primary-green"></div>
          <ProfileHeading>Certifications</ProfileHeading>
        </div>
      </div>

      <div className="my-12  mx-auto space-y-8 px-4 md:max-lg:px-2  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:max-lg:gap-2">
        {Array.from({ length: 6 }).map((arr, index) => (
          <div key={index} className=" border p-4">
            <div className="w-full h-96 bg-gray-500 ">
              <img src="#" alt="" />
            </div>
            <h3 className="text-center mt-2">Certificate Name</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
