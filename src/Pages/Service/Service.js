import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceShow from '../ServiceShow/ServiceShow';

const Service = () => {
    const services = useLoaderData();
    return (
        <div>
            <div className='grid sm:grid-cols-3 gap-3 ml-20  mt-10'>
            {
                services.map(service => 
                <ServiceShow
                key={service._id}
                service={service}
                >
                </ServiceShow>)
            }
            </div>
        </div>
    );
};

export default Service;