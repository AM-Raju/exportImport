import React from "react";

const CoreValues = () => {
  return (
    <div className="container mx-auto max-h-[528px] md:grid grid-cols-12">
      <div className="col-span-4 w-full h-44 bg-green-500 flex items-center justify-center">
        <h2 className="text-6xl  text-white font-bold">Fresh</h2>
      </div>
      <div className="col-span-4 w-full h-44 bg-yellow-500 flex items-center justify-center">
        <h2 className="text-6xl  text-white font-bold">Authentic</h2>
      </div>
      <div className="col-span-4 w-full h-44 bg-orange-500 flex items-center justify-center">
        <h2 className="text-6xl  text-white font-bold">Premium</h2>
      </div>
    </div>
  );
};

export default CoreValues;
