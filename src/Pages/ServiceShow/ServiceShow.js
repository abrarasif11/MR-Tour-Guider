import React from 'react';

const ServiceShow = ({service}) => {
    return (
        <div className="max-w-xs  mb-10 rounded-md shadow-md font-poppins bg-slate-200 dark:text-gray-100">
        <img src={service.img} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
        <div className="flex flex-col justify-between p-6 space-y-8">
            <div className="space-y-2">
                <h2 className="text-3xl font-semibold tracking-wide">{service.name}</h2>
                <p className='text-2xl font-semibold'>Price : {service.price}</p>
                <p className="dark:text-gray-100">{service.details.slice(0,100)}...</p>
            </div>
            <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-black text-green-700">See Details</button>
        </div>
    </div>
    );
};

export default ServiceShow;