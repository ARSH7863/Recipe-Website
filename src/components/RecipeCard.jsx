import { Clock, Users } from "lucide-react";
import React from "react";

const RecipeCard = ({ recipe, onViewRecipe }) => {
  return (
    <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group transform hover:scale-105">
      <div className="relative">
        <img
          src={recipe.image}
          alt=""
          className="w-full h-56 object-cover group-hover:scale-110 transition-all duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-1">
          {recipe.title}
        </h3>
        <p className="text-gray-600 mb-6 line-clamp-2 leading-relaxed">
          {recipe.description}
        </p>
        <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Users className="w-4 h-4" />
              <span>Servings: {recipe.servings}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="w-4 h-4" />
              <span>Prep: {recipe.prepTime} minutes</span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
          <div className="flex items-center space-x-1">
            <Clock className="w-4 h-4" />
            <span>Cook: {recipe.cookTime} minutes</span>
          </div>
        </div>

        <button className="w-full bg-primary text-white py-4 rounded-2xl font-semibold hover:from-orange-600 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer" onClick={()=>onViewRecipe(recipe)}>
          View Recipe
        </button>
      </div>
    </div>
  );
};

export default RecipeCard;
