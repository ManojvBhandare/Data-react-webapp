import React from 'react'
import Laptop from "../assets/laptop.jpg"

function Analytics() {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img src={Laptop} alt="/" className='w-[500px] mx-auto my-4'/>
            <div className='flec flex-col justify-center'>
                <p className='text-[#00df9a] font-bold'>DATA ANALYTICS DASHBOARD</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Data Analytics Centrally</h1>
                <p>
                Our Data Analytics Dashboard centralizes and streamlines analytics, empowering companies to leverage data for growth. Gain insights, make informed decisions,
                 and drive success with our powerful tools.
                </p>
                <button className="bg-[black] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-[#00df9a]">Get Started</button>
            </div>
         
        </div>

    </div>
  )
}

export default Analytics