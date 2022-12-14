import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link, useNavigate } from 'react-router-dom';

const ServiceShow = ({service}) => {
      
      
    return (
        <div className="max-w-xs  mb-10 rounded-md shadow-md font-poppins bg-slate-200 dark:text-gray-100">
       <PhotoProvider speed={() => 800}
        easing={(type) =>
          type === 2
            ? "cubic-bezier(0.36, 0, 0.66, -0.56)"
            : "cubic-bezier(0.34, 1.56, 0.64, 1)"
        }><figure><PhotoView style={{ objectFit: "cover" }} src={service.img}><img src={service.img} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" /></PhotoView></figure></PhotoProvider>
        <div className="flex flex-col justify-between p-6 space-y-8">
            <div className="space-y-2">
                <h2 className="text-3xl font-semibold tracking-wide">{service.name}</h2>
                <p className='text-2xl font-semibold'>Price : {service.price}</p>
                <p className="dark:text-gray-100">{service.details.slice(0,100)}...</p>
            </div>
            <Link to={`/services/${service._id}`}>
            <button  type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-black text-green-700">See Details</button>
           </Link>
            
        </div>
    </div>
    );
};

export default ServiceShow;