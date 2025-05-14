import React from "react";

const Heading = ({ children }) => {
  return (
    <div className="text-center text-5xl text-primary-t font-bold mt-16">
      {children}
    </div>
  );
};

export default Heading;
