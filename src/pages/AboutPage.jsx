import React from "react";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-light-neutral-200">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden flex items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl lg:text-7xl font-bold text-primary mb-6">
            My Story
          </h1>
          <p className="text-xl text-gray-950 max-w-3xl mx-auto leading-relaxed mb-8">
            I believe that healthy eating shouldn't be complicated,
            time-consuming, or boring. My mission is to make nutritious cooking
            accesible to everyone.
          </p>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="">
            <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
              Icons
            </div>
            <h3 className="text-3xl font-bold text-primary">Stats Number</h3>
            <p className="text-gray-950">Stats Label</p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 lg:py-32 lg:bg-light-neutral-100">
        <div className="container mx-auto px-40 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-10">
              Why I started this journey.
            </h2>
            <div className="space-y-6 text-lg text-gray-950 leading-relaxed">
              <p>
                It all began in a small kitchen where our founder, struggling to
                balance a demanding career with healthy eating, realized that
                most "healthy" recipes were either too complicated or simply
                didn't taste good.
              </p>
              <p>
                We set out to change that. Every recipe on our platform is
                tested in real kitchens by real people with busy lives.
              </p>
              <p>
                Today, we're proud to help thousands of people cook healthier
                meals without the stress - proving that good food doesn't have
                to be complicated.
              </p>
            </div>
          </div>

          {/* Fixed Image Height + Perfect Center */}
          <div className="relative h-[450px] flex items-center justify-center">
            <img
              src="https://images.pexels.com/photos/4253302/pexels-photo-4253302.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt=""
              className="rounded-3xl shadow-xl h-full w-auto object-cover"
            />
          </div>
        </div>
      </section>
      {/* Value Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-primary">Our Values</h2>
          <div className="grid grid-cols-3 gap-8">
            {/* Map method */}
            <div className="bg-neutral-50 p-8 rounded-3xl shadow-md hover:shadow-lg transition">
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                Icon
              </div>
              <h3 className="text-2xl font-bold text-primary">Value Title</h3>
              <p className="text-gray-950">Value Description</p>
            </div>
          </div>
        </div>
      </section>
      {/* Team Section */}
      <section className="py-20 lg:py-32 bg-neutral-50">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-4xl font-bold text-primary mb-10">
            Meet My Team.
          </h3>
          <div className="grid md:grid-cols-3 gap-10">
            {/* Map method */}
            <div className="group">
              <img
                src=""
                alt=""
                className="w-48 h-48 rounded-full object-cover border-4 border-white shadow-lg mb-4 mx-auto"
              />
              <h3 className="text-2xl font-bold text-primary">Member Name</h3>
              <p className="text-orange-400">Member Role</p>
              <p className="text-gray-950">Member Bio</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-center">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
          Ready to start cooking?
        </h2>
        <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
          Join thousands of home cooks who have transformed their kitchens with
          our simple, healthy recipes.
        </p>
        <button className="bg-green-700 text-white px-10 py-5 rounded-2xl text-lg font-semibold hover:bg-orange-400 transition transform hover:scale-105 shadow-xl cursor-pointer">
          Browse Recipes
        </button>
      </section>
    </div>
  );
};

export default AboutPage;
