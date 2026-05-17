import { Header } from "../../components/header"
import { Library } from "../../components/Library"
import { List } from "../../components/List";
import './Playlist.css'

export function Playlist({playlistIds, setPlaylistIds, muzyki}) {
    return (
        <>
            <Header></Header>
            <div className="main-view">
                <Library ></Library>
                <List playlistIds={playlistIds} setPlaylistIds={setPlaylistIds} muzyki={muzyki}></List>
            </div>
        </>
    );
}