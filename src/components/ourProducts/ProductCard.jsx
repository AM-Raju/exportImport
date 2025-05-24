import Button from "@/components/ui/Button";

import React, { useState } from "react";
import ProductModal from "../modal/ProductModal";

const ProductCard = ({ product }) => {
  const { _id, localName, englishName, availability, images } = product;

  const [isModalOpen, setModalOpen] = useState(false);

  const [selectedImage, setSelectedImage] = useState(images[0]);

  const thumbnailImages = [
    "https://i.ibb.co/qML5RCk4/product1.webp",
    "https://i.ibb.co/XxM0zgBC/product2.webp",
    "https://i.ibb.co/qML5RCk4/product1.webp",
  ];

  const modalOpenFn = () => {
    return setModalOpen(true);
  };

  const handleThumbnailClick = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  return (
    <div>
      <div className="bg-white border-primary-green/30 border   shadow  p-4 h-full ">
        <div className="relative">
          <div className="border-primary-green border-b overflow-hidden ">
            <img
              className="hover:scale-125 transition-all duration-1000 w-full h-auto"
              src={selectedImage}
              alt="Product"
            />
          </div>
          <div className="flex items-center justify-around max-w-48 absolute bottom-2 left-[calc(50%-80px)] gap-2 mx-auto">
            {images.map((img, index) => (
              <button
                key={index}
                className={`w-12 h-12 cursor-pointer border border-primary-green ${
                  selectedImage === img ? " bg-primary-green/30" : ""
                }`}
                onClick={() => handleThumbnailClick(img)}
              >
                <img
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        <h3 className="font-semibold text-xl text-primary-t">{localName}</h3>
        <h4 className="text-secondary-t ">
          <span className="font-semibold">English Name:</span> {englishName}
        </h4>
        <h4 className="text-secondary-t ">
          <span className="font-semibold">Availability:</span> {availability}
        </h4>

        <div className="my-4 ">
          <Button
            modalOpenFn={modalOpenFn}
            customClass={"bg-primary-green py-2"}
          >
            View Details
          </Button>
        </div>
      </div>

      <ProductModal
        product={product}
        isModalOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
      />
    </div>
  );
};

export default ProductCard;
