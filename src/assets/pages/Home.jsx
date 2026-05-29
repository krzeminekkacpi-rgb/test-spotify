import { Header } from "../../components/header"
import { Library } from "../../components/Library"
import { Albumy } from "../../components/Albumy"
import { useState } from "react"
import './Home.css'

export function Home({ muzyki, wykonawcy, setMuzyki, setWykonawcy, radio, setRadia }) {
    const [search, setSearch] = useState('');
    return (
        <>
        <Header setSearch={setSearch}></Header>
              <div className="main-view">
              <Library ></Library>
              <Albumy muzyki={muzyki} setMuzyki={setMuzyki} wykonawcy={wykonawcy} setWykonawcy={setWykonawcy} radio={radio} setRadia={setRadia} search={search}></Albumy>
              </div>
        </>
    ) 
}