import { Clock, X } from "lucide-react";
import React from "react";

const RecipeModel = ({ recipe, isOpen, onClose }) => {
  if (!isOpen || !recipe) return null;
  return (
    <div className="fixed inset-0 bg-black/50 backdrop:blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Image + Close Button */}
        <div className="relative">
          <img
            src={recipe.image}
            alt=""
            className="w-full h-64 object-cover rounded-t-2xl"
          />
          <button className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-all duration-200">
            <X
              className="h-5 w-5 text-gray-600 cursor-pointer"
              onClick={onClose}
            />
          </button>
        </div>

        {/* Content */}
        <div className="p-8">
          {/* Title + Description */}
          <div className="mb-6">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              {recipe.title}
            </h2>
            <p className="text-gray-600 text-lg">{recipe.description}</p>
          </div>

          {/* Time + Servings */}
          <div className="grid grid-cols-3 gap-4 mb-8 p-6 bg-gray-50 rounded-xl">
            <div className="text-center">
              <Clock className="h-6 w-6 text-teal-600 mx-auto mb-2" />
              <p className="text-sm text-gray-600">Prep Time</p>
              <p className="text-gray-800 font-semibold">
                {recipe.prepTime} minutes
              </p>
            </div>

            <div className="text-center">
              <Clock className="h-6 w-6 text-teal-600 mx-auto mb-2" />
              <p className="text-sm text-gray-600">Cook Time</p>
              <p className="text-gray-800 font-semibold">
                {recipe.cookTime} minutes
              </p>
            </div>

            <div className="text-center">
              <Clock className="h-6 w-6 text-teal-600 mx-auto mb-2" />
              <p className="text-sm text-gray-600">Servings</p>
              <p className="text-gray-800 font-semibold">
                {recipe.servings} people
              </p>
            </div>
          </div>

          {/* Ingredients (Left) + Instructions (Right) */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* LEFT — INGREDIENTS */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Ingredients
              </h3>
              <div className="space-y-3">
                {/* Map Method */}
                {recipe.ingredients.map((ingr, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-teal-600 rounded-full mt-2 shrink-0"></div>
                    <span className="text-gray-700">{ingr}</span>
                  </div>
                ))}
              </div>

              {/* Tags */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h4 className="text-lg font-semibold text-gray-800 mb-3">
                  Tags
                </h4>
                <div className="flex flex-wrap gap-2">
                  {/* Map Method */}
                  {recipe.tags.map((tag) => (
                    <span className="px-3 py-1 bg-teal-100 text-teal-800 text-sm font-medium rounded-full">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT — INSTRUCTIONS */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Instructions
              </h3>

              {/* Map */}
              {recipe.instructions.map((instruction, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-teal-600 text-white rounded-full flex items-center justify-center text-sm font-semibold shrink-0">
                    {index + 1}
                  </div>
                  <p className="text-gray-700 leading-relaxed">{instruction}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeModel;
