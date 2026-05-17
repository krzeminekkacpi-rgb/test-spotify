import { Header } from "../../components/header"
import { Library } from "../../components/Library"
import { Full } from "../../components/Full"
import './Details.css'

export function Details({ playlistIds, setPlaylistIds }) {
    return (
        <>
                <Header></Header>
                      <div className="main-view">
                      <Library ></Library>
                      <Full playlistIds={playlistIds} setPlaylistIds={setPlaylistIds}></Full>
                      </div>
                </>
    )
}