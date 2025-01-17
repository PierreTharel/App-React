import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'


const posts = () => {
    let { id } = useParams()
    const [user, setPost] = useState(null)
    const MONGO_URI = import.meta.env.MONGO_URI

    const fetchPost = async () => {
        try {
            const response = await axios.get('http://localhost:4000/api/posts', user)
            setPost(response.data)
        }
        catch (err) {
            console.error(err)
        }
    }


    useEffect(() => {
        fetchPost()
    }, [])

    return (
        <>
            {posts && (

            <div className="flex flex-col justify-center items-center " >    
            <form onSubmit={(e) => {
                e.preventDefault()
                fetchPost()
            }}> 
            <h1>Création du post : </h1>
            
            <label>
            <h3>Titre du poste : </h3>
            <input type="text"  value={posts.title} name="title"/>
            </label>

            <label>
            <h3>Date du poste : </h3>
            <input type="date" value={posts.date} name="date" />
            </label>

            <label>
            <h3>Nom de l'utilisateur : </h3>
            <input type="text" value={posts.userID} name="nameuser" />
            </label>

            <input type="submit" value="Créer un post" />
            </form>

            </div>

                
            )}
        </>
    )
}

export default posts