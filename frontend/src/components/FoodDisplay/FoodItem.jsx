import React, { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'

const FoodItem = ({ id, name, price, description, image }) => {
    const { cartItems, addToCart, removeFromCart, url } = useContext(StoreContext);

    return (
        <div className='card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 rounded-2xl overflow-hidden'>
            
            {/* IMAGE SECTION */}
            <div className='relative'>
                <img 
                    className='w-full h-48 object-cover' 
                    src={url + "/images/" + image} 
                    alt={name} 
                />

                {/* CART BUTTON / COUNTER */}
                {!cartItems[id] ? (
                    <button 
                        className='absolute bottom-4 right-4 btn btn-circle btn-sm bg-white border-none shadow-md text-orange-500 hover:bg-orange-500 hover:text-white'
                        onClick={() => addToCart(id)}
                    >
                        +
                    </button>
                ) : (
                    <div className='absolute bottom-4 right-4 flex items-center gap-3 bg-white p-1 px-2 rounded-full shadow-lg border border-gray-100'>
                        <button 
                            className='w-6 h-6 flex items-center justify-center rounded-full bg-red-100 text-red-600 hover:bg-red-200 font-bold' 
                            onClick={() => removeFromCart(id)}
                        >
                            -
                        </button>
                        <p className='font-medium'>{cartItems[id]}</p>
                        <button 
                            className='w-6 h-6 flex items-center justify-center rounded-full bg-green-100 text-green-600 hover:bg-green-200 font-bold' 
                            onClick={() => addToCart(id)}
                        >
                            +
                        </button>
                    </div>
                )}
            </div>

            {/* INFO SECTION */}
            <div className="p-5">
                <div className='flex justify-between items-center mb-1'>
                    <p className='font-bold text-lg text-gray-800'>{name}</p>
                </div>

                {/* description from first code */}
                <p className='text-gray-400 text-xs mb-3 line-clamp-2'>
                    {description}
                </p>

                {/* price (₹ + $ both option) */}
                <p className='text-orange-500 font-bold text-xl'>
                    ₹{price}
                </p>
            </div>
        </div>
    )
}

export default FoodItem;