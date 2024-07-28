const register = async (user) => {
    try {
        let response = await fetch('http://localhost:4000/auth/register', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },

            body: JSON.stringify(user)
        })

        return await response.json(user)

    } catch (error) {
        console.log(error)
    }
}