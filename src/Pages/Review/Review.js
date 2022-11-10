import React, { useContext, useEffect, useState } from 'react';
import useTitle from '../../useTitle';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Reviews from '../Reviews/Reviews';
const Review = () => {
    useTitle("Review");
    const [form, setForm] = useState({});
    const [reviews ,setReviews]= useState([]);
    const { user } = useContext(AuthContext);
    console.log(user); 
    useEffect(()=>{
        fetch('https://server-assignment-11-teal.vercel.app/myreviews')
        .then(res=>res.json())
        .then(data=>setReviews(data))
		console.log(reviews);
    },[])
    const handleReviewSubmit = event => {
        event.preventDefault();
        console.log(form);
        if (user?.uid) {
            fetch("https://server-assignment-11-teal.vercel.app/myreviews", {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(form),
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    if (data.acknowledged) {
                        alert("Review Added Successfully");
                    }
                })
                .catch((err) => console.log(err));
        } else {
            alert("Please login first to provide review!");
        }
    }
    const handleInputBlur = event => {
        const value = event.target.value;
        const field = event.target.name;
        const newForm = { ...form }
        newForm[field] = value;
        setForm(newForm)
    }
    return (
        <div>

            <div className='grid grid-cols-2 mt-10 pt-10 mb-10'>
                <form onSubmit={handleReviewSubmit} className="flex flex-col max-w-xl p-8 shadow-sm rounded-xl lg:p-12 bg-base-200 dark:text-gray-100">
                    <div className="flex flex-col items-center w-full">
                        <h2 className="text-3xl font-semibold text-center text-black">Your Review!</h2>
                        <div className="flex flex-col items-center py-6 space-y-3">
                            <span className="text-center text-black">How was your experience?</span>
                        </div>
                        <div className='w-full pb-2'>
                            <input onChange={handleInputBlur} type="email" name="email" id="email" placeholder="email" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100" defaultValue={user?.email} />
                        </div>
                        <div className='w-full pb-2'>

                            <input onChange={handleInputBlur} type="name" name="name" id="name" placeholder="name" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100" />
                        </div>
                        <div className="flex flex-col w-full">
                            <textarea onChange={handleInputBlur} rows="3" type="description" id="description" name="description" placeholder="Message..." className="p-4 rounded-md resize-none dark:text-gray-100 dark:bg-gray-900"></textarea>
                            <button type="submit" className="py-4 my-8 font-semibold rounded-md dark:text-gray-900 bg-white">Leave Review</button>
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <a rel="noopener noreferrer" href="#" className="text-sm bg-black px-3 py-3 rounded-lg text-gray-400">Maybe later</a>
                    </div>
                </form>
                <div className="  w-full max-w-lg p-6 mx-auto rounded-md  bg-base-200 dark:text-gray-100">
                         <h1 className='text-black font-bold text-4xl text-center'>Reviews</h1>
                    {
                      reviews.map(review => <Reviews
					  key={review._id}
					  review={review}
					  >
					  </Reviews>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Review;