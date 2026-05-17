import { Header } from "../../components/header"
import { Library } from "../../components/Library"
import './Playlist.css'

export function Playlist() {
    return (
        <>
            <Header></Header>
            <div class="main-view">
                <Library ></Library>
                <List></List>
            </div>
        </>
    );
}