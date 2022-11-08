import React from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import banner1 from '../assets/full-shot-travel-concept-with-landmarks_23-2149153258.webp';
import banner2 from '../assets/full-shot-woman-taking-selfie_23-2149153257.webp';
import banner3 from '../assets/travel-concept-with-landmarks_23-2149153256.webp';
import HomeData from './HomeData/HomeData';

const Home = () => {
  const navigate = useNavigate();
    const handleTopics = () => {
      navigate("/topics");
    };
  const homeServices = useLoaderData();
    return (
      <div>
        <h1 className='font-poppins text-3xl mt-10 font-bold'>Welcome To , 
        <br />
        <span className='text-5xl text-green-700'>MR. Tour Guider</span></h1>
        <div className="carousel mx-auto rounded-xl mt-10 mb-10 w-3/4">
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
  <div className='mt-16 mb-16'>
    <h1 className='text-3xl font-poppins font-semibold'>
       <span>
    I am a <span className='text-green-700 text-4xl'>Professional Tourist Guide.</span> 
      </span>
      <br /> 
    <span>I have <span className='text-green-700 text-4xl'>Experience</span> guiding all over the world tourist places.</span>
    <br />
    <span>
    I do this very <span className='text-green-700 text-4xl'>Professionally</span>.
    </span>
    <br />
   <span>
   Below are some sample <span className='text-green-700 text-4xl'>Packages</span> of my tourist guide <span className='text-green-700 text-4xl'>Service.</span>
   </span>
    </h1>
  </div>
  <span>
    <button className='bg-green-700 px-3 py-3 pt-4 hover:bg-black hover:text-green-700 text-4xl font-poppins font-bold text-black rounded-lg mt-10'>Here Is My Best Combo Package</button>
  </span>
  <div className='grid sm:grid-cols-3 gap-3 ml-10 mt-10'>
  {
   homeServices.slice(3).map(homeService => <HomeData
   key={homeService._id}
    homeService={homeService}
   >  
   </HomeData>)
  }
  </div>
  <Link to='/services'>
  <button
        className="py-4 px-6 m-8 font-poppins text-xl text-black  font-medium rounded-lg bg-gradient-to-rounded-md bg-green-700
         hover:bg-black	 hover:text-green-700"
        onClick={handleTopics}
      >
        See All
      </button>
      </Link>
</div>
    );
};

export default Home;