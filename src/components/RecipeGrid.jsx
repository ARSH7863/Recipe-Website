import React from "react";
import RecipeCard from "./RecipeCard";

const RecipeGrid = () => {
  return (
    //Conditional Rendering
    // <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
    //   <div className="bg-white rounded-2xl shadow-sm overflow-hidden animate-pulse">
    //     <div className="h-48 bg-gray-200"></div>
    //     <div className="space-y-3 p-6">
    //       <div className="h-4 bg-gray-200 rounded w-3/4"></div>
    //       <div className="h-3 bg-gray-200 rounded w-full"></div>
    //       <div className="h-4 bg-gray-200 rounded w-2/3"></div>
    //       <div className="flex justify-between">
    //         <div className="h-3 bg-gray-200 rounded w-16"></div>
    //         <div className="h-3 bg-gray-200 rounded w-12"></div>
    //       </div>
    //       <div className="h-10 bg-gray-200 rounded"></div>
    //     </div>
    //   </div>
    // </div>

    // Conditional Rendering
    // <div className="text-center py-16">
    //   <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
    //     <span className="text-4xl">🍽️</span>
    //   </div>
    //   <h3 className="text-xl font-semibold text-gray-800 mb-2">
    //     No Recipes Found
    //   </h3>
    //   <p className="text-gray-600">
    //     Try adjusting your search or filters to find more recipes.
    //   </p>
    // </div>

    //Conditional Rendering
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {/* Conditional Rendering */}
      <RecipeCard />
    </div>
  );
};

export default RecipeGrid;
