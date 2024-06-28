import './tittle.styles.css'

import { ITittle } from './tittle.types'

export function Tittle({tittle, subtittle}: ITittle){
    return (
    <div className='tittle-header'>
        <h1>{tittle}</h1>
        { subtittle && <h2>{subtittle}</h2>}
    </div>
    )
}