import './App.css'
import Hello from './Hello.jsx'
import Avatar from './Avatar.jsx'

function App() {

  const avatar = [
    {
      firstName : "Homer",
      lastname : "Simpson",
      image : "https://www.webstickersmuraux.com/fr/img/as045mb-png/folder/products-detalle-png/autocollants-homer-simpson.png"
    },
    {
      firstName : "Bart",
      lastname : "Simpson",
      image : "https://thumbs.dreamstime.com/b/bart-simpson-dessin-anim%C3%A9-vektor-formats-jpg-png-262242958.jpg"
    }
  ]

  return (
    <>
    <div>
      <Hello />
      <Avatar />

    </div>

    </>
  )
}

export default App
