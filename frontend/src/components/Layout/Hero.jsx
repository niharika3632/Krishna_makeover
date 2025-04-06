import React from 'react'
import banner from "../../assets/banner.png"
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
      <section
          className='relative'
      >
          <img src={banner} alt='Banner'
              className='w-full h-[300px] md:h-[600px] lg:h-[650px] object-cover'
          />
          <div className='absolute inset-0 bg-black bg-opacity-0 flex items-center justify-left'>
              <div className='text-center text-white p-6'>
                  <h1 className="text-4xl md:text-9xl ml-10 font-bold tracking-tighter uppercase mb-4">
                      Beauty & Spa
                  </h1>
                  <p className='text-sm tracking-tighter md:text-lg mb-6'>
                      Explore our best services here
                  </p>
                  <Link to="#" className='bg-white text-gray-950 px-6 py-2 rounded-sm text-lg'>
                      Check Now
                  </Link>
              </div>
          </div>
    </section>
  )
}

export default Hero