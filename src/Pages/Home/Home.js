import React from 'react';
import banner1 from '../assets/full-shot-travel-concept-with-landmarks_23-2149153258.webp';
import banner2 from '../assets/full-shot-woman-taking-selfie_23-2149153257.webp';
import banner3 from '../assets/travel-concept-with-landmarks_23-2149153256.webp';

const Home = () => {
    return (
        <div className="carousel mx-auto rounded mt-10 mb-10 w-3/4">
  <div id="slide1" className="carousel-item relative w-full">
    <img src={banner3}  />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src={banner1} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src={banner2} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
</div>
    );
};

export default Home;