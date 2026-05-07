import { useState } from 'react'
import { Header } from './components/header'
import { Library } from './components/Library'
import { Albumy } from './components/Albumy'
import './App.css'

function App() {
  const [muzyki, setMuzyki] = useState([{
    name: '',
    autor: '',
    audio: '',
    id: crypto.randomUUID()
  }, {
    name: '',
    autor: '',
    audio: '',
    id: crypto.randomUUID()
  }])

  return (
    <>
      <Header muzyki={muzyki} setMuzyki={setMuzyki}></Header>
      <div className='main-view'>
      <Library ></Library>
      <Albumy ></Albumy>
      </div>
    </>
  )
}

export default App
