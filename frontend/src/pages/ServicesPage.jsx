import React, { useEffect, useState, useRef } from 'react'
import { FaFilter } from 'react-icons/fa'
import FilterSideBar from '../components/Products/FilterSideBar'
import SortOptions from '../components/Products/SortOptions'
import ProductGrid from '../components/Products/ProductGrid'

const ServicesPage = () => {
    const [services, setServices] = useState([])
    const SideBarRef = useRef(null)
    const [isSideBarOpen, setIsSideBarOpen] = useState(false)

    const toggleSideBar = () => {
        setIsSideBarOpen(!isSideBarOpen)
    }

    const handleClickOutside = (e) => {
        if (SideBarRef.current && !SideBarRef.current.contains(e.target)) {
            setIsSideBarOpen(false)
        }
    }

    useEffect(() => {
        // add event listener
        document.addEventListener("mousedown", handleClickOutside)
        // clean event listener
        document.removeEventListener("mousedown", handleClickOutside)
    })

    useEffect(() => {
        setTimeout(() => {
            const fetchedProducts = [
                {
                    _id: "1",
                    name: "O3 Facial",
                    price: 1000,
                    images: [
                        {
                            url: "https://picsum.photos/500/500?random=1",
                            altText: "O3 Facial"
                        }
                    ]
                },
                {
                    _id: "5",
                    name: "Gold Facial",
                    price: 800,
                    images: [
                        {
                            url: "https://picsum.photos/500/500?random=2",
                            altText: "O3 Facial"
                        }
                    ]
                },
                {
                    _id: "6",
                    name: "O3 Facial",
                    price: 1000,
                    images: [
                        {
                            url: "https://picsum.photos/500/500?random=1",
                            altText: "O3 Facial"
                        }
                    ]
                },
                {
                    _id: "7",
                    name: "Gold Facial",
                    price: 800,
                    images: [
                        {
                            url: "https://picsum.photos/500/500?random=2",
                            altText: "O3 Facial"
                        }
                    ]
                },
                {
                    _id: "8",
                    name: "O3 Facial",
                    price: 1000,
                    images: [
                        {
                            url: "https://picsum.photos/500/500?random=1",
                            altText: "O3 Facial"
                        }
                    ]
                },
                {
                    _id: "9",
                    name: "Gold Facial",
                    price: 800,
                    images: [
                        {
                            url: "https://picsum.photos/500/500?random=2",
                            altText: "O3 Facial"
                        }
                    ]
                }
            ]; setServices(fetchedProducts)
        }, 1000)
    }, [])
    return (
        <div className={`flex flex-col lg:flex-row`}>
            {/* Mobile filter button */}
            <button
                onClick={toggleSideBar}
                className={`lg:hidden p-2 flex justify-center items-center`}>
                <FaFilter
                    className={`mr-2`}
                /> Filters
            </button>


            {/* filter sidebar */}
            <div
                ref={SideBarRef}
                className={`${isSideBarOpen ? "translate-x-0" : "-translate-x-full"} fixed inset-y-0 z-50 left-0 w-64 bg-white overflow-auto transition-transform duration-300 lg:static lg:translate-x-0`}
            >
                <FilterSideBar />
            </div>
            <div className={`flex-grow p-4`}>
                <h2 className={`text-2xl uppercase mb-4`}>All Services</h2>


                {/* sorted options */}
                <SortOptions />

                {/* product grid */}
                <ProductGrid products={services} />

            </div>
        </div>
    )
}

export default ServicesPage