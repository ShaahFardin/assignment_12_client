import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51M64i1FNcPXnuM7o9o9MJ6wCUbktayULLkrKeJTQTR7zdYbBHv5RfnrkAKGeE1W7sGGZ32J70isXZmL7edEzgDT100W5k21XJM');

const Payment = () => {

    const booking = useLoaderData();
    const navigation = useNavigation();
    const { carName, price } = booking
    if (navigation.state === 'loading') {
        return <progress className="progress w-56"></progress>
    }

    return (
        <div>
            <h1 className='text-3xl tracking-wider font-semibold'>
                Payment for <span className='text-blue-500'>{carName}</span>
            </h1>
            <p className='my-5'>
                Please pay
                <span className='text-orange-500 ml-1 font-bold'>${price} </span >
                for your car <span className='text-orange-500'>{carName}</span>
            </p>
            <div className='w-96 mt-10'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm booking={booking} />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;