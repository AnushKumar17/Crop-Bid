import React from 'react';
import videobg from '../assets/bgvid.mp4';

function Video() {
  const videoStyle = {
    height: '70vh', 
    width: '100%', // Take up full width
    objectFit: 'cover', // Ensure the video covers the entire container
  };

  return (
    <div className='opacity-50 '>
      <video src={videobg} autoPlay loop muted style={videoStyle} />
      {/* <video src={videobg} style={videoStyle} /> */}
    </div>
  );
}

export default Video;
