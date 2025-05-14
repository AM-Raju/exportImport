"use client";

import React, { useEffect, useState } from "react";
import { PopupButton, PopupWidget } from "react-calendly";

const Schedule = () => {
  const [rootElem, setRootElem] = useState(null);

  useEffect(() => {
    // Runs only on the client
    setRootElem(document.getElementById("modal-root"));
  }, []);

  if (!rootElem) return null;

  return (
    <div className="hover:bg-green-500 px-6 py-2 border border-green-500 transition-all duration-300 hover:text-slate-800 font-semibold tracking-wider">
      <PopupButton
        url="https://calendly.com/mdmorshed-sj2005/30min"
        /*
         * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
         * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
         */
        rootElement={document.getElementById("modal-root")}
        text="30 Minute Meeting"
      />
    </div>
  );
};

export default Schedule;
