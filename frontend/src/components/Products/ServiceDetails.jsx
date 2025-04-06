import React, { useEffect, useState } from 'react'
import { toast } from 'sonner'

const selectedProduct = {
    name: "fruit facial",
    price: 200,
    originalPrice: 300,
    description: "Best facial",
    brand: "Lotus",
    pack: ["bleach+massage", "only bleach", "only Massage"],
    images: [{
        url: "https://picsum.photos/500/500?random=1",
        alt: "fruit facial"
    },
    {
        url: "https://picsum.photos/500/500?random=2",
        alt: "fruit facial"
    }
    ]
}

const serviceDetails = () => {

    const [mainImage, setMainImage] = useState("")
    const [selectedPack, setSelectedtPack] = useState("")
    const [Quantity, setQuantity] = useState(1)
    const [isButtonDisabled, setIsButtonDisabled] = useState(false)

    useEffect(() => {
        if (selectedProduct?.images?.length > 0) {
            setMainImage(selectedProduct.images[0].url)
        }
    }, [selectedProduct])

    const handleQuantityChange = (action) => {
        if (action === "plus") setQuantity((prev) => prev + 1)
        if (action === "minus" && Quantity > 1) setQuantity((prev) => prev - 1)
    }

    const handleAddToCart = () => {
        if (!selectedPack) {
            toast.error("please select pack", {
                duration: 1000
            })
            return
        }

        setIsButtonDisabled(true)

        setTimeout(() => {
            toast.success("service added to cart", {
                duration: 1000
            })
            setIsButtonDisabled(false)
        }, 500
        )
    }



    return (
        <div
            className='p-6'
        >
            <div className='max-w-6xl mx-auto bg-white p-8 rounded-lg'>
                <div className='flex flex-col md:flex-row'>

                    {/* left thumbnail */}
                    <div className='hidden md:flex flex-col space-y-4 mr-6'>
                        {selectedProduct.images.map((images, index) => (
                            <img
                                key={index}
                                src={images.url}
                                alt={images.altText || `Thumbanil ${index}`}
                                className={`w-20 h-20 object-cover rounded-lg cursor-pointer border
                                    ${mainImage === images.url ? "border-black" : "border-gray-300"}
                                    `}

                                onClick={() => setMainImage(images.url)}
                            />
                        ))}

                    </div>
                    {/* main image */}
                    <div className='md:w-1/2'>
                        <div className='mb-4'>
                            <img
                                className='w-full h-auto object-cover rounded-ig'
                                src={mainImage} alt='main service' />
                        </div>
                    </div>

                    {/* Mobile thumbnail */}
                    <div className='md:hidden flex overscroll-x-scroll space-x-4 mb-4'>
                        {selectedProduct.images.map((images, index) => (
                            <img
                                key={index}
                                src={images.url}
                                alt={images.altText || `Thumbanil ${index}`}
                                className='w-20 h-20 object-cover rounded-lg cursor-pointer border'
                            />
                        ))}
                    </div>

                    {/* right section */}
                    <div className='md:w-1/2 md:ml-10'>
                        <h1 className='text-2xl md:text-3xl font-semibold mb-2'>
                            {selectedProduct.name}
                        </h1>

                        <p className='text-lg text-gray-600 mb-1 line-through'>
                            {selectedProduct.originalPrice && `Rs. ${selectedProduct.originalPrice}`}
                        </p>

                        <p
                            className='text-xl text-gray-500 mb-2'
                        >
                            Rs. {selectedProduct.price}

                        </p>

                        <div className='mb-4'>
                            <p className='text-gray-700'>Pack:</p>
                            <div className='mt-2 gap-2 flex'>
                                {selectedProduct.pack.map((pack) =>
                                    <button
                                        onClick={() => setSelectedtPack(pack)}
                                        key={pack}
                                        className={`px-4 py-2 border ${selectedPack === pack ? "bg-black text-white" : ""}`}>
                                        {pack}
                                    </button>
                                )}
                            </div>
                        </div>

                        <div className='mb-6'>
                            <p className='text-gray-700'>Quantity:</p>
                            <div className='flex items-center space-x-4 mt-2'>
                                <button
                                    onClick={() => handleQuantityChange("minus")}
                                    className='px-2 py-1 bg-gray-200 rounded text-lg'>
                                    -
                                </button>
                                <span className='text-lg'>
                                    {Quantity}
                                </span>
                                <button
                                    onClick={() => handleQuantityChange("plus")}
                                    className='px-2 py-1 bg-gray-200 rounded text-lg'>
                                    +
                                </button>
                            </div>
                        </div>

                        <button
                            onClick={handleAddToCart}
                            disabled={isButtonDisabled}
                            className={`bg-black text-white py-2 px-6 rouned w-full mb-4 ${isButtonDisabled ? "bg-gray-600 cursor-not-allowed" : " hover: bg-gray-900"}`}>
                            {isButtonDisabled? "ADDING..." : "ADD TO CART"j}
                        </button>
 
                        <div className='mt-10 text-gray-700'>
                            <h3 className='text-xl font-bold mb-4'>Characterstics:</h3>
                            <table className='w-full text-left text-sm text-gray-500'>
                                <tbody>
                                    <tr>
                                        <td className='py-1'>Brand</td>
                                        <td className='py-1'>{selectedProduct.brand}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default serviceDetails