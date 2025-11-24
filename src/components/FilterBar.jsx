import { ChevronDown } from "lucide-react";
import React from "react";
import { Search } from "lucide-react";

const FilterBar = () => {
  return (
    <div className="bg-white/80 background-blur-sm p-8 rounded-3xl shadow-xl mb-12 border border-orange-100">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="relative">
          <label className="block text-sm font-semibol text-gray-700 mb-3">
            Category
          </label>
          <div className="relative">
            <select className="w-full px-5 py-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all duration-300 appearance-none bg-white shadow-sm hover:shadow-md font-medium">
              {/* Conditional Rendering */}
              <option value="">Option Label</option>
            </select>
            <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
          </div>
        </div>
        <div className="relative">
          <label
            htmlFor=""
            className="block text-sm font-semibold text-gray-700 mb-3"
          >
            Max Prep Time
          </label>
          <div className="relative">
            <select className="w-full px-5 py-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all duration-300 appearance-none bg-white shadow-sm hover:shadow-md font-medium">
              {/* Conditional Rendering */}
              <option value="">Option Label</option>
            </select>
            <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
          </div>
        </div>
        <div className="relative">
          <label
            htmlFor=""
            className="block text-sm font-semibold text-gray-700 mb-3"
          >
            Max Cook Time
          </label>
          <div className="relative">
            <select className="w-full px-5 py-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all duration-300 appearance-none bg-white shadow-sm hover:shadow-md font-medium">
              {/* Conditional Rendering */}
              <option value="">Option Label</option>
            </select>
            <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
          </div>
        </div>

        <div className="relative">
          <label
            htmlFor=""
            className="block text-sm font-semibold text-gray-700 mb-3"
          >
            Search
          </label>
          <div className="relative">
            <input
              type="text"
              placeholder="Search by name or ingredient..."
              className="w-full px-5 py-4 pl-12 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all duration-300 shadow-sm hover:shadow-md font-medium"
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
