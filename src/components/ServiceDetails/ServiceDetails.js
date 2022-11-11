import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Review from './Review/Review';

const ServiceDetails = () => {
    const serviceData = useLoaderData()
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch(`https://m-photo-server.vercel.app/reviews/${serviceData._id}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [serviceData._id])
    return (
        <div className='my-24'>
            <div className="card w-11/12 lg:w-3/4 lg:card-side bg-neutral shadow-xl mx-auto py-16 lg:p-16 my-12">
                <figure className='lg:w-1/2'><img src={serviceData.img_url} alt="Album" /></figure>
                <div className="card-body lg:w-1/2">
                    <h2 className="card-title text-4xl mb-3">{serviceData.title}</h2>
                    <p>Price: <span className='font-semibold text-amber-500'>${serviceData.price}</span></p>
                    <p>{serviceData.details}</p>
                </div>
            </div>
            <div className='my-24'>
                <h2 className='text-3xl font-bold text-center my-10'>User Reviews</h2>
                {
                    reviews.length === 0 ?
                        <h2 className='text-xl text-green-600 font-bold text-center my-10'>No Reviews</h2>
                        :
                        <>
                            {
                                reviews.map(review => <Review key={review._id} review={review}></Review>)
                            }
                        </>
                }
            </div>
            <div className='w-11/12 lg:w-3/4 my-12 mx-auto'>
                <div className="card-actions justify-center">
                    <button className="btn btn-primary px-12 font-bold">Add Review</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;