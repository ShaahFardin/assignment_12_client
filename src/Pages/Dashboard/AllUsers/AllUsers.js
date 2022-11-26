import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const AllUsers = () => {

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users', {
                headers: {
                    authorization: `bearer ${localStorage.getItem('carvanaToken')}`
                }
            });
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
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    refetch()
                    toast.success("User Deleted")
                }
            })
    }

    const handleVerify = (id) => {
        fetch(`http://localhost:5000/users/admin/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('carvanaToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.modifiedCount > 0){
                    toast.success("seeler verified")
                    refetch()
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
                            <th>Admin Action</th>
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
                                        <button onClick={() => handleDelete(user._id)}>
                                            Delete
                                        </button>
                                    </td>
                                    {
                                        user?.verified !== true && <td onClick={() => handleVerify(user._id)}>
                                            <button>verify</button>
                                        </td>
                                    }
                                </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;