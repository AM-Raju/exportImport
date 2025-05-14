import Heading from "@/components/ui/Heading";
import SubText from "@/components/ui/SubText";
import React from "react";

import {
  FaLeaf,
  FaShippingFast,
  FaHandsHelping,
  FaGlobeAsia,
  FaSeedling,
  FaWarehouse,
} from "react-icons/fa";

const features = [
  {
    title: "Fresh Products",
    description:
      "We source fruits, vegetables, and spices directly from local farms, ensuring maximum freshness, nutritional value, and rich natural flavor upon delivery.",
    icon: <FaLeaf size={60} />,
    bgImage: "https://i.ibb.co/nsV1xdbG/card-bg.webp", // image for card 0
  },
  {
    title: "Fast Shipping",
    description:
      "Our efficient logistics and global delivery system ensure your products arrive quickly and safely, maintaining quality and reducing transit-related spoilage.",
    icon: <FaShippingFast size={60} />,
  },
  {
    title: "Trusted Partners",
    description:
      "We collaborate with certified farmers, exporters, and logistics partners who maintain international quality standards and follow sustainable business practices.",
    icon: <FaHandsHelping size={60} />,
    bgImage: "https://i.ibb.co/35hTc6wC/card-bg3.webp", // image for card 2
  },
  {
    title: "Global Reach",
    description:
      "With a strong international network, we export products to countries across Asia, Europe, and North America with consistent reliability and service.",
    icon: <FaGlobeAsia size={60} />,
  },
  {
    title: "Organic Sources",
    description:
      "All our fruits, vegetables, and spices are grown using organic and eco-friendly farming methods without harmful chemicals or pesticides.",
    icon: <FaSeedling size={60} />,
    bgImage: "https://i.ibb.co/qK9C0gS/card-bg2.webp", // image for card 4
  },
  {
    title: "Safe Packaging",
    description:
      "We use industry-grade, hygienic, and eco-conscious packaging solutions to preserve product freshness, prevent contamination, and ensure customer safety.",
    icon: <FaWarehouse size={60} />,
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Heading */}

        <Heading> Why Choose Us</Heading>
        <SubText>
          {" "}
          We are committed to delivering fresh, organic, and top-quality
          agricultural products worldwide. Here’s why you can rely on us.
        </SubText>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 max-lg:gap-2 ">
          {features.map((item, index) => {
            const isBgImage = !!item.bgImage;

            return (
              <div
                key={index}
                className={`relative flex flex-col items-center justify-center max-lg:border border-primary-green/50  overflow-hidden transition-all duration-300 aspect-square p-6 `}
              >
                {isBgImage && (
                  <>
                    {/* Background Image */}
                    <div
                      className="absolute inset-0 bg-cover bg-center "
                      style={{ backgroundImage: `url('${item.bgImage}')` }}
                    ></div>
                    {/* Overlay */}
                    <div className="absolute inset-0  bg-primary-green/40 "></div>
                  </>
                )}

                {/* Content */}
                <div className="relative z-10 text-center">
                  <div className="mb-4 text-dark-green  flex justify-center items-center">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-md text-secondary-t">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
