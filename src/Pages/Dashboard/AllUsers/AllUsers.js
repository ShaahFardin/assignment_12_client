import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const AllUsers = () => {

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users');
            const data = res.json();
            return data;
        }
    })

    const handleDelete = (id) => {
        fetch(`http://localhost:5000/users/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('carvanaToken')}`
            }
        })
        .then(res=>res.json())
        .then(data=> {
            if(data.deletedCount){
                refetch()
                toast.success("User Deleted")
            }
        })
    }

    return (
        <div>
            <h1 className='text-3xl font-thin'>All Ussers{users.length}</h1>

            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            users.map((user, i) =>
                                <tr key={i}>
                                    <th>{i + 1}</th>
                                    <td>{user?.email}</td>
                                    <td>{user?.role}</td>
                                    <td className='text-red-500'>
                                        <button onClick={()=>handleDelete(user._id)}>
                                           Delete
                                        </button>
                                    </td>
                                </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;