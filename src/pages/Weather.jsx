import { useEffect, useState } from "react"
import axios from 'axios'



const Weather = () => {

    const [city, setCity] = useState(city)
    const [result, setResult] = useState(null)
    const [search, setSearch] = useState(city)
    const API_KEY = import.meta.env.VITE_WEATHER_API_KEY

    const fetchWeather = async () => {
        setCity(search)
        try {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${geo}&appid=${API_KEY}&units=metric`)
            setResult(response.data)
        }
        catch (err) {
            console.error(err)
        }
    }

    useEffect(() => {
        fetchWeather()
    }, [])

    console.log(result)

    return (
        <>


            <div className="flex flex-col justify-center items-center " >
                <form onSubmit={(e) => {
                    e.preventDefault()
                    fetchWeather()
                }}>
                    <input type="text" onChange={e => setSearch(e.target.value)} />
                    <input type="submit" value='search' />
                </form>
                <h1>Weather in {city} : {result && result.main.temp} degrees </h1>
            </div>
        </>
    )
}


export default Weather