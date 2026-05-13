import { Header } from "../../components/header"
import { Library } from "../../components/Library"
import { Albumy } from "../../components/Albumy"
import './Home.css'

export function Home({ muzyki, wykonawcy, setMuzyki, setWykonawcy }) {
    return (
        <>
        <Header></Header>
              <div class="main-view">
              <Library ></Library>
              <Albumy muzyki={muzyki} setMuzyki={setMuzyki} wykonawcy={wykonawcy} setWykonawcy={setWykonawcy}></Albumy>
              </div>
        </>
    ) 
}