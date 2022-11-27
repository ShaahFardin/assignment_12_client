export const setToken = (user, role) => {

    const currentUser = {
        email: user.email,
        role: role
    }

    fetch(`https://server-ivory-alpha.vercel.app/user/${user?.email}`, {
        method: 'PUT',
        headers: {
            'content-type': "application/json"
        },
        body: JSON.stringify(currentUser)
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            localStorage.setItem('carvanaToken', data.token)
        })
}