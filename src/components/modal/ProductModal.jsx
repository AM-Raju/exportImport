"use client";

import { useEffect } from "react";
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
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl mx-4 bg-white rounded-xl p-6 shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-3xl text-gray-700 hover:text-red-500"
        >
          <IoMdClose />
        </button>

        {/* Product Info */}
        <div className="flex flex-col md:flex-row gap-6">
          <img
            src={product.images[0]}
            alt={product.localName}
            className="w-full md:w-1/2 h-64 object-cover rounded-lg"
          />
          <div className="flex-1">
            <h2 className="text-2xl font-semibold mb-2">
              {product.EnglishName}
            </h2>
            <p className="text-gray-700 mb-4">{product.description}</p>
            <p className="text-lg font-bold text-green-600 mb-2">
              Price: ${product.category}
            </p>
            {product.benefits?.length > 0 && (
              <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                {product.benefits.map((benefit, idx) => (
                  <li key={idx}>{benefit}</li>
                ))}
              </ul>
            )}
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
