import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const serviceData = useLoaderData()
    return (
        <div className='my-24'>
            <div className="card w-11/12 lg:w-3/4 lg:card-side bg-neutral shadow-xl mx-auto p-16">
                <figure className='w-1/2'><img src={serviceData.img_url} alt="Album" /></figure>
                <div className="card-body w-1/2">
                    <h2 className="card-title text-4xl mb-3">{serviceData.title}</h2>
                    <p>Price: <span className='font-semibold text-amber-500'>${serviceData.price}</span></p>
                    <p>{serviceData.details}</p>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;