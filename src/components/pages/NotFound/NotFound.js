import React from 'react';
import { Link } from 'react-router-dom';
import img404 from '../../../assets/pictures/404-error-img4.png';
const NotFound = () => {
    return (
        <div className='my-12'>
            <div>
                <p className='text-center text-3xl md:text-5xl font-bold text-teal-500'>Page Not Found</p>
            </div>
            <div className='flex justify-center'>
                <img className='w-11/12 md:w-3/4 lg:w-1/2' src={img404} alt=''></img>
            </div>
            <div>
                <p className='text-center text-2xl md:text-5xl font-bold text-teal-500'>Return <Link to='/' className='btn btn-primary btn-link text-xl md:text-4xl font-bold'>Home</Link></p>
            </div>
        </div>
    );
};

export default NotFound;