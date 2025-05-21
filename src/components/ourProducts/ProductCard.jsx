import Button from "@/components/ui/Button";

import React from "react";

const ProductCard = ({ product }) => {
  const { _id, localName, englishName, availability } = product;

  console.log(_id);

  return (
    <div className="bg-white border-primary-green/30 border   shadow  p-4 h-full ">
      <div className="relative">
        <div className="border-primary-green border-b ">
          <img
            className="hover:scale-105 transition-all duration-500"
            src="https://i.ibb.co/qML5RCk4/product1.webp"
            alt=""
          />
        </div>
        <div className="flex items-center justify-around max-w-48 absolute bottom-2 left-[calc(50%-80px)] gap-2 mx-auto">
          <div className="w-12 h-12">
            <img
              className="border-primary-green border"
              src="https://i.ibb.co/qML5RCk4/product1.webp"
              alt=""
            />
          </div>
          <div className="w-12 h-12">
            <img
              className="border-primary-green border"
              src="https://i.ibb.co/XxM0zgBC/product2.webp"
              alt=""
            />
          </div>
          <div className="w-12 h-12">
            <img
              className="border-primary-green border"
              src="https://i.ibb.co/qML5RCk4/product1.webp"
              alt=""
            />
          </div>
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
        <Button id={_id} customClass={"bg-primary-green py-2"}>
          View Details
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
