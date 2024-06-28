import './home.styles.css'

import { Header } from "../../components/Header";

export function Home(){
    return(
        <>
            <Header />
            <h1 className="hello_world">Hola Mundo</h1>
        </>
    )
}