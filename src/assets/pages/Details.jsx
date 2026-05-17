import { Header } from "../../components/header"
import { Library } from "../../components/Library"
import { Full } from "../../components/Full"
import './Details.css'

export function Details() {
    return (
        <>
                <Header></Header>
                      <div class="main-view">
                      <Library ></Library>
                      <Full></Full>
                      </div>
                </>
    )
}