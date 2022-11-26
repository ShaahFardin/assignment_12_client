import React, { useEffect, useState } from 'react';

const AllTrucks = () => {

    const [nissan, setNissan] = useState([]);
    
    useEffect(() => {
        fetch('http://localhost:5000/allcars/Nissan')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setNissan(data)
            })
    }, [])

    return (
        <div>
            
        </div>
    );
};

export default AllTrucks;