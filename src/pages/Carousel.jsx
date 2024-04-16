import React from "react";
import HoverCarousel from "hover-carousel";
const Image1 = 'https://drive.google.com/thumbnail?id=1XAjDC3FGFrz8_cVZx7vMipT5uzU-8vk1';
const Image2 = 'https://drive.google.com/thumbnail?id=1eR96i5F5ByLZeF96YDdMEUCAv8jjSrLC';
const Image3 = 'https://drive.google.com/thumbnail?id=1HRnPmd4TZUWiBvd7ptzkYydf8U3VPF_z';
const Image4 = 'https://drive.google.com/thumbnail?id=1RWCwNV8PkoLYm1aUWgLpr6TjT0q7VmbC';
const Image5 = 'https://drive.google.com/thumbnail?id=1WwG-LCu32jGRgaRReAv-Fd9VF0FqKNZo';
const Image6 = 'https://drive.google.com/thumbnail?id=16f103cF-PXnMqkxSNKzoZq8uGg6eZmhj';
const Image7 = 'https://drive.google.com/thumbnail?id=1QQll3nRlRFI-g1CviJaP15QOTYAM0eRt';
const Image8 = 'https://drive.google.com/thumbnail?id=1eb_0GkMKVza2oZP0gU162Xgs1e4KNS0Y';

const MyImageCarousel = () => {
  const images = [
    Image1,
    Image2,
    Image3,
    Image4,
    Image5,
    Image6,
    Image7,
    Image8
    // Add more image URLs here
  ];

  return (
    <div className="mt-16 mb-8">
      <HoverCarousel images={images} />
    </div>
  );
};

export default MyImageCarousel;