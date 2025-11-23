import React from "react";
import LeftImage from "../assets/images/fork-pattern.png";
import RightImage from "../assets/images/spoon-pattern.png";

const CTASection = () => {
  return (
    <div className="py-20 lg:py-32 bg-light-neutral-300/50 relative overflow-hidden">
      <div className="absolute top-10 left-0 w-96 h-96">
        <img src={LeftImage} alt="" className="w-full h-full object-contain" />
      </div>
      <div className="absolute bottom-0 right-0 w-96 h-96">
        <img src={RightImage} alt="" className="w-full h-full object-contain" />
      </div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-4xl lg:text-6xl font-bold text-primary mb-6">
          Ready to cook smarter?
        </h2>
        <p className="text-xl lg:text-2xl text-primary mb-10 max-w-3xl mx-auto leading-relaxed">
          Hit the button, pick a reciper, and get dinner on the table-fast
        </p>
        <button className="bg-primary text-white px-10 py-5 rounded-2xl text-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl cursor-pointer">
          Browse Recipes!
        </button>
      </div>
    </div>
  );
};

export default CTASection;
