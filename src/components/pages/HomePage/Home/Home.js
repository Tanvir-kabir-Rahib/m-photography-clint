import React from 'react';
import AboutMe from '../AboutMe/AboutMe';
import Banners from '../Banners/Banners';
import Gallery from '../Gallery/Gallery';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banners></Banners>
            <Services></Services>
            <AboutMe></AboutMe>
            <Gallery></Gallery>
        </div>
    );
};

export default Home;