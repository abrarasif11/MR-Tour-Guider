import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../useTitle';
import ServiceShow from '../ServiceShow/ServiceShow';

const Service = () => {
    useTitle("Services")
    const services = useLoaderData();
    return (
        <div>
            <div className='grid sm:grid-cols-3 gap-7 mx-12 mt-10'>
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