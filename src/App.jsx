import { useState } from 'react'
import { Header } from './components/header'
import './App.css'

function App() {
  const [muzyki, setMuzyki] = useState([{
    src: '',
    id: crypto.randomUUID()
  }, {
    src: '',
    id: crypto.randomUUID()
  }])

  return (
    <>
      <Header muzyki={muzyki} setMuzyki={setMuzyki}></Header>
    </>
  )
}

export default App
