import React from 'react'
import serviceC1 from "../../assets/serviceC1.jpg"
import serviceC2 from "../../assets/serviceC2.webp"
import { Link } from 'react-router-dom'


const ServiceCollection = () => {
    return (
        <section
            className='py-6 px-4 lg:px-0'
        >
            <div className='container mx-auto flex flex-col md:flex-row gap-8'>
                {/* facial */}
                <div className='relative flex-1'>
                    <img src={serviceC1} alt='facial'
                        className='w-[700px] h-[500px] object-cover' />
                    <div className='absolute bottom-8 left-8 bg-white bg-opacity-90 p-4'>
                        <h2
                            className='text-2xl font-bold text-gray-900 mb-3'
                        >
                            Facials
                        </h2>
                        <Link to="/collections/all?service=facial"
                            className='text-gray-900 underline'>
                            Check Now
                        </Link>
                    </div>
                </div>

                {/* Hair Cut */}
                <div className='relative flex-1'>
                    <img src={serviceC2} alt='facial'
                        className='w-[700px] h-[500px] object-cover' />
                    <div className='absolute bottom-8 left-8 bg-white bg-opacity-90 p-4'>
                        <h2
                            className='text-2xl font-bold text-gray-900 mb-3'
                        >
                            Hair Cuts
                        </h2>
                        <Link to="/collections/all?service=haircuts"
                            className='text-gray-900 underline'>
                            Check Now
                        </Link>
                    </div>
                </div>
            </div>

        </section >
    )
}

export default ServiceCollection