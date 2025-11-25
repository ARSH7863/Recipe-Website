import Image from "../assets/images/hero2.jpg";

const AboutSection = () => {
  return (
    <div className="py-20 bg-light-neutral-100">
      <div className="container mx-auto px-4">
        {/* GRID FIXED */}
        <div className="grid lg:grid-cols-2 gap-16">
          {/* LEFT TEXT SECTION */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-8">
              Built For Real Life
            </h2>

            <div className="space-y-6 text-lg lg:text-xl text-secondary leading-relaxed">
              <p>
                Cooking shouldn't be complicated. These recipes come in under
                <span className="text-primary font-bold"> 30 minutes </span>
                of active time, fit busy schedules, and taste good enough to
                repeat.
              </p>

              <p>
                Whether you're new to the kitchen or just need fresh ideas,
                we've got you covered.
              </p>
            </div>
          </div>

          {/* RIGHT IMAGE SECTION */}
          <div className="flex justify-center items-center">
            <img
              src={Image}
              alt="Cooking"
              className="w-full max-w-md rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
