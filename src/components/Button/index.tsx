import './button.styles.css'

import { IButtonProps } from "./button.types"

export function Button({children , disabled}: IButtonProps){
    return(
        <button className="button_submit" type="submit" disabled={disabled}>
            {children}
        </button>
    )
}