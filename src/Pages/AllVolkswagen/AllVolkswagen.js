import React, { useEffect, useState } from 'react';
import Card from '../../Components/Card/Card';
import VolkswagenCard from '../../Components/Card/VolkswagenCard';

const AllVolkswagen = () => {

    const [volkswagens, setVolkswagen] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/category/volkswagen')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setVolkswagen(data)
            })
    }, [])

    return (
        <div className='container mx-auto'>
            <h1 className='text-xl mt-5 text-start font-medium lg:px-48'>Volkswagen</h1>
            <div className='grid grid-cols-1 gap-3 mb-20'>
                {
                    volkswagens.map((Volkswagen, i) => <VolkswagenCard Volkswagen={Volkswagen}></VolkswagenCard>)
                }
            </div>
        </div>
    );
};

export default AllVolkswagen;