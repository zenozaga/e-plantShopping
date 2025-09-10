import { useState } from "react";
import { useDispatch } from "react-redux";
import cn from "../common/utils/cn";
import { plants } from "../dataset/plants";

import { addItem } from "../store/CartSlice"
import { useSelector } from "react-redux";
import { slugify } from "../common/utils/string";

const categories = [
    {
        key: "all",
        name: "All",
        value: null
    },
    ...plants.map(category => ({
        key: category.category,
        name: category.category,
        value: category.category
    })),
];

export default function PlantsPage({
    goToHome,
}) {

    const [currectCategory, setCurrentCategory] = useState(null);

    const { ids, isOpen } = useSelector(state => state.cart)
    const dispatch = useDispatch();

    const inCart = (plant) => {
        const id = slugify(plant.name);
        return ids.includes(id);
    }


    const handleSetCategory = (category) => {
        if (category === "All") {
            setCurrentCategory(null);
        } else {
            setCurrentCategory(category);
        }
    }


    const filteredPlants = currectCategory ? plants.filter(category => category.category === currectCategory) : plants;


    return <section className={cn(
        "w-full flex-1 h-full animate-fadeIn",
        "flex flex-col gap-4",
        isOpen ? "overflow-hidden" : "overflow-auto",
    )}>
        <div
            className="py-8"
        >
            <h1 className={cn(
                "max-lg:font-medium max-sm:px-4 sm:text-5xl lg:text-6xl xl:text-8xl",
                "dmsans text-center px-2 text-4xl tracking-tighter text-balance",
            )}>
                Plants Collection
            </h1>
        </div>

        <div className="w-full container mx-auto flex-1 2xl:px-4 h-full">
            <div className="flex flex-col gap-2">
                <span className="text-lg font-semibold mr-4">
                    Categories:
                </span>
                <div className="w-full flex flex-wrap gap-4">
                    {categories.map(category => {

                        const active = currectCategory === category.value;

                        return <button key={category.key} className={cn(
                            "border-2 border-gray-300 text-dark cursor-pointer",
                            "p-1 px-3 rounded-full",
                            "hover:bg-green-600 hover:text-white hover:border-green-600",
                            "transition duration-300 ease-in-out",
                            "text-sm font-semibold",
                            active ? "bg-green-600 text-white border-green-600" : ""
                        )}
                            onClick={() => handleSetCategory(category.value)}
                        >
                            {category.name}
                        </button>
                    })}
                </div>
            </div>

            <div className="w-full flex flex-col col-span-5 gap-10 mt-8">
                {filteredPlants.map((category) => {

                    return <section key={category.category}>

                        <h3 className="text-2xl font-semibold mb-4">
                            {category.category}
                        </h3>

                        <div className={cn(
                            "w-full grid grid-cols-2",
                            "2xl:grid-cols-6",
                            "xl:grid-cols-4",
                            "lg:grid-cols-3",
                        )}>
                            {category.plants.map((plant) => {

                                const isInCart = inCart(plant)

                                return <article key={plant.name} className={cn(
                                    "w-full p-4 bg-white rounded-3xl gap-4",
                                    "flex flex-col justify-start items-start",
                                )}>

                                    <div className="gap-4 w-full">
                                        <img src={plant.image} alt={plant.name} className="w-full object-cover rounded-2xl aspect-[9/12]" />
                                        <div className="mt-2">
                                            <h4 className="text-lg font-semibold">{plant.name}</h4>
                                            <p className="text-gray-600">{plant.description}</p>
                                        </div>
                                    </div>

                                    <div className="w-full items-center justify-between mt-4 flex">
                                        <span className="font-bold text-lg">
                                            {plant.cost}
                                        </span>
                                        <button className={cn(
                                            "border-2 border-gray-300 text-dark cursor-pointer",
                                            "p-1 px-3 rounded-full",
                                            "hover:bg-green-600 hover:text-white hover:border-green-600",
                                            "transition duration-300 ease-in-out",
                                            "text-sm font-semibold",
                                            isInCart ? "bg-green-600 text-white border-green-600 cursor-not-allowed" : ""
                                        )}
                                            disabled={isInCart}
                                            onClick={() => {
                                                dispatch(addItem(plant))
                                            }}
                                        >
                                            {isInCart ? "In the Cart" : "Add to Cart"}
                                        </button>
                                    </div>
                                </article>
                            })}
                        </div>

                    </section>
                })}
            </div>
        </div>

        <div className="my-4"></div>

    </section>
}