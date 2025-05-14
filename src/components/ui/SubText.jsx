import React from "react";

const SubText = ({ children }) => {
  return (
    <p className="text-center text-secondary-t max-w-[70ch] mx-auto mt-4 mb-12">
      {children}
    </p>
  );
};

export default SubText;
