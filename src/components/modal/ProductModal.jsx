"use client";

import { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { IoMdClose } from "react-icons/io";

const ProductModal = ({ product, isModalOpen, onClose }) => {
  // Close on ESC
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose(); // ✅ properly close
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!isModalOpen) return null;

  const modalContent = (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 bg-opacity-70"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl   mx-4 bg-white rounded-xl p-6 shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-0.5 right-0.5 z-20 text-2xl md:text-3xl text-gray-700 hover:text-red-500"
        >
          <IoMdClose />
        </button>

        {/* Product Info */}

        <div className="flex flex-col md:flex-row items-center justify-center ">
          <div className="bg-white   overflow-hidden md:flex w-full max-w-4xl">
            {/* Image Section */}
            <div className="md:w-1/2 bg-gradient-to-b from-lime-400 to-green-500 p-4 flex flex-col items-center justify-center">
              <img
                src="/apple.png" // Replace with your image
                alt="Green Apple"
                className="rounded-lg object-contain size-52"
              />
              <div className="flex space-x-2 mt-4">
                {[1, 2, 3].map((_, idx) => (
                  <div
                    key={idx}
                    className="w-10 h-10 bg-white border border-gray-300 rounded-lg"
                  ></div>
                ))}
              </div>
            </div>

            {/* Content Section */}
            <div className="md:w-1/2 p-6 space-y-4">
              <h2 className="text-2xl font-semibold text-gray-800">
                {product.localName}
              </h2>
              <p className="text-sm text-gray-500">COD: 459693</p>
              <p className="text-3xl font-bold text-red-600">R$ 7.93</p>

              <div>
                <p className="text-gray-700 font-medium mb-2">Benefits:</p>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                  <li>Apples are nutritious</li>
                  <li>May be good for weight loss</li>
                  <li>May be good for bone health</li>
                  <li>Linked to lower risk of diabetes</li>
                  <li>Linked to lower risk of diabetes</li>
                </ul>
              </div>

              <button className="mt-4 w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  if (typeof window === "undefined") return null;

  const portalRoot = document.getElementById("modal-root");
  return portalRoot ? ReactDOM.createPortal(modalContent, portalRoot) : null;
};

export default ProductModal;
