import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';
import useTitle from '../../../useTitle/useTitle';
import MyReview from './MyReview';

const MyReviews = () => {
    useTitle('My Reviews')
    const { user, logOut } = useContext(AuthContext);
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch(`https://m-photo-server.vercel.app/reviews?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('jw-token')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    return logOut();
                }
                return res.json();
            })
            .then(data => {
                setReviews(data);
            })
    }, [user?.email, logOut])

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to delete the review');
        if (proceed) {
            fetch(`https://m-photo-server.vercel.app/reviews/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remaining = reviews.filter(rev => rev._id !== id);
                        setReviews(remaining);
                    }
                })
        }
    }

    const handleUpdate = (id, edited) => {
        fetch(`https://m-photo-server.vercel.app/reviews/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(edited)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    const remaining = reviews.filter(rev => rev._id !== id);
                    const edit = reviews.find(rev => rev._id === id);
                    const newReviews = [edit, ...remaining];
                    setReviews(newReviews);
                }
            })
    }

    return (
        <div className='my-12'>
            <h2 className='text-center text-bold text-5xl'>My Reviews</h2>
            <div className='my-24'>
                <h2 className='text-3xl font-bold text-center my-10'>User Reviews</h2>
                {
                    reviews.length === 0 ?
                        <h2 className='text-xl text-green-600 font-bold text-center my-10'>No Reviews</h2>
                        :
                        <>
                            {
                                reviews.map(review => <MyReview key={review._id} handleDelete={handleDelete} handleUpdate={handleUpdate} review={review}></MyReview>)
                            }
                        </>
                }
            </div>
        </div>
    );
};

export default MyReviews;