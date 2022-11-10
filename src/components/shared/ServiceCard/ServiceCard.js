import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const ServiceCard = ({ service }) => {
    return (
        <div className='flex align-middle justify-center'>
            <div className="card w-96 bg-neutral">
                <figure><PhotoProvider>
                    <div className="foo">
                        <PhotoView src={service.img_url}>
                            <img src={service.img_url} alt="" />
                        </PhotoView>
                    </div>
                </PhotoProvider></figure>
                <div className="card-body">
                    <h2 className="card-title">{service.title}</h2>
                    <p>{service.details.slice(0, 100)}...</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">See Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
