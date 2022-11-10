import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from '../../../shared/ServiceCard/ServiceCard';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://m-photo-server.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='my-32'>
            <div className='text-center'>
                <p className='text-4xl font-bold my-2'>Our Services</p>
                <p className='font-semibold'>Explore our services and get the suitable service for you</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-12'>
                {
                    services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
            <div className='text-center'>
                <Link to="/services"><button className="btn btn-outline btn-primary text-lg px-12">See All</button></Link>
            </div>
        </div>
    );
};

export default Services;