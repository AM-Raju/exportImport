import Button from "@/components/ui/Button";
import FeaturedProductCard from "@/components/ui/FeaturedProductCard";
import Heading from "@/components/ui/Heading";
import SubText from "@/components/ui/SubText";
import React from "react";

const ProductCard = () => {
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

      <h3 className="font-semibold text-xl text-primary-t">Ussce</h3>
      <h4 className="text-secondary-t ">
        <span className="font-semibold">English Name:</span> Bitter Gourd
      </h4>
      <h4 className="text-secondary-t ">
        <span className="font-semibold">Availability:</span> March-May
      </h4>

      <div className="my-4 ">
        <Button customClass={"bg-primary-green py-2"}>View Details</Button>
      </div>
    </div>
  );
};

export default ProductCard;
