import React from 'react';
import imageSrc from '../assets/about.jpg'; // Replace './yourImage.jpg' with the actual path to your image file

function About() {
    return (
        <div className='mt-16 ml-8 mr-8 animate-fade-right animate-once animate-ease-linear'>
            <h1 className="mb-8 underline underline-offset-8 text-8xl font-extrabold leading-none tracking-tight text-[#666666] md:text-5xl lg:text-8xl">About <span className="text-[#b2ccf2] dark:text-[#b2ccf2]">Us</span> </h1><br />
            <div className='flex items-center space-x-4'>
                
                <div className='w-2/5'>
                    <div className='text-xs font-normal lg:text-base'>
                        <p>The website is a platform designed for individuals involved in the agricultural sector, allowing users to buy and sell crops. Upon logging in or registering, users gain access to features tailored to their needs.</p><br />
                        <p>For sellers, the platform provides the option to list crops for sale, where they can input relevant details such as crop type, quantity, quality, and pricing. Once listed, buyers have the opportunity to place bids on the crops they're interested in purchasing.</p><br />
                        <p>After receiving bids, the seller can review the offers and select the buyer they prefer to sell their product to. This process allows for negotiation and ensures that both parties are satisfied with the transaction.</p><br />
                        <p>Overall, the website facilitates a streamlined and transparent process for trading crops, connecting sellers with potential buyers and enabling efficient transactions within the agricultural community.</p><br />
                    </div>
                </div>

                <div className="w-3/5 flex justify-center">
                    <img src={imageSrc} alt="Image" className="max-w-full h-auto" />
                </div>

            </div>
        </div>
    );
}

export default About;
