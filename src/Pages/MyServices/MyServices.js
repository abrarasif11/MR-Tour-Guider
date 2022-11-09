import React from 'react';
import Review from '../Review/Review';

const MyServices = ({detail}) => {
    return (
        <div className="container font-poppins max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
            <a rel="noopener noreferrer" href="#" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-900">
			<img src={detail.img} alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" />
			<div className="p-6 space-y-2 lg:col-span-5">
				<h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">{detail.name}</h3>
				<span className="text-xl dark:text-gray-400">Price : {detail.price}</span>
				<p>{detail.details}</p>
			</div>
		</a>
        <Review></Review>
        </div>
    );
};

export default MyServices;