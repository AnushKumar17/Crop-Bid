import React from 'react'
import Card from './Card'
const img1 = 'https://drive.google.com/thumbnail?id=1bYOhTq8KtS50IAlWzDgpqDHLSSj6JrAE';
const img2 = 'https://drive.google.com/thumbnail?id=1Zq0E4Y-LOaoUiyGczRHsauejJ5Dyqxzi';
const img3 = 'https://drive.google.com/thumbnail?id=1SufKBd2V2Tm6WBDdnQDMB1oa7UgOpRaz';


function Section() {
  return (
    <div>

      <div className='mt-16 ml-8 mr-8 animate-fade-right animate-once animate-ease-linear'>
        <h1 className=" underline underline-offset-8 text-7xl font-extrabold leading-none tracking-tight text-[#666666] md:text-5xl lg:text-6xl">How to <span className="text-[#b2ccf2] dark:text-[#b2ccf2]">Use</span> </h1><br />
      </div>

      <div className='m-4 space-x-5 flex mt-10'>
        <Card
          title="Step 1"
          description="Firstly you have to login/register yourself and fill all your details that are relevant."
          imageUrl={img1}
        />
        <Card
          title="Step 2"
          description="Now, you have to list the product you want to buy/sell with all the neccessary details."
          imageUrl={img2}
        />
        <Card
          title="Step 3"
          description="Lastly, you have to decide if the sellers/buyers terms satisfies you. If so, you can buy/sell."
          imageUrl={img3}
        />
      </div>
    </div>
  )
}

export default Section