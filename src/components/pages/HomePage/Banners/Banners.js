import React, { useEffect, useState } from 'react';
import Banner from './Banner/Banner';

const Banners = () => {
    const [banners, setBanners] = useState([]);
    useEffect( () => {
        fetch('https://m-photo-server.vercel.app/banners')
        .then(res => res.json())
        .then(data => setBanners(data))
    },[])
    return (
        <div className="carousel w-3/4 mx-auto my-24">
            {
            banners.map(banner => <Banner key={banner._id} banner={banner}></Banner>)
            }
        </div>
    );
};

export default Banners;