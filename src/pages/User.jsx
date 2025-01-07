import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'


const User = () => {
    let { id } = useParams()
    const [user, setUser] = useState(null)


    const fetchUser = async () => {
        try {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
            setUser(response.data)
        }
        catch (err) {
            console.error(err)
        }
    }


    useEffect(() => {
        fetchUser()
    }, [])

    return (
        <>
            {user && (
                <h1>Hello world user : {user.username}</h1>
            )}
        </>
    )
}

export default User