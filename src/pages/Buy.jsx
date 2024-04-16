import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import '../css/buy.css'
import SellingCard from './SellingCard'

function Buy() {

  const posts = [
    {
      title: "Organic Apples for Sale",
      place: "California",
      quality: "Organic",
      quantity: "1000 kg",
      description: "Fresh organic apples harvested from our orchard. No pesticides used.",
      price: "$3 per kg",
      number: "555-111-2222"
    },
    {
      title: "Fresh Tomatoes from Farm",
      place: "Texas",
      quality: "Farm Fresh",
      quantity: "500 kg",
      description: "Plump and juicy tomatoes grown using sustainable farming practices.",
      price: "$2 per kg",
      number: "555-333-4444"
    },
    {
      title: "Organic Wheat Grain",
      place: "Kansas",
      quality: "Organic",
      quantity: "2000 kg",
      description: "High-quality organic wheat grain suitable for making flour.",
      price: "$1.5 per kg",
      number: "555-555-6666"
    },
    {
      title: "Freshly Picked Strawberries",
      place: "Florida",
      quality: "Fresh",
      quantity: "300 kg",
      description: "Sweet and succulent strawberries freshly picked from our farm.",
      price: "$4 per kg",
      number: "555-777-8888"
    },
    {
      title: "Organic Corn Harvest",
      place: "Iowa",
      quality: "Organic",
      quantity: "1500 kg",
      description: "Organic corn harvested from our fields, perfect for animal feed or human consumption.",
      price: "$2.5 per kg",
      number: "555-999-0000"
    }
  ];

  return (
    <>
      <Navbar />
      <div>
        {posts.map((post) => (
          <SellingCard post={post} />
        ))}
      </div>
      <Footer />
    </>
  )
}

export default Buy