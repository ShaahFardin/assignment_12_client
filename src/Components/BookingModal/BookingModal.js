import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider';

const BookingModal = ({bookCar}) => {


    const {user} = useContext(AuthContext)
    const {carName, resalePrice} = bookCar;

    const handleModalSubmit = event =>{

        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const price = form.price.value;
        const phone = form.price.value;
        const meetingPlace = form.meetingPlace.value

        console.log(name, meetingPlace);

    }

    return (
        <>
            <input type="checkbox" id="Booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="Booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{carName}</h3>
                    <form onSubmit={handleModalSubmit}>
                        <input name='name' type="text" value={user?.displayName} disabled className="input input-bordered w-full  my-2" />
                        <input name='email' type="text" value={user?.email} disabled className="input input-bordered w-full my-2" />
                        <input name='price' type="text" placeholder={resalePrice} value={resalePrice} disabled className="input input-bordered w-full my-2" />
                        <input name='phone' type="text" placeholder="Phone Number" className="input input-bordered w-full my-2" />          
                        <input name='meetingPlace' type="text" placeholder="Meeting Place" className="input input-bordered w-full my-2" />
                        <button type='submit' className="btn mt-5 w-full">Submit</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;