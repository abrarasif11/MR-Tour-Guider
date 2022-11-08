import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomeData = ({homeService}) => {
    
    return (
        <div className="max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
	<img src={homeService.img} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
	<div className="flex flex-col justify-between p-6 space-y-8">
		<div className="space-y-2">
			<h2 className="text-3xl font-semibold tracking-wide">{homeService.name}</h2>
			<p className="dark:text-gray-100 text-3xl font-semibold">Price : {homeService.price}</p>
            <p>{homeService.details.slice(0,100)}...</p>
		</div>
		<button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-black text-green-700">See Details</button>
	</div>
</div>
   
    );
};

export default HomeData;