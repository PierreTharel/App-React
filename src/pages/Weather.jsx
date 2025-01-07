import { useEffect, useState } from "react"
import Users from "./User"

const Weather = () => {

    const geo = useState(Users)
    const API_KEY = import.meta.env.VITE_WEATHER_API_KEY

const fetchWeather = async () => {
    try{
        const response = await axios.get('https://api.openweathermap.org/data/2.5/weather?q=${geo}&appid=${API_KEY}&units=metric')
    } 
    catch (err) {
        console.log (err)
    }
}

useEffect(() => {
    fetchWeather()
}, [])

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
            <h1>Weather in {geo} : {result && result.main.temp} degrees </h1>
        </div>
    </>
)
}

export default Weather