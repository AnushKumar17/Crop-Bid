import React, { useState } from 'react';
import Navbar from './Navbar'
import Footer from './Footer'
import '../css/sell.css'

function Sell() {

  const [product, setProduct] = useState('');
  const [quality, setQuality] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log({
      product,
      quality,
      description,
      location,
      quantity,
      price,
      phoneNumber
    });
  };

  return (
    <>
      <Navbar />
      <div className='bg-white'>

        <form class="w-full lg:w-4/5 max-w-md mx-auto p-4 bg-white rounded-lg  flex flex-wrap justify-center" onSubmit={handleSubmit}>

          <div class="w-full md:w-1/2 mb-4 md:pr-2">
            <label class="block">What are you selling?</label>
            <input class="w-full px-4 py-2 border border-black rounded" type="text" id="product" value={product} onChange={(e) => setProduct(e.target.value)} />
          </div>

          <div class="w-full md:w-1/2 mb-4 md:pl-2">
            <label class="block">Location</label>
            <input class="w-full px-4 py-2 border border-black rounded" type="text" id="location" value={location} onChange={(e) => setLocation(e.target.value)} />
          </div>

          <div class="w-full md:w-1/2 mb-4 md:pr-2">
            <label class="block">Quality</label>
            <select class="w-full px-4 py-2 border border-black rounded" id="quality" value={quality} onChange={(e) => setQuality(e.target.value)}>
              <option value="">Select</option>
              <option value="High Quality">High Quality</option>
              <option value="Excellent">Excellent</option>
              <option value="Very Good">Very Good</option>
              <option value="Good">Good</option>
              <option value="Fair">Fair</option>
              <option value="Poor">Poor</option>
            </select>
          </div>

          <div class="w-full md:w-1/2 mb-4 md:pl-2">
            <label class="block">Quantity</label>
            <input class="w-full px-4 py-2 border border-black rounded" type="number" id="quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
          </div>

          <div class="w-full mb-4">
            <label class="block">Description</label>
            <textarea class="w-full px-4 py-2 border border-black rounded" id="description" value={description} onChange={(e) => setDescription(e.target.value)} />
          </div>

          <div class="w-full mb-4">
            <label class="block">Price</label>
            <input class="w-full px-4 py-2 border border-black rounded" type="number" id="price" value={price} onChange={(e) => setPrice(e.target.value)} />
          </div>

          <div class="w-full mb-4">
            <label class="block">Phone Number</label>
            <input class="w-full px-4 py-2 border border-black rounded" type="text" id="phoneNumber" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
          </div>

          <button type="submit">Submit</button>
        </form>


      </div>
      <Footer />
    </>
  )
}

export default Sell

