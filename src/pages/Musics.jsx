import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'


const musics = () => {
    let { id } = useParams()
    const [user, setMusic] = useState(null)

    const fetchMusic = async () => {
        try {
            const response = await axios.get(musics)
            setMusic(response.data)
        }
        catch (err) {
            console.error(err)
        }
    }


    useEffect(() => {
        fetchMusic()
    }, [])

    return (
        <>
            {musics && (

            <form onSubmit={(e) => {
                e.preventDefault()
                fetchMusic()
            }}> 
            <h1>Ajout de la musique : </h1>

            <label>
            <h3>Nom de la musique : </h3>
            <input type="text" value={musics.name} name="namemusic" />
            </label>

            <label>
            <h3>Auteur de la musique : </h3>
            <input type="text" value={musics.author} name="date" />
            </label>

            <label>
            <h3>Genre de la musique : </h3>
            <input type="text" value={musics.genre} name="genre" />
            </label>

            <input type="submit" value="Ajouter une musique" />
            </form>
                            
            )}
        </>
    )
}

export default musics