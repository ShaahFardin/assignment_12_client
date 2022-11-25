import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Context/AuthProvider';

const BookingModal = ({ bookCar, setBookCar }) => {

    const { user } = useContext(AuthContext)
    const { carName, resalePrice } = bookCar;

    const handleModalSubmit = event => {

        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const price = form.price.value;
        const phone = form.price.value;
        const meetingPlace = form.meetingPlace.value;
        const meetingDate = form.meetingDate.value


        const bookingsInfo = {
            carName: carName,
            buyersName: name,
            buyersEmail: email,
            price: price,
            buyersNumber: phone,
            meetingPlace: meetingPlace,
            meetingDate: meetingDate,
            buyersImage: user?.photoURL,
        }
        fetch('http://localhost:5000/bookings', {
            method: "POST",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(bookingsInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {

                    toast.success("Bookings confirmed")
                    setBookCar(null)
                    // refetch()
                }
                else {
                    toast.error(data.message)
                }

            })

    }

    return (
        <>
            <input type="checkbox" id="Booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="Booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{carName}</h3>
                    <form onSubmit={handleModalSubmit}>
                        <div className='form-control w-full mt-5'>
                            <label className='text-start font-thin text-xs'>When you want to meet your buyer?</label>
                            <input name='meetingDate' type="date" className="input input-bordered w-full  my-2" />
                        </div>
                        <input name='name' type="text" value={user?.displayName} disabled className="input input-bordered w-full  my-2" />
                        <input name='email' type="text" value={user?.email} disabled className="input input-bordered w-full my-2" />
                        <input name='price' type="text" placeholder={resalePrice} value={resalePrice} disabled className="input input-bordered w-full my-2" />
                        <input name='phone' type="text" placeholder="Phone Number" className="input input-bordered w-full my-2" required />
                        <input name='meetingPlace' type="text" placeholder="Meeting Place" className="input input-bordered w-full my-2" required />
                        <button type='submit' className="btn mt-5 w-full">Submit</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;