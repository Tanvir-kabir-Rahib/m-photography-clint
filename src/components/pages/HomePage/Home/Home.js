import React from 'react';
import AboutMe from '../AboutMe/AboutMe';
import Banners from '../Banners/Banners';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banners></Banners>
            <Services></Services>
            <AboutMe></AboutMe>
        </div>
    );
};

export default Home;