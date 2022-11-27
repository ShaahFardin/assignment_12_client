import React, { useEffect, useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import { useNavigate } from 'react-router-dom';

const CheckoutForm = ({ booking }) => {

    const [success, setSuccess] = useState('')
    const [clientSecret, setClientSecret] = useState("");
    const [transactionId, setTransactionId] = useState('');
    const [processing, setProcessing] = useState(false)
    const [cardError, setCardError] = useState('');
    const stripe = useStripe();
    const elements = useElements();
    const { price, email, carName, _id } = booking;


    useEffect(() => {
        fetch("https://server-ivory-alpha.vercel.app/create-payment-intent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                authorization: `bearer ${localStorage.getItem('carvanaToken')}`
            },
            body: JSON.stringify({ price }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, [price]);



    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log(error);
            setCardError(error)
        } else {
            setCardError('')

        }
        setSuccess('');
        setProcessing(true)
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: carName,
                        email: email,
                    },
                },
            },
        );

        if (confirmError) {
            setCardError(confirmError.message);
            return;
        }
        if (paymentIntent.status === "succeeded") {

            const payment = {
                price,
                transactionId: paymentIntent.id,
                email,
                bookingId: _id 
            }

            fetch("https://server-ivory-alpha.vercel.app/payments", {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    authorization: `bearer ${localStorage.getItem('carvanaToken')}`
                },
                body: JSON.stringify(payment)
            })
                .then(res => res.json())
                .then(data => {
                    setSuccess("Congratulation! your payment has been completed");
                    setTransactionId(paymentIntent.id);
                })

        }
        setProcessing(false)
        console.log(paymentIntent);

    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button
                    className='px-6 py-2 font-medium tracking-wide text-white
                     capitalize transition-colors duration-300 transform bg-blue-600 
                     rounded-md hover:bg-blue-500 
                    focus:outline-none focus:ring focus:ring-blue-300 
                    focus:ring-opacity-80 mt-5'
                    type="submit" disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>
                <p className='text-red-500'>{cardError}</p>
                {
                    success &&
                    <div>
                        <p className='text-green-500'>{success}</p>
                        <p>
                            Your transactionId:
                            <span className='font-bold'>
                                {transactionId}
                            </span>
                        </p>
                    </div>
                }
            </form>

        </>
    );
};

export default CheckoutForm;