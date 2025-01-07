import { createContext } from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'


export const UserContext = createContext(null)


export const UserController = ({ children }) => {
    const [users, setUsers] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    const URL = import.meta.env.VITE_URL

    const fetchUsers = async () => {
        try {
            const response = await axios.get(URL)
            setUsers(response.data)
        }
        catch (err) {
            setError(err.message)
        }
        finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchUsers()
      }, [])

    return(
        <UserContext.Provider value={[users, error, loading]}>
            {!loading && children}
        </UserContext.Provider>
    )
}