import { Icon } from "@iconify/react";
import CartButton from "./CartButton";

import { goToHome, goToPlants } from "../store/NavSlice"
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import cn from "../common/utils/cn";

const navs = [
    {
        key: "home",
        name: 'Home', href: '#home', icon: "", onClick: goToHome
    },
    { key: "plants", name: 'Plants Collection', href: '#products', icon: "", onClick: goToPlants },
]

export default function Header() {

    const activePage = useSelector(state => state.nav.currentPage)
    const dispatch = useDispatch()



    return (<header className='w-full sticky top-0 z-10 p-2 2xl:p-4 bg-white'>

        <div className="w-full mx-auto container  flex justify-between items-center gap-8 lg:gap-16">
            <div className="flex items-center">
                <img src={"images/logo.png"} alt="Logo" className="h-10 w-10 inline-block mr-2" />
                <h1 className='text-xl font-bold text-gray-800 dmsans'>GreenSpot</h1>
            </div>



            <nav className='flex justify-end items-center  flex gap-8 mr-auto hidden lg:flex'>
                {
                    navs.map((nav) => {

                        const active = activePage === nav.key

                        return <a
                            key={nav.name}
                            href={nav.href}
                            className={cn(
                                "text-lg font-semibold relative",
                                active ? "text-gray-700" : "text-gray-400",
                            )}
                            onClick={() => {
                                dispatch(nav.onClick())
                            }}>
                            {nav.name}
                            <div
                                className={cn(
                                    "absolute h-1 w-full rounded-full transition-all duration-300",
                                    active ? "bg-green-500" : "bg-transparent",
                                )}
                            ></div>
                        </a>
                    })
                }
            </nav>

            <div className='divider'>
                <CartButton />
            </div>
        </div>

    </header>)
}