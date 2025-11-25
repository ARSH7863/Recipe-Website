import React from "react";
import HeroImage from "../assets/images/hero_image.jpg";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="px-4 py-20 flex flex-col items-center text-center">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-primary mb-6">
          Healthy meals,Zero Fuss
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 mb-10  max-2-2 leading-relaxed">
          Discover eight quick, whole food recipes that you can cook tonight -
          no processed junk, no guesswork. Simple, delicious and healthy.
        </p>
        <Link to="/about">
          <button className="bg-primary text-light-neutral-0 px-10 py-5 rounded-2xl text-lg sm:text-xl font-semibold hover:bg-secondary transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl cursor-pointer">
            Start Exploring...
          </button>
        </Link>

        <div className="mt-16 w-full flex justify-center">
          <img
            src={HeroImage}
            alt="Hero Image"
            className="required: w-full h-auto px-5 rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-300 border-white border-8"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
