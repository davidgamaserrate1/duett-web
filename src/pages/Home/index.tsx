import './home.styles.css'

import { Header } from "../../components/Header";
import { Helmet } from 'react-helmet-async';

export function Home(){
    return(
        <><Helmet><title>Home - Duett</title></Helmet>
            <Header />
            <h1 className="hello_world">Hola Mundo</h1>
        </>
    )
}