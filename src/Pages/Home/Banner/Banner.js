import React from 'react';
import HomeBanner from '../../../../src/Assets/banner-image.jpg'

const Banner = () => {
    return (
        <div className="hero h-[600px]" style={{ backgroundImage: `url(${HomeBanner})` }}>
            <div className="hero-overlay bg-opacity-70"></div>
            <div className="hero-content text-center text-base-100">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Find your loved car</h1>
                    <p className="mb-5">We know how hard it is to find your
                        dream car in an affordable price. Thats why we are here to help you
                        find your next car in an super affordable price.
                    </p>
                    <button class="px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                        Get Started
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Banner;