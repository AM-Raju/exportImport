"use client";
import Button from "@/components/ui/Button";
import FeaturedProductCard from "@/components/ui/FeaturedProductCard";
import Heading from "@/components/ui/Heading";
import SubText from "@/components/ui/SubText";
import {
  useGetFeaturedProductsQuery,
  useGetProductsQuery,
} from "@/redux/api/productApi";
import Link from "next/link";
import React from "react";

const FeaturedProducts = () => {
  const { data: featuredProducts, isLoading } = useGetFeaturedProductsQuery({});

  console.log("Featured Products", featuredProducts);

  return (
    <div className="mb-4">
      <Heading>Featured Products</Heading>
      <SubText>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi fugiat
        porro voluptas asperiores culpa temporibus cumque laudantium quis natus
        aliquam!
      </SubText>
      <div>
        <div className="max-w-screen-2xl mx-auto px-4">
          <div
            className="grid gap-6 
              grid-cols-1
              sm:grid-cols-2 
              md:grid-cols-2 
              lg:grid-cols-3 
              xl:grid-cols-4 
              2xl:grid-cols-4 "
          >
            {!isLoading &&
              featuredProducts.map((featuredProduct, index) => (
                <FeaturedProductCard
                  featuredProduct={featuredProduct}
                  key={index}
                ></FeaturedProductCard>
              ))}
          </div>
        </div>
        <div className="w-72 mx-auto my-8">
          <Link href="/products">
            <Button customClass={"border-2 border-primary-green py-3"}>
              View All
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
