import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    return (
        <div className='flex align-middle justify-center'>
            <div className="card w-11/12 md:w-96 lg:w-96 bg-neutral">
                <figure><PhotoProvider>
                    <div className="w-full">
                        <PhotoView src={service.img_url}>
                            <img className='w-full h-64' src={service.img_url} alt="" />
                        </PhotoView>

                    </div>
                </PhotoProvider></figure>
                <div className="card-body">
                    <h2 className="card-title">{service.title}</h2>
                    <p>Price: <span className='font-semibold text-amber-500'>${service.price}</span></p>
                    <p>{service.details.slice(0, 100)}...</p>
                    <div className="card-actions justify-end">
                        <Link to={`/services/${service._id}`}><button className="btn btn-primary">See Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
