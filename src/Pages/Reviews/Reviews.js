import React, { useEffect, useState } from 'react';


const Reviews = ({ review }) => {
    const { name, description, _id } = review;
    const [displayUser, setDisplayUser] = useState();
    const [reviews ,setReviews]= useState([]);
    console.log(reviews);
    useEffect(()=>{
        fetch('https://server-assignment-11-teal.vercel.app/myreviews')
        .then(res=>res.json())
        .then(data=>setReviews(data))
    },[])
    return (

        <div className="container mb-10 flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-gray-700 bg-white text-black">
            <div className="flex justify-between p-4">
                <div className="flex space-x-4">

                    <div>
                        <h4 className="font-bold">{name}</h4>

                    </div>
                </div>
                <div className="flex items-center space-x-2 dark:text-yellow-500">

                    <span className="text-xl font-bold"><button >Delete</button></span>
                </div>
            </div>
            <div className="p-4 space-y-2 text-sm dark:text-gray-400">
                <p>{description}</p>
            </div>
        </div>

    );
};

export default Reviews;