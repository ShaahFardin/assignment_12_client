import React, { useEffect, useState } from 'react';
import BookingModal from '../../Components/BookingModal/BookingModal';
import AllBuggattiCard from '../../Components/Card/AllBuggattiCard';

const AllBuggatti = () => {

    const [buggattis, setBuggattis] = useState([]);
    const [bookCar, setBookCar] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/category/buggatti')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setBuggattis(data)
            })
    }, [])

    return (
        <div className='container mx-auto'>
            <h1 className='text-xl mt-5 text-start font-medium lg:px-48'>Volkswagen</h1>
            <div className='grid grid-cols-1 gap-3 mb-20'>
                {
                    buggattis.map((buggatti, i) =>
                         <AllBuggattiCard
                         key={i}
                         setBookCar={setBookCar}
                         buggatti={buggatti}>
                        
                         </AllBuggattiCard>)
                }
            </div>
            {
                bookCar &&
                <BookingModal
                    setBookCar={setBookCar} bookCar={bookCar}
                ></BookingModal>
            }
        </div>
    );
};

export default AllBuggatti;