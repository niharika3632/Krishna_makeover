import React, { useEffect, useRef, useState } from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const offers = () => {
    const scrollRef = useRef(null)
    const [isDragging, setIsDragging] = useState(false)
    const [starX, setStarX] = useState(0)
    const [scrollLeft, setScrollRight] = useState(false)
    const [canScrollLeft, setCanScrollLeft] = useState(false)
    const [canScrollRight, setCanScrollRight] = useState(true)

    const offers = [
        {
            _id: "1",
            name: "O3 Facial",
            price: 1000,
            image: [
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
            image: [
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
            image: [
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
            image: [
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
            image: [
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
            image: [
                {
                    url: "https://picsum.photos/500/500?random=2",
                    altText: "O3 Facial"
                }
            ]
        }
    ]
    const handleMouseDown = (e) => {
        setIsDragging(true)
        setStarX(e.pageX - scrollRef.current.offSetLeft)
        setCanScrollLeft(scrollRef.current.scrollLeft)
    }

    const handleMouseUpOrLeave = (e) => {
        setIsDragging(false)
        
    }

    const handleMouseMove = (e) => {
        if (!isDraggin) return
        const x = e.pageX - scrollRef.current.offSetLeft
        const walk = x - startX
        scrollRef.current.scrollLeft = scrollLeft - walk

    }
    const scroll = (direction) => {
        const scrollAmount = direction === 'left' ? -300 : 300;

        scrollRef.current.scrollBy({left: scrollAmount, behaviour:"smooth" })
    }

    // update scroll button
    const updateScrollButtons = () => {
        const container = scrollRef.current

        if (container) {
            const leftScroll = container.scrollLeft
            const rightScrollable = container.scrollWidth - container.clientWidth


            setCanScrollLeft(leftScroll > 0)
            setCanScrollRight(leftScroll < rightScrollable - 5)
        }
        // console.log({
        //     scrollLeft: container.scrollLeft,
        //     clientWidth: container.clientWidth,
        //     containerScrollWidth: container.scrollWidth,
        //     offSetLeft: scrollRef.current.offSetLeft
        // })
    }

    useEffect(() => {
        const container = scrollRef.current
        if (container) {
            container.addEventListener("scroll", updateScrollButtons)
            updateScrollButtons()
            return () => container.removeEventListener("scroll", updateScrollButtons)
        }
    }, [])
    return (
        <section className='py-16 px-4 lg:px-0'>
            <div className='container mx-auto text-center mb-10 relative'>
                <h2 className='text-3xl font-bold mb-4'>
                    Explore exclusive offers
                </h2>
                <p className='text-lg text-gray-600 mb-8'>
                    Discover the exclusive services with the big offers
                </p>

                {/* Scroll Buttons */}

                <div className='absolute right-0 bottom-[-30px] flex space-x-2'>

                    {/* left button */}
                    <button
                        onClick={() => scroll("left")}
                        disabled={!canScrollLeft}
                        className={`p-2 rounded border 
                            ${canScrollLeft ? "bg-white text-black" : "bg-gray-200 text-gray-400 cursor-not-allowed"}`} >
                        <FiChevronLeft className='text-2xl' />
                    </button>

                    {/* right button */}
                    <button
                        onClick={() => scroll("right")}
                        disabled={!canScrollRight}
                        className={`p-2 rounded border 
                            ${canScrollRight ? "bg-white text-black" : "bg-gray-200 text-gray-400 cursor-not-allowed"}`}
                    >
                        <FiChevronRight className='text-2xl' />
                    </button>
                </div>
            </div>

            {/* Scrollable Content */}
            <div
                ref={scrollRef}
                className='container mx-auto overflow-x-scroll flex space-x-6 relative'
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUpOrLeave}
                onMouseLeave={handleMouseUpOrLeave}
            
            >
                
                {offers.map((product) => (
                    <div
                        key={product._id} className='min-w-[100%] sm:min-[50%] lg:min-w-[30%] relative'
                    >
                        <img src={product.image[0]?.url} alt={product.image[0]?.altText || product.name}
                            className="w-full h-[500px] rounded-lg object-cover"
                            draggable="false"

                        />
                        <div className='absolute bottom-0 left-0 right-0 bg-opacity-50 backdrop-blur-md text-white p-4 rounded-b-lg'>
                            <Link to={`/product/${product._id}`} className="block">
                                <h4 className='font-medium'>{product.name}</h4>
                                <p className='mt-1'>Rs.{product.price}</p>
                            </Link>
                        </div>

                    </div>
                )
                )}
            </div>
        </section>
    )
}

export default offers