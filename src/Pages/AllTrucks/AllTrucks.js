import React, { useEffect, useState } from 'react';
import BookingModal from '../../Components/BookingModal/BookingModal';
import AllNissanCard from '../../Components/Card/AllNissanCard';
import NissanCard from '../../Components/Card/NissanCard';

const AllTrucks = () => {

    const [nissans, setNissan] = useState([]);
    const [bookCar, setBookCar] = useState(null);
    
    useEffect(() => {
        fetch('https://server-ivory-alpha.vercel.app/allcars/Nissan')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setNissan(data)
            })
    }, [])

    return (
        <div className='container mx-auto'>
            <h1 className='text-xl mt-5 text-start font-medium lg:px-48'>Volkswagen</h1>
            <div className='grid grid-cols-1 gap-3 mb-20'>
                {
                    nissans.map((nissan, i) =>
                        <AllNissanCard
                            key={i}
                            setBookCar={setBookCar} nissan={nissan}>
                        </AllNissanCard>)
                }
            </div>
            {
                bookCar &&
                <BookingModal
                    setBookCar={setBookCar} bookCar={bookCar}>
                </BookingModal>
            }
        </div>
    );
};

export default AllTrucks;