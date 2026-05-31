import { Header } from "../../components/header"
import { Library } from "../../components/Library"
import { All } from "../../components/All";
import './Allpage.css';

export function Allpage({ muzyki }) {
    return (
        <>
                <Header></Header>
                      <div className="main-view">
                      <Library ></Library>
                      <All muzyki={muzyki}></All>
                      </div>
                </>
    )
}