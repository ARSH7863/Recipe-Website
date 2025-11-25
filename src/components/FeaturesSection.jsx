import React from "react";
import carrotImage from "../assets/images/carrotImage.png";
import leafImage from "../assets/images/leafImage.png";
import searchImage from "../assets/images/searchImage.png";

const features = [
  {
    icon: carrotImage,
    title: "Whole-food recipes",
    description: "Each dish uses everyday, unprocessed ingredients.",
  },
  {
    icon: leafImage,
    title: "Minimum fuss",
    description:
      "All recipes are designed to make eating healthy quick and easy.",
  },
  {
    icon: searchImage,
    title: "Search in seconds",
    description:
      "Filter by name or ingredient and jump straight to the recipe you need.",
  },
];

const FeaturesSection = () => {
  return (
    <div className="py-20 bg-light-neutral-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-14">
          What you will get
        </h2>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-10 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="flex flex-col items-center space-y-6">
                <div className="w-20 h-20 bg-light-neutral-100 rounded-2xl flex items-center justify-center shadow">
                  <img
                    src={feature.icon}
                    alt={feature.title}
                    className="w-12 h-12 object-contain"
                  />
                </div>

                <h3 className="text-primary text-2xl font-bold">
                  {feature.title}
                </h3>

                <p className="text-secondary leading-relaxed text-lg">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
