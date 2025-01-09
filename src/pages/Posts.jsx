import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'


const Posts = () => {
    let { id } = useParams()
    const [user, setPost] = useState(null)


    const fetchPost = async () => {
        try {
            const response = await axios.get(Posts)
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
            {Posts && (

                
            <form onSubmit={(e) => {
                e.preventDefault()
                fetchPost()
            }}> 
            <h1>Création du post : </h1>
            
            <label>
            <h3>Titre du poste : </h3>
            <input type="text"  value={Posts.title} name="title"/>
            </label>

            <label>
            <h3>Date du poste : </h3>
            <input type="date" value={Posts.date} name="date" />
            </label>

            <label>
            <h3>Nom de l'utilisateur : </h3>
            <input type="text" value={Posts.userID} name="nameuser" />
            </label>

            <input type="submit" value="Créer un post" />
            </form>

                
            )}
        </>
    )
}

export default Posts