import React, { useEffect, useState } from 'react';
import SearchForm from '../../../Components/Form/SearchForm';
import Header from '../../Shared/Header/Header';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import Volkswagen from '../Categories/Volkswagen';

const Home = () => {

    const [loading, setLoading] = useState(false);
    const [Volkswagens, setVolkswagen] = useState([]);
    useEffect(() => {
        fetch('volkswagon.json')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setVolkswagen(data)
            })
    })


    return (
        <div className=''>
            <Banner></Banner>
            <div className='md:flex justify-center gap-10 md:px-10 lg:px-20 mt-20'>
                <div >
                    <SearchForm/>
                </div>
                <div className='flex-1'>
                    <div>Category Card</div>
                    <div>Volkswagen card</div>
                </div>
            </div>
        </div>
    );
};

export default Home;