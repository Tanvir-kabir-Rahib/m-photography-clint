import React, { useEffect, useState } from 'react';
import ServiceCard from '../../shared/ServiceCard/ServiceCard';

const AllServices = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://m-photo-server.vercel.app/all_services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='my-32'>
            <div className='text-center'>
                <p className='text-4xl font-bold my-2'>All of Our Services</p>
                <p className='font-semibold'>Explore our services and get the suitable service for you</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-12'>
                {
                    services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default AllServices;