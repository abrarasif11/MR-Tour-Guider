import React from 'react';
import { useLoaderData } from 'react-router-dom';
import MyServices from '../MyServices/MyServices';
import Review from '../Review/Review';

const SeeDetails = () => {
    const details = useLoaderData();
    return (
        <div>
            {
                details.map(detail => 
                <MyServices
                key={detail._id}
                detail={detail}
                >
                </MyServices>)
            }
            
        </div>
    );
};

export default SeeDetails;