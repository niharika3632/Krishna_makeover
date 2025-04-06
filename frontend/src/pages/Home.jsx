import React from 'react'
import Hero from '../components/Layout/Hero'
import ServiceCollection from '../components/Products/ServiceCollection'
import Offers from '../components/Products/Offers'
import ServiceDetails from '../components/Products/ServiceDetails'

const Home = () => {
    return (
        <div>
            <Hero />
            <ServiceCollection />
            <Offers />

            {/* Best Services */}
            <h2 className='text-3xl font-heading font-bold text-center mb-4'>
                Customer's Popular Choice
            </h2>
            <ServiceDetails/>
        </div>
    )
}

export default Home