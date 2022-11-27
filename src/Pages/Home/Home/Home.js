import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';
import AdvertiseProduct from '../../../Components/Card/AdvertisedProduct/AdvertiseProduct';
import BuggatiCard from '../../../Components/Card/BuggatiCard';
import Card from '../../../Components/Card/Card';
import NissanCard from '../../../Components/Card/NissanCard';
import SearchForm from '../../../Components/Form/SearchForm';
import Banner from '../Banner/Banner';

const Home = () => {

    const { data: volkswagens = [] } = useQuery({
        queryKey: ['volkswagen'],
        queryFn: () => fetch('https://server-ivory-alpha.vercel.app/allcars/Volkswagen')
            .then(res => res.json())
    })

    const { data: buggattis = [] } = useQuery({
        queryKey: ['buggatti'],
        queryFn: async () => {
            const res = await fetch('https://server-ivory-alpha.vercel.app/allcars/Bugatti');
            const data = await res.json();
            return data
        }
    })

    const { data: nissans = [] } = useQuery({
        queryKey: ['Nissan'],
        queryFn: async () => {
            const res = await fetch('https://server-ivory-alpha.vercel.app/allcars/Nissan');
            const data = await res.json();
            return data
        }
    })

    // addvertised product
    const { data: addverisedProduct = [] } = useQuery({
        queryKey: ['addverisedProduct'],
        queryFn: async () => {
            const res = await fetch('https://server-ivory-alpha.vercel.app/addverisedProduct');
            const data = await res.json();
            return data
        }
    })


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
                                volkswagens.slice(0, 3).map((Volkswagen, i) =>
                                 <Card key={i} Volkswagen={Volkswagen}></Card>)
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

                    {/* Nissan car category */}

                    <div className='mt-20'>
                        <div className='flex justify-between px-4'>
                            <p className='text-lg font-semibold'>Buggati</p>
                            <Link to='/category/nissan'>See all</Link>
                        </div>
                        <div className='flex flex-wrap gap-3'>
                            {
                                nissans.slice(0, 3).map((nissan, i) =>
                                    <NissanCard nissan={nissan} key={i}></NissanCard>)
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