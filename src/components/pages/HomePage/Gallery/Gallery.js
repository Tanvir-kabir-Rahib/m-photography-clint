import React from 'react';
import img1 from '../../../../assets/pictures/gallery_img1.jpeg'
import img2 from '../../../../assets/pictures/gallery-img2.jpeg'
import img3 from '../../../../assets/pictures/gallery_img3.jpeg'
import img4 from '../../../../assets/pictures/gallery_img4.jpeg'

const Gallery = () => {
    return (
        <div className='my-24'>
            <h1 className='mt-12 mb-2 text-center text-4xl font-semibold'>Gallery</h1>
            <p className='text-center mb-12'>Expore some of our photos.</p>
            <div className='grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 p-8 md:p-12 lg:p-28'>
                <div className='col-span-2'><img className='w-full' src={img1} alt=""></img></div>
                <div><img className='w-full h-full' src={img2} alt=""></img></div>
                <div><img className='w-full h-full' src={img3} alt=""></img></div>
                <div className='col-span-2'><img className='w-full' src={img4} alt=""></img></div>
            </div>
        </div>
    );
};

export default Gallery;