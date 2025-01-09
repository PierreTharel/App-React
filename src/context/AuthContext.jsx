import {createContext} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export const AuthContext = createContext(null)

export const AuthController = ({children}) => {
    let navigate = useNavigate()


    const registerUser = async (user) => {
        try{
            const response = await axios.post('http://localhost:4000/api/register', user)
            console.log(response)
            if(response.status === 200){
                alert(response.data.message)
                navigate('/')
            }
            alert(response.data.message)
        }
        catch(err){
            alert(err.response.data.message)
        }
    }

    return(
        <AuthContext.Provider value={[registerUser]}>
            ({children})
        </AuthContext.Provider>
    )
}