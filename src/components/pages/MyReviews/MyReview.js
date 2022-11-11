import React, { useEffect, useState } from 'react';
import { FaPen, FaTrash } from 'react-icons/fa';

const MyReview = ({ review, handleDelete, handleUpdate }) => {
    const [myReview, setmyReview] = useState({})
    useEffect(() => {
        fetch(`https://m-photo-server.vercel.app/my_reviews/${review?._id}`)
            .then(res => res.json())
            .then(data => setmyReview(data));
    }, [review._id])
    const handleEdit = (event) => {
        const editedText = event.target.value;
        handleUpdate(editedText)
    }
    return (
        <div>
            <div className='w-11/12 md:w-3/4 mx-auto my-4'>
                <div className="w-full">
                    <div className="card w-full shadow-xl bg-neutral py-8 lg:p-8">
                        <div className="flex items-center space-x-3 px-8">
                            <div className="avatar">
                                <div className="mask mask-squircle w-12 h-12">
                                    <img src={review?.photoUrl} alt="" />
                                </div>
                            </div>
                            <div>
                                <div className="font-bold">{review?.user}</div>
                                <div className="text-sm opacity-50">{review?.email}</div>
                            </div>
                        </div>
                        <div className="card-body">
                            <h2 className="card-title">Review</h2>
                            <p>{review.userReview}</p>
                        </div>
                        <div className='flex justify-evenly'>
                            <label htmlFor="my-modal" className="btn btn-outline btn-warning"><FaPen className='mr-1'></FaPen> Edit</label>
                            <button className="btn btn-outline btn-error" onClick={() => handleDelete(review._id)}><FaTrash className='mr-1'></FaTrash> Delete</button>
                        </div>
                        <input type="checkbox" id="my-modal" className="modal-toggle" />
                        <div className="modal">
                            <div className="modal-box">
                                <h3 className="font-bold text-lg mb-4">Your Review</h3>
                                <textarea className="textarea textarea-bordered h-24 w-full" name='userReview' defaultValue={myReview?.userReview}></textarea>
                                <div className="modal-action">
                                    <label onClick={handleEdit} htmlFor="my-modal" className="btn btn-outline btn-primary">Done</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyReview;