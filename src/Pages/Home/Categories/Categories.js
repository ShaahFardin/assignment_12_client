import React, { useEffect, useState } from 'react';
import Volkswagen from './Volkswagen';

const Categories = () => {

    const [loading, setLoading] = useState(false);
    const [Volkswagens, setVolkswagen] = useState([]);
    useEffect(() => {
        fetch('volkswagon.json')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setVolkswagen(data)
            })
    })


    return (
        <div>
           
        </div>
    );
};

export default Categories;