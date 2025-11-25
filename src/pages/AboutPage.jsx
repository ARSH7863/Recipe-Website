import { Award, ChefHat, Clock, Heart, Leaf, Users } from "lucide-react";
import Hero from "../assets/images/my_image.jpeg";
import { Link } from "react-router-dom";

const stats = [
  { number: "10K+", label: "Happy Cooks", icon: Users },
  { number: "500+", label: "Healthy Recipes", icon: ChefHat },
  { number: "30 mins", label: "Average Cook Time", icon: Clock },
  { number: "5 ★", label: "Average Rating", icon: Award },
];

const values = [
  {
    icon: Heart,
    title: "Health First",
    description:
      "Every recipe is crafted with nutrition in mind, using whole foods and natural ingredients to fuel your body.",
  },
  {
    icon: Clock,
    title: "Time Conscious",
    description:
      "We understand busy lifestyles. Our recipes are designed to be quick, efficient, and perfect for real life.",
  },
  {
    icon: Leaf,
    title: "Sustainable",
    description:
      "We promote sustainable cooking practices and ingredients that are good for you and the planet.",
  },
];

const team = [
  {
    name: "Virat Kohli",
    role: "Head Chef & Cricketer",
    image:
      "https://imgs.search.brave.com/eCDMZMR8k7AOA5J4VN13bBcbx2oPEKIpaG_f6L4I4XI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vY3JpY3Rv/ZGF5LmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMi8wMy9W/aXJhdC1Lb2hsaS0z/LmpwZz9zc2w9MQ",
    bio: "15+ years creating healthy, delicious recipes",
  },

  {
    name: "Arsh Shaikh",
    role: "Founder of Taste Of Home",
    image: Hero,
    bio: "10+ years creating healthy, delicious recipes",
  },

  {
    name: "Cristiano Ronaldo",
    role: "Head Chef & Footballer",
    image:
      "https://imgs.search.brave.com/VIhpZwEoEIX7D9bT8H6waWByyoZUl4nY1IdoP6ZI4Zg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9wZW9w/bGUuY29tL3RobWIv/MC1GazctRFhJQnNO/MnhUTldWZVR4Z0o5/MVpRPS80MDAweDAv/ZmlsdGVyczpub191/cHNjYWxlKCk6bWF4/X2J5dGVzKDE1MDAw/MCk6c3RyaXBfaWNj/KCk6Zm9jYWwoNjkx/eDI3ODo2OTN4Mjgw/KS9jcmlzdGlhbm8t/cm9uYWxkby1uZXQt/d29ydGgtc2F1ZGkt/cHJvLWxlYWd1ZS0w/ODEyMjUtMmE2MjM0/NjgwMDMwNGU2Mjg2/NjU5MjQxMGJjYTZj/ZmMuanBn",
    bio: "20+ years creating healthy, delicious recipes",
  },
];

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
      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((item, index) => (
            <div key={index}>
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                <item.icon className="text-white h-8 w-8" />
              </div>
              <h3 className="text-3xl font-bold text-primary">{item.number}</h3>
              <p className="text-gray-950">{item.label}</p>
            </div>
          ))}
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
          <h2 className="text-4xl font-bold text-primary my-10">Our Values</h2>
          <div className="grid grid-cols-3 gap-8">
            {/* Map method */}
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-neutral-50 p-8 rounded-3xl shadow-md hover:shadow-lg transition"
              >
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="text-white h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-primary">
                  {value.title}
                </h3>
                <p className="text-gray-950">{value.description}</p>
              </div>
            ))}
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
            {team.map((team) => (
              <div className="group">
                <img
                  src={team.image}
                  alt="Team member images"
                  className="w-48 h-48 rounded-full object-cover border-4 border-white shadow-lg mb-4 mx-auto"
                />
                <h3 className="text-2xl font-bold text-primary">{team.name}</h3>
                <p className="text-orange-400">{team.role}</p>
                <p className="text-gray-950">{team.bio}</p>
              </div>
            ))}
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
        <Link to="/recipes">
          <button className="bg-green-700 text-white px-10 py-5 rounded-2xl text-lg font-semibold hover:bg-green-600 transition transform hover:scale-105 shadow-xl cursor-pointer">
            Browse Recipes
          </button>
        </Link>
      </section>
    </div>
  );
};

export default AboutPage;
