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
    image: 'image/Pif-paf.png',
    id: crypto.randomUUID()
  }, {
    name: 'Darkside',
    author: 'Alan Walker',
    audio: '/audio/Darkside.mp3',
    image: 'image/Darkside.png',
    id: crypto.randomUUID()
  }, {
    name: 'Titanium',
    author: 'David Guetta',
    audio: 'audio/Titanium.mp3',
    image: 'image/Titanium.png',
    id: crypto.randomUUID()
  }, {
    name: 'Bring me to life',
    author: 'Evanescence',
    audio: 'audio/Bring-me-to-life.mp3',
    image: 'image/Bring-me-to-life.png',
    id: crypto.randomUUID()
  }, {
    name: 'Starships',
    author: 'Nicki Minaj',
    audio: 'audio/Starships.mp3',
    image: 'image/Starships.png',
    id: crypto.randomUUID()
  }, {
    name: '4 Pory Roku',
    author: 'QBIK',
    audio: 'audio/4-Pory-Roku.mp3',
    image: 'image/4-Pory-Roku.png',
    id: crypto.randomUUID()
  }, {
    name: 'Halo tu londyn',
    author: 'WEEKEND',
    audio: 'audio/Halo-tu-londyn.mp3',
    image: 'image/Halo-tu-londyn.png',
    id: crypto.randomUUID()
  }, {
    name: 'Magic Symphony',
    author: 'C-BooL',
    audio: 'audio/Magic-Symphony.mp3',
    image: 'image/Magic-Symphony.png',
    id: crypto.randomUUID()
  }, {
    name: 'Shape of you',
    author: 'Ed Sheeran',
    audio: 'audio/Shape-of-you.mp3',
    image: 'image/Shape-of-you.png',
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
