import React from 'react';

const Banner = ({ banner }) => {
    return (
        <div id={`slide${banner.banner_no}`} className="carousel-item relative w-full">
            <img src={banner.banner_url} className="w-full rounded-3xl" alt=''/>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href={`#slide${banner.next}`} className="btn btn-circle">❮</a>
                <a href={`#slide${banner.pre}`} className="btn btn-circle">❯</a>
            </div>
        </div>
    );
};

export default Banner;