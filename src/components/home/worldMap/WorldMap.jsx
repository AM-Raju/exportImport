import React from "react";

const WorldMap = () => {
  return (
    <div
      className="w-full bg-light-green group bg-center bg-no-repeat  "
      style={{
        backgroundImage: "url('https://i.ibb.co/FLJnz7c2/map.webp')",
      }}
    >
      <div className=" group-hover:bg-dark-green/90 transition-all duration-700  w-full  h-[566px]">
        <div className=" w-full h-full flex items-center justify-center ">
          <h2 className="text-6xl  xl:text-7xl font-extrabold text-white opacity-0 group-hover:opacity-100 transition-all duration-700 text-center tracking-wide ">
            Nature’s Best, <br /> Delivered Worldwide
          </h2>
        </div>
      </div>
    </div>
  );
};

export default WorldMap;
