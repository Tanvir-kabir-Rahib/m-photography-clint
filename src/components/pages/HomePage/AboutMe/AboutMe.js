import React from 'react';
import mohammad from '../../../../assets/pictures/mohammad.jpeg'

const AboutMe = () => {
    return (
        <div className='my-24'>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={mohammad} className="max-w-sm rounded-lg shadow-2xl" alt='' />
                    <div className='lg:ml-10'>
                        <h1 className="text-xl font-bold text-stone-400">About Me</h1>
                        <h1 className="text-4xl font-bold font-mono my-6">We Like What We Do</h1>
                        <p className="text-stone-400 font-extralight my-6">The long story short is that I'm just a guy lucky enough to pick up a camera. How that went down is quite a tale, and the fact that I get to do what I love every day is something that I'll always cherish and be forever grateful for.</p>
                        <hr className='my-6' />
                        <div className='lg:flex my-6'>
                            <div className='mb-12 lg:mb-0 lg:mr-32'>
                                <h2 className='text-stone-400 text-3xl font-semibold font-mono my-3'>services</h2>
                                <p className='text-stone-400 font-mono my-2'>Fashion Photography</p>
                                <p className='text-stone-400 font-mono my-2'>Wedding Photography</p>
                                <p className='text-stone-400 font-mono my-2'>Commercial Shooting</p>
                                <p className='text-stone-400 font-mono my-2'>Photo Studio</p>
                            </div>
                            <div>
                                <h2 className='text-stone-400 text-3xl font-semibold font-mono my-3'>awards</h2>
                                <p className='text-stone-400 font-mono my-2'>The National Geographic Photo Contest</p>
                                <p className='text-stone-400 font-mono my-2'>Sony World Photography</p>
                                <p className='text-stone-400 font-mono my-2'>Monovisions Photography</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;