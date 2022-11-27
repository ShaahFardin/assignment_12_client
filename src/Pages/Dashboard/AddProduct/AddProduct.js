import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Context/AuthProvider';

const AddProduct = () => {

    const {user} = useContext(AuthContext);

    const [category, setCategory] = useState('')
    const { register, formState: { errors }, handleSubmit } = useForm();

    const handleAddProduct = (data, event) => {
        console.log(data);

        const addproduct = {
            carName: data.name,
            brandName: data.brandName,
            image: data.image,
            resalePrice: data.price,
            location: data.location,
            phone: data.phone,
            sellerName: user?.name,
            email: user?.email,
            availabe: true,
            constion: data.condition,
            description: data.description,


        }
        fetch(`http://localhost:5000/allcars/${data.brandName}`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${localStorage.getItem('carvanaToken')}`
            },
            body: JSON.stringify(addproduct)
        })
        .then(res=> res.json())
        .then(data=> {
            console.log(data);
            toast.success('product added successfully');
            event.target.reset()
        })

    }

    return (
        <div className='flex justify-center items-center'>
            <div className='w-96 p-7 '>
                <h1 className='text-4xl font-thin'>Add A Product</h1>
                <form className='my-5' onSubmit={handleSubmit(handleAddProduct)}>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Product Name</span>
                        </label>
                        <input type="text"
                            {...register('name', { required: true })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.name && <p className='text-red-500'>Product name is required</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <input type="text" placeholder='Your Photo URL'
                            {...register('image', { required: true })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.image && <p className='text-red-500'>Photo URL is must</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text"
                            {...register('price', { required: true })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.price && <p className='text-red-500'>Price is required</p>}
                    </div>

                    {/* <div className='form-control w-full max-w-xs'>
                        <label className="label">
                            <span className="label-text">Year used</span>
                        </label>
                        <input type="text"
                            {...register('used',)}
                            className="input input-bordered w-full max-w-xs" />

                    </div> */}
                    <div className='form-control w-full max-w-xs'>
                        <label className="label">
                            <span className="label-text">Your Location</span>
                        </label>
                        <input type="text"
                            {...register('location', {required: true})}
                            className="input input-bordered w-full max-w-xs" />

                    </div>
                    <div className='form-control w-full max-w-xs'>
                        <label className="label">
                            <span className="label-text">Describe your product</span>
                        </label>
                        <textarea
                         {...register('description', { required: "Confirm your identity" })} 
                        className="textarea textarea-bordered"></textarea>
                    </div>
                    <div className='form-control w-full max-w-xs mt-5'>
                        <select

                            {...register('brandName', { required: "Confirm Brandname" })}
                            className="select select-bordered w-full max-w-xs">
                            <option>Volkswagen</option>
                            <option>Bugatti</option>
                            <option>Nissan</option>
                        </select>
                    </div>
                    <div className='form-control w-full max-w-xs mt-5'>
                        <select

                            {...register('condition', { required: "Confirm condition of your car" })}
                            className="select select-bordered w-full max-w-xs">
                            <option>Fair</option>
                            <option>Good</option>
                            <option>Excelent</option>
                        </select>
                    </div>
                    <input
                  
                     className='btn btn-accent w-full mt-5' value="Add" type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddProduct;