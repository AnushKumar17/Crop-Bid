import React from 'react'
import imageSrc from '../assets/carousel5.jpg';

function Aim() {
  return (
    <div className='mt-20 ml-8 mr-8 animate-fade-right animate-once animate-ease-linear'>
            <h1 className="mb-8 underline underline-offset-8 text-8xl font-extrabold leading-none tracking-tight text-[#666666] md:text-5xl lg:text-8xl">Our <span className="text-[#b2ccf2] dark:text-[#b2ccf2]">Aim</span> </h1><br />
            <div className='flex items-center space-x-4'>
            
            <div className="w-3/5 flex justify-center">
                    <img src={imageSrc} alt="Image" className="max-w-full h-auto" />
                </div>

                <div className='w-2/5'>
                    <div className='text-xs font-normal lg:text-base'>
                        <p>CropBid is dedicated to empowering farmers through innovative technology. Our full-stack application, built on React.js, TailwindCSS, and Firebase, provides a seamless platform for farmers to connect with buyers and secure optimal prices for their crops.</p><br />
                        <p>With intuitive user interfaces designed specifically for farmers, CropBid aims to bridge the gap between traditional agriculture and modern technology. Our goal is simple: to increase farmer revenue by offering up to 20% higher prices for crops compared to conventional markets.</p><br />
                        <p>We understand the challenges faced by farmers in navigating complex market dynamics. That's why CropBid focuses on simplicity, transparency, and efficiency, ensuring a smooth and rewarding experience for all users.</p><br />
                        <p>Join us in our mission to transform the way farmers do business. Together, we can cultivate a brighter future for agriculture.</p><br />
                    </div>
                </div>

            </div>
        </div>
  )
}

export default Aim