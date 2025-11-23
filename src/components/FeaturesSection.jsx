import React from "react";

const FeaturesSection = () => {
  return (
    <div className="py-20 bg-light-neutral-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-6">
          What you will get
        </h2>
        ;{/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="my-10">
            <div className="flex flex-col space-y-4 text-left">
              <div className="w-15 h-15 bg-white rounded-xl flex items-center justify-center my-10">
                <img
                  src=""
                  alt=""
                  className="w-12 h-12 object-contain hover:scale-105 transition-all duration-300"
                />
              </div>
              {/* Feature Text */}
              <h3 className="text-primary text-3xl font-bold">
                Feature Titles
              </h3>
              <p className="text-secondary leading-relaxed text-xl">
                Feature Desciption
              </p>
            </div>
          </div>
        </div>
        ;
      </div>
    </div>
  );
};

export default FeaturesSection;
