import { createContext, useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


export const AuthContext = createContext(null)

export const AuthController = ({ children }) => {
    let navigate = useNavigate()
    const [isAuthenticated, setIsAuthenticated] = useState(null)


    useEffect(() => {
        let token = localStorage.getItem('token')
        if(token){
            setIsAuthenticated(true)
        }
        else{
            setIsAuthenticated(false)
        }
    }, []) 


    const registerUser = async (user) => {
        try {
            const response = await axios.post('http://localhost:4000/api/register', user)
            console.log(response)
            if (response.status === 200) {
                alert(response.data.message)
                return navigate('/login')
            }
            alert(response.data.message)
        }
        catch (err) {
            alert(err.response.data.message)
        }
    }

    const loginUser = async (user) => {
        try {
            const response = await axios.post('http://localhost:4000/api/login', user)
            console.log(response)
            if (response.status === 200) {
                localStorage.setItem('token', response.data.token)
                setIsAuthenticated(true)
                alert(response.data.message)
                return navigate('/')
            }
        }
        catch (err) {
            alert(err.response.data.message)

        }
    }

    const logout = async () => {
        localStorage.removeItem('token')
        setIsAuthenticated(false)
        return navigate('/')
    }


    return (
        <AuthContext.Provider value={{ registerUser, loginUser, isAuthenticated, logout }}>
            ({children})
        </AuthContext.Provider>
    )
}