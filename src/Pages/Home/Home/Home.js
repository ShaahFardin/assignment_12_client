import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Card from '../../../Components/Card/Card';
import SearchForm from '../../../Components/Form/SearchForm';
import Header from '../../Shared/Header/Header';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import Volkswagen from '../Categories/Volkswagen';

const Home = () => {

    const [loading, setLoading] = useState(false);
    const [volkswagens, setVolkswagen] = useState([]);
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
                    <SearchForm />
                </div>
                <div className='flex-1'>
                    <div>Category Card</div>
                    <div>
                        <div className='flex justify-between px-4'>
                            <p className='text-lg font-semibold'>Volkswagens</p>
                            <Link>See all</Link>
                        </div>
                        <div className='flex flex-wrap gap-3'>
                            {
                                volkswagens.slice(0, 3).map((Volkswagen, i) => <Card key={i} Volkswagen={Volkswagen}></Card>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;