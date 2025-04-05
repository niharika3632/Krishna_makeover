import React from 'react'
import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <footer className='border-t py-12'>
            <div className='container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4 lg:px-0'>
                <div>
                    <h3
                        className='text-lg text-gray-800 mb-4'
                    >
                        Subscribe us
                    </h3>
                    <p
                        className='text-gray-500 mb-4'
                    >
                        Be the first one to hear about the exclusive offers, new services and new accessories
                    </p>
                    <p
                        className='font-medium text-md text-gray-400'
                    >
                        Sign up and get 10% off on your first service
                    </p>

                    {/* newsletter form */}
                    <form className='flex'>
                        <input type="email" placeholder='Enter your Email' className='p-3 w-full text-sm border-t border-l border-b border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all' required />
                        <button
                            type='submit' className='bg-black text-white px-6 py-3 text-sm rounded-r-md hover:bg-gray-800 transition-all'
                        >
                            SUBSCRIBE
                        </button>
                    </form>
                </div>

                {/* shop links */}
                <div>
                    <h3 className='text-lg text-gray-800 mb-4'>Services</h3>
                    <ul className='space-y-2 text-gray-600'>
                        <li>
                            <Link to="#" className="hover:text-gray-500 transition-colors" >
                                Facials
                            </Link>
                        </li>
                        <li>
                            <Link to="#" className="hover:text-gray-500 transition-colors" >
                                Make Ups
                            </Link>
                        </li>
                        <li>
                            <Link to="#" className="hover:text-gray-500 transition-colors" >
                                Hair Cuts
                            </Link>
                        </li>
                        <li>
                            <Link to="#" className="hover:text-gray-500 transition-colors" >
                                Hair Styles
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* support link */}
                <div>
                    <h3 className='text-lg text-gray-800 mb-4'>Support</h3>
                    <ul className='space-y-2 text-gray-600'>
                        <li>
                            <Link to="#" className="hover:text-gray-500 transition-colors" >
                                Contact Us
                            </Link>
                        </li>
                        <li>
                            <Link to="#" className="hover:text-gray-500 transition-colors" >
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link to="#" className="hover:text-gray-500 transition-colors" >
                                FAQs
                            </Link>
                        </li>
                    </ul>
                </div>

            </div>
        </footer>
    )
}

export default Footer