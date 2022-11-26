import { useEffect, useState } from "react"

const useAdmin = email => {

    const [isAdmin, setIsAdmin] = useState(false);
    // const [isAdminLoading, setIsAdminLoading] = useState(true);

    useEffect(() => {
        if (email) {
            fetch(`http://localhost:5000/users/admin/${email}`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('carvanaToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setIsAdmin(data?.isAdmin);
                    
                })
        }

    }, [email])
    return [isAdmin]
}

export default useAdmin;