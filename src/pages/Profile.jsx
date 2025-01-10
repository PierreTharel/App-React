import { jwtDecode } from "jwt-decode"
import { useContext, useEffect } from "react"
import { AuthContext } from "../context/AuthContext"
import { useNavigate } from "react-router-dom"
import axios from "axios"

const Profile = () => {
    let navigate = useNavigate()
    const {isAuthenticated} = useContext(AuthContext)

    const token = localStorage.getItem('token')
    const decodedToken = jwtDecode(token)
    console.log(decodedToken)

    const fetchUserProfile = async () => {
        try{
            const response = await axios.get(`http://localhost:4000/api/users/${decodedToken.user_id}`, {
                headers : {
                    Authorization : `Bearer ${token}`
                }
            })
            console.log(response)
        }
        catch(err){
            console.error(err)
        }
    }

    useEffect(() => {
        if(!isAuthenticated){
            navigate('/')
        }
        else{
            fetchUserProfile()
        }    
    }, [])
    

    return(
        <>
            <h1>Profile component</h1>
        
        </>
    )
}


export default Profile