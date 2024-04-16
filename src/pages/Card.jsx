import React from 'react';

const Card = ({ title, description, imageUrl }) => {
  return (
    <div className="w-2/5 rounded overflow-hidden shadow-lg bg-[#b2ccf2] transition duration-300 ease-in-out transform hover:scale-105">
      <img className="w-full h-48 object-cover" src={imageUrl} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-[#666666]">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
    </div>
  );
};

export default Card;
