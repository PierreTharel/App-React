import './App.css'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import People from './People.jsx'


function App() {
  const [users, setUsers] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)
  URL = "https://jsonplaceholder.typicode.com/users"
console.log(URL)


const fetchUsers = async () => {
      try {
          const response = await axios.get(URL);
          setUsers(response.data)
      } catch (err) {
          setError(err.message)
      }
      finally {
        setLoading(false)
      }
    }

useEffect(() => (
  fetchUsers()
 ), [])

 if(loading) {
  return <p>Chargement de la page...</p>
 }

 if (error){
  return <p>{error}</p>
 }
  
  
  return (    
    <>
      {users && !loading && users.map(user => {
      return (        
        <div key={user}>
      
      <h3>Hello my name is {user.name}</h3>
      <p>Email : {user.email}</p>

      <BrowserRouter>
      <nav>
        <Link to="/">Accueil</Link> | <Link to="/people">Users</Link>
      </nav>
      <Routes>
        <Route path="/" Component={App} />
        <Route path="/people" Component={People} />
      </Routes>

      </BrowserRouter>
      
      </div>

  )
})
}
</>
)

}

export default App
