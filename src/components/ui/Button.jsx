"use client";

import { useGetProductQuery } from "@/redux/api/productApi";
import React, { useState } from "react";
import ProductModal from "../modal/ProductModal";

const Button = ({ children, customClass, id }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const { data: product, isLoading } = useGetProductQuery(selectedId);

  return (
    <div className="group ">
      <button
        onClick={() => {
          setSelectedId(id);
          setModalOpen(true);
        }}
        className={`relative font-medium  group-hover:text-white z-10 overflow-hidden w-full mx-auto cursor-pointer `}
      >
        <span className={`flex items-center justify-center  ${customClass}`}>
          <span className="relative z-10 text-primary-t group-hover:text-white transition-all duration-700">
            {children}
          </span>
        </span>

        <span className="absolute -top-7 left-0 w-3/4 opacity-0 group-hover:opacity-100 h-20 bg-dark-green transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-out rounded-r-full" />
        <span className="absolute -bottom-7  right-0 w-3/4 opacity-0 group-hover:opacity-100 h-20 bg-dark-green transform translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-out rounded-l-full" />
      </button>

      {!isLoading && (
        <ProductModal
          product={product}
          isModalOpen={isModalOpen}
          onClose={() => setModalOpen(false)}
        />
      )}
    </div>
  );
};

export default Button;
