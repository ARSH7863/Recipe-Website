import { RefreshCw } from "lucide-react";
import FilterBar from "../components/FilterBar";
import RecipeGrid from "../components/RecipeGrid";
import RecipeModel from "../components/RecipeModel";

const RecipePage = () => {
  return (
    <div className="min-h-screen bg-light-neutral-200">
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-5xl lg:text-7xl font-bold text-primary mb-6">
          Explore our <span>Healthy & Simple</span> Recipes
        </h1>
        <p className="text-xl text-secondary max-w-4xl mx-auto leading-relaxed mb-8">
          Discover nutritious recipes from around the world that fit your busy
          lifestyle. Search by name, ingredients, or explore by category - find
          your next favourite dish!
        </p>
        <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-10"></div>
        {/* Conditional Rendering */}
        {/* <div className="mt-8 p-8 bg-red-50 border border-red-200 rounded-2xl inline-block">
          <p className="text-red-600">Errors</p>
          <button className="mt-4 inline-flex items-center px-6 py-3 bg-orange-400 text-white rounded-xl hover:bg-orange-400 transition-all duration-300 font-semibold">
            <RefreshCw className="w-4 h-4 mr-2" />
          </button>
        </div> */}
        {/* Filter Bar */}
        <div className="py-6">
          <div className="container mx-auto px-4">
            <FilterBar />
          </div>
        </div>

        {/* Recipe Grid */}
        <div className="container mx-auto px-4 py-12">
          <RecipeGrid />
        </div>
      </div>
      {/* Recipe Model */}
      <RecipeModel />
    </div>
  );
};

export default RecipePage;
