"use client";

import Image from "next/image";
import { useState } from "react";

const colors = ["#D0F0C0", "#F4E2D8", "#FFD700", "#8B0000"];
const colorNames = ["Green", "Golden", "Yellow", "Red"];

export default function SampleProductCard() {
  const [selectedColor, setSelectedColor] = useState(0);

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-green-200 p-4">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden md:flex w-full max-w-4xl">
        {/* Image Section */}
        <div className="md:w-1/2 bg-gradient-to-b from-lime-400 to-green-500 p-4 flex flex-col items-center justify-center">
          <Image
            src="/apple.png" // Replace with your image
            alt="Green Apple"
            width={250}
            height={250}
            className="rounded-lg object-contain"
          />
          <div className="flex space-x-2 mt-4">
            {[1, 2, 3, 4, 5].map((_, idx) => (
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
            Delicious Apples
          </h2>
          <p className="text-sm text-gray-500">COD: 459693</p>
          <p className="text-3xl font-bold text-red-600">R$ 7.93</p>

          <div>
            <p className="text-gray-700 font-medium mb-2">Select a Color</p>
            <div className="flex space-x-2">
              {colors.map((color, index) => (
                <button
                  key={color}
                  className={`w-7 h-7 rounded-full border-2 ${
                    selectedColor === index ? "border-black" : "border-white"
                  }`}
                  style={{ backgroundColor: color }}
                  onClick={() => setSelectedColor(index)}
                  aria-label={colorNames[index]}
                />
              ))}
            </div>
          </div>

          <div>
            <p className="text-gray-700 font-medium mb-2">Benefits:</p>
            <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
              <li>Apples are nutritious</li>
              <li>May be good for weight loss</li>
              <li>May be good for bone health</li>
              <li>Linked to lower risk of diabetes</li>
            </ul>
          </div>

          <button className="mt-4 w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
