import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useLoaderData, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import Review from './Review/Review';

const ServiceDetails = () => {
    const serviceData = useLoaderData()
    const location = useLocation()
    const { user } = useContext(AuthContext)
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch(`https://m-photo-server.vercel.app/reviews/${serviceData._id}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [serviceData._id])

    const handleReview = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = user?.email || 'unregistered';
        const photoUrl = form.photoURL.value;
        const userReview = form.userReview.value;
        const review = {
            serviceId: serviceData._id,
            user: name,
            email,
            photoUrl,
            userReview
        }

        fetch('https://m-photo-server.vercel.app/add_review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                if(data.acknowledged){
                    toast.success('Review Added successfully')
                    form.reset();
                    
                }
            })
            .catch(err => console.error(err));

    }
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
            <div className='w-11/12 lg:w-3/4 mb-12 mx-auto'>
                {
                    user?.email ?
                        <>
                            <form onSubmit={handleReview}>
                                <div className='block md:flex w-full justify-between'>
                                    <div className="form-control w-full md:w-1/2 mr-0 md:mr-2 lg:mr-4">
                                        <label className="label">
                                            <span className="label-text text-2xl">Name</span>
                                        </label>
                                        <input type="text" defaultValue={user?.displayName} name='name' placeholder="Photo Url" className="input input-bordered" />
                                    </div>
                                    <div className="form-control w-full md:w-1/2  ml-0 md:ml-2 lg:ml-4">
                                        <label className="label">
                                            <span className="label-text text-2xl">Email</span>
                                        </label>
                                        <input type="email" defaultValue={user?.email} name='email' placeholder="email" className="input input-bordered" readOnly />
                                    </div>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-2xl">Photo Url</span>
                                    </label>
                                    <input type="text" defaultValue={user?.photoURL} name='photoURL' placeholder="Photo Url" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                    <span className="label-text text-2xl">Your Review</span>
                                    </label>
                                    <textarea className="textarea textarea-bordered h-24" name='userReview' placeholder="Your Review"></textarea>
                                </div>
                                <div className="form-control my-12">
                                    <input className="btn btn-primary" type='submit'></input>
                                </div>
                            </form>
                        </>
                        :
                        <div className="card-actions justify-center">
                            <Link to='/login' state={{ from: location }} replace><button className="btn btn-primary px-12 font-bold">Please Login To Add Review</button></Link>
                        </div>
                }

            </div>
        </div >
    );
};

export default ServiceDetails;