import { Icon } from "@iconify/react/dist/iconify.js";
import cn from "../common/utils/cn";
import BackgroundEffect from "../components/BackgroundEffect";
import { icons } from "../config/icons";
import AboutUs from "../components/AboutUs";

export default function HomePage({ plants, handleGoToPlants } = {}) {
  return (
    <section className="w-full h-full relative overflow-hidden flex-1 flex">
      <BackgroundEffect />

      <div className="w-full bg-black/5 relative flex-1">
        <div
          className={cn(
            "w-full container mx-auto flex-1 2xl:px-4 z-10 h-full",
            "grid grid-cols-1 lg:grid-cols-8 lg:gap-10"
          )}
        >
          <section className="lg:col-span-4 flex flex-col justify-start items-start py-10 lg:py-20 gap-8">
            <div className="flex flex-col justify-start items-start gap-6 text-center lg:text-left lg:items-start animate-fadeInDown">
              <h2
                className={cn(
                  "site-title font-medium dmsans",
                  " text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl",
                  " lg:text-left w-full lg:p-0"
                )}
              >
                <span style={{ color: "#4cb14c" }}>GreenSpot</span>
                <br />
                Your Green Shopping <br /> <span>Destination</span>
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg lg:text-xl max-w-lg">
                Discover a world of lush plants and eco-friendly products at
                your fingertips.
              </p>
              <button
                className={cn(
                  "px-6 py-3 flex items-center mx-auto lg:mx-0",
                  "border-2 border-green-600 text-dark",
                  "font-semibold hover:bg-green-700 hover:text-white cursor-pointer",
                  "rounded-full",
                  "transition duration-300 ease-in-out"
                )}
                onClick={handleGoToPlants}
              >
                <span className="text-lg font-semibold">Go to Plants Collection</span>
                <Icon
                  icon={icons.arrowRight}
                  className="inline-block ml-2 text-2xl"
                />
              </button>
            </div>

            <div className="w-full flex flex-col lg:mt-4 xl:mt-10 hidden lg:block p-4 bg-white rounded-3xl drop-shadow-2xl animate-fadeInDown delay-200">
              <div className="w-full flex justify-between items-center">
                <h3 className="text-xl font-semibold">Some Plants</h3>
                <button
                  className="text-green-600 hover:underline text-lg font-medium"
                  onClick={handleGoToPlants}
                >
                  View All
                </button>
              </div>

              <div className="flex gap-4  grid-cols-3 mt-4">
                {plants.slice(0, 3).map((category) => {
                  const plant = category.plants[0];

                  return (
                    <div
                      key={plant.id}
                      className={cn("w-full aspect-square", "rounded-2xl")}
                    >
                      <img
                        src={plant.image}
                        alt={plant.name}
                        className="w-full h-full object-cover rounded-2xl"
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
          <AboutUs />
        </div>
      </div>
    </section>
  );
}
