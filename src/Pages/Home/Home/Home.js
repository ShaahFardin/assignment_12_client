import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AdvertiseProduct from '../../../Components/Card/AdvertisedProduct/AdvertiseProduct';
import BuggatiCard from '../../../Components/Card/BuggatiCard';
import Card from '../../../Components/Card/Card';
import SearchForm from '../../../Components/Form/SearchForm';
import Header from '../../Shared/Header/Header';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import Volkswagen from '../Categories/Volkswagen';

const Home = () => {

    const [loading, setLoading] = useState(false);
    // const [buggattis, setBuggattis] = useState([]);
    // const [volkswagens, setVolkswagen] = useState([]);




    const { data: volkswagens = [], isLoading } = useQuery({
        queryKey: ['volkswagen'],
        queryFn: () => fetch('http://localhost:5000/allcars/Volkswagen')
            .then(res => res.json())
    })

    const { data: buggattis = [] } = useQuery({
        queryKey: ['buggatti'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/allcars/Bugatti');
            const data = await res.json();
            return data
        }
    })


    // addvertised product
    const { data: addverisedProduct = [] } = useQuery({
        queryKey: ['addverisedProduct'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/addverisedProduct');
            const data = await res.json();
            return data
        }
    })

    // useEffect(() => {
    //     fetch('http://localhost:5000/category/volkswagen')
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //             setVolkswagen(data)
    //         })
    // },[])

    // useEffect(() => {
    //     fetch('http://localhost:5000/category/buggatti')
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //             setBuggattis(data)
    //         })
    // }, [])




    return (
        <div >
            <Banner></Banner>
            <div className='md:flex justify-center gap-10 md:px-10 lg:px-20 mt-20'>
                <div >
                    <SearchForm />
                </div>
                <div className='flex-1'>

                    <div>
                        {/* volskwagen car category */}
                        <div className='flex justify-between px-4'>
                            <p className='text-lg font-semibold'>Volkswagens</p>
                            <Link to='/category/volkswagen'>See all</Link>
                        </div>
                        <div className='flex flex-wrap gap-3'>
                            {
                                volkswagens.slice(0, 3).map((Volkswagen, i) => <Card key={i} Volkswagen={Volkswagen}></Card>)
                            }
                        </div>
                    </div>

                    {/* Buggati car category */}
                    <div className='mt-20'>
                        <div className='flex justify-between px-4'>
                            <p className='text-lg font-semibold'>Buggati</p>
                            <Link to='/category/buggatti'>See all</Link>
                        </div>
                        <div className='flex flex-wrap gap-3'>
                            {
                                buggattis.slice(0, 3).map((buggatti, i) =>
                                    <BuggatiCard buggatti={buggatti} key={i}></BuggatiCard>)
                            }
                        </div>
                    </div>
                    <div className='mt-20'>
                        <div className='flex justify-between px-4'>
                            <p className='text-lg font-semibold'>Advertised Product</p>
                            <Link to='/category/buggatti'></Link>
                        </div>
                        <div className='flex flex-wrap gap-3'>
                            {
                                addverisedProduct.map(product => 
                                <AdvertiseProduct key={product._id} product={product}>
                                    
                                </AdvertiseProduct>)
                            }
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Home;