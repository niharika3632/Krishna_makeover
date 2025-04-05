import React from 'react'
import { RiDeleteBin3Line } from 'react-icons/ri'

const CartContents = () => {

    const cartProducts = [
        {
            productId: 1,
            name: "Gold Facial",
            price: 700,
            quantity: 1,
            image: "https://picsum.photos/200?random=1"
        },
        {
            productId: 2,
            name: "Fruit Facial",
            price: 250,
            quantity: 1,
            image: "https://picsum.photos/200?random=1"
        },
    ]
    return (
        <div>
            {cartProducts.map((product, index) => (
                <div key={index}
                    className='flex items-start justify-between py-4 border-b'>
                    <div
                        className='flex items-start'
                    >
                        <img src={product.image} alt={product.name}
                            className='w-20 h-24 object-cover mr-4 rounded'
                        />
                        <div>
                            <h3>{product.name}</h3>
                            <p
                                className='text-sm text-gray-500'
                            >
                                price: Rs.{product.price}
                            </p>
                            <div className='flex items-center mt-2'>
                                <button className='border rounded px-2 py-1 text-xl font-medium'>
                                    -
                                </button>
                                <span className='mx-4'>{product.quantity}</span>
                                <button className='border rounded px-2 py-1 text-xl font-medium'>
                                    +
                                </button>
                            </div>
                        </div>
                    </div>
                    <p>Rs.{product.price.toLocaleString()}</p>
                    <button>
                        <RiDeleteBin3Line className="h-6 w-6 mt-4 text-red-600" />
                    </button>

                </div>

            ))}
        </div>
    )
}

export default CartContents