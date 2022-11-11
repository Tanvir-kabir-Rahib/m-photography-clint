import React from 'react';

const Review = ({review}) => {
    return (
        <div className='w-11/12 md:w-3/4 mx-auto my-12'>
            <div className="w-full">
                <div className="card w-full shadow-xl bg-neutral py-8 lg:p-8">
                    <div className="flex items-center space-x-3 px-8">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={review?.photoURL} alt="" />
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">{review?.displayName}</div>
                            <div className="text-sm opacity-50">{review?.email}</div>
                        </div>
                    </div>
                    <div className="card-body">
                        <h2 className="card-title">Review</h2>
                        <p>{review.des}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;