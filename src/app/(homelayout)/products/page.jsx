"use client";
import ProductCard from "@/components/ourProducts/ProductCard";
import Button from "@/components/ui/Button";

import Heading from "@/components/ui/Heading";
import React, { useState } from "react";

const products = [
  {
    id: 1,
    name: "Apple",
    category: "Fruits",
    image: "/images/apple.jpg",
    price: "$2/kg",
  },
  {
    id: 2,
    name: "Banana",
    category: "Fruits",
    image: "/images/banana.jpg",
    price: "$1.5/kg",
  },
  {
    id: 3,
    name: "Carrot",
    category: "Vegetables",
    image: "/images/carrot.jpg",
    price: "$1/kg",
  },
  {
    id: 4,
    name: "Broccoli",
    category: "Vegetables",
    image: "/images/broccoli.jpg",
    price: "$2.5/kg",
  },
  {
    id: 5,
    name: "Mango",
    category: "Vegetables",
    image: "/images/mango.jpg",
    price: "$3/kg",
  },
  {
    id: 6,
    name: "Potato",
    category: "Vegetables",
    image: "/images/potato.jpg",
    price: "$0.8/kg",
  },
];

// Get unique categories from product data
const getCategories = (products) => {
  const allCategories = products.map((p) => p.category);
  const unique = Array.from(new Set(allCategories));
  return ["All", ...unique];
};

const ProductPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = getCategories(products);

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <section className="mb-12">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <Heading>Our Products</Heading>
        </div>

        {/* Accordion Tabs */}
        <div className="flex flex-wrap justify-center gap-1 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 border transition-all ${
                activeCategory === category
                  ? "bg-green-600 text-white border-green-600"
                  : "bg-white text-green-600 border-green-600 hover:bg-green-100"
              }`}
            >
              {category}
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
              {filteredProducts.map((num, index) => (
                <ProductCard key={index}></ProductCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductPage;
