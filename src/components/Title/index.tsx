import './title.styles.css'

import { ITitleComponent } from './titleComponent.types'

export function TitleComponent({title, subtitle}: ITitleComponent){
    return (
    <div className='title-header'>
        <h1>{title}</h1>
        { subtitle && <h2>{subtitle}</h2>}
    </div>
    )
}