import React from 'react';
import HomeBanner from '../../../../src/Assets/banner-image.jpg'

const Banner = () => {
    return (
        <div className="hero h-[500px] mt-5" style={{ backgroundImage: `url(${HomeBanner})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-base-100">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Find your loved car</h1>
                    <p className="mb-5">We know how hard it is to find your
                    dream car in an affordable price. Thats why we are here to help you
                    find your next car in an super affordable price. 
                    </p>
                    <button className="btn btn-primary rounded-none text-pink-500">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;