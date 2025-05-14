"use client";

import { useEffect } from "react";
import ReactDOM from "react-dom";
import { IoMdClose } from "react-icons/io";

const VideoModal = ({ videoId, onClose }) => {
  // Close on ESC
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  const modalContent = (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 "
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl mx-4 bg-white rounded-xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-3xl text-gray-700 hover:text-red-500"
        >
          <IoMdClose />
        </button>
        <div className="aspect-w-16 aspect-h-9 ">
          <iframe
            className="w-full h-[550px]"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            title="YouTube video player"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );

  if (typeof window === "undefined") return null;

  const portalRoot = document.getElementById("modal-root");
  return portalRoot ? ReactDOM.createPortal(modalContent, portalRoot) : null;
};

export default VideoModal;
