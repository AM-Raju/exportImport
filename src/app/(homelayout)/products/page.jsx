"use client";
import ProductCard from "@/components/ourProducts/ProductCard";
import Button from "@/components/ui/Button";

import Heading from "@/components/ui/Heading";
import { useGetCategoriesQuery } from "@/redux/api/categoryApi";
import { useGetProductsQuery } from "@/redux/api/productApi";
import React, { useEffect, useState } from "react";

// Get unique categories from product data
const getCategories = (products) => {
  const allCategories = products.map((p) => p.category);
  const unique = Array.from(new Set(allCategories));
  return ["All", ...unique];
};

const ProductPage = () => {
  const [activeTab, setActiveTab] = useState("All");

  const { data: categories, isLoading: categoryLoading } =
    useGetCategoriesQuery({});

  const { data: products, isLoading } = useGetProductsQuery({ activeTab });

  let allTabs;
  if (!categoryLoading) {
    allTabs = ["All", ...categories];
  }

  return (
    <section className="mb-12">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <Heading>Our Products</Heading>
        </div>

        {/* Accordion Tabs */}
        <div className="flex flex-wrap justify-center gap-1 mb-8">
          {categories &&
            allTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2 border transition-all cursor-pointer ${
                  activeTab === tab
                    ? "bg-green-600 text-white border-green-600"
                    : "bg-white text-green-600 border-green-600 hover:bg-green-100"
                }`}
              >
                {tab}
              </button>
            ))}
        </div>

        {/* Products Grid */}

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
              {isLoading ? (
                <p>Loading</p>
              ) : (
                products.map((product, index) => (
                  <ProductCard product={product} key={index}></ProductCard>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductPage;
