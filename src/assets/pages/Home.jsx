import { Header } from "../../components/header"
import { Library } from "../../components/Library"
import { Albumy } from "../../components/Albumy"
import './Home.css'

export function Home({ muzyki, wykonawcy, setMuzyki, setWykonawcy, radio, setRadia }) {
    return (
        <>
        <Header></Header>
              <div className="main-view">
              <Library ></Library>
              <Albumy muzyki={muzyki} setMuzyki={setMuzyki} wykonawcy={wykonawcy} setWykonawcy={setWykonawcy} radio={radio} setRadia={setRadia}></Albumy>
              </div>
        </>
    ) 
}