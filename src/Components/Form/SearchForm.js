import React from 'react'

const SearchForm = () => {
    return (
        <div className='w-full max-w-sm p-6 m-auto mx-auto'>
            <h1 className='text-xl font-semibold text-gray-700'>
                What kind of car do you want?
            </h1>

            <form className='mt-6'>
                <div className='shadow-md rounded-md my-2 p-3'>
                    <input
                        type='text'
                        name='car'
                        required
                        placeholder='Add Car, Brand'
                        className='block w-full mt-1 p-1 text-gray-700 bg-white   focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40'
                    />
                </div>
                <div className='mt-6'>
                    <button
                        type='submit'
                        className='w-full text-white bg-accent px-4 py-2 tracking-wide transition-colors duration-300 transform rounded-md'
                    >
                        Search
                    </button>
                </div>
            </form>
        </div>
    )
}

export default SearchForm
