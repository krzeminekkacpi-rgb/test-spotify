import { useState } from 'react'
import { Header } from './components/header'
import { Library } from './components/Library'
import { Albumy } from './components/Albumy'
import './App.css'

function App() {
  const [muzyki, setMuzyki] = useState([{
    name: 'Pif-Paf',
    author: 'Figo, Samogony',
    audio: '/audio/Pif-paf.mp3',
    id: crypto.randomUUID()
  }, {
    name: 'Darkside',
    author: 'Alan Walker',
    audio: '/audio/Darkside.mp3',
    id: crypto.randomUUID()
  }, {
    name: 'Titanium',
    author: 'David Guetta',
    audio: 'audio/Titanium.mp3',
    id: crypto.randomUUID()
  }, {
    name: 'Darkside',
    author: 'Alan Walker',
    audio: 'audio/Darkside.mp3',
    id: crypto.randomUUID()
  }, {
    name: 'Titanium',
    author: 'David Guetta',
    audio: 'audio/Titanium.mp3',
    id: crypto.randomUUID()
  }, {
    name: 'Titanium',
    author: 'David Guetta',
    audio: 'audio/Titanium.mp3',
    id: crypto.randomUUID()
  }]);

  return (
    <>
      <Header></Header>
      <div className='main-view'>
      <Library ></Library>
      <Albumy muzyki={muzyki} setMuzyki={setMuzyki}></Albumy>
      </div>
    </>
  )
}

export default App
