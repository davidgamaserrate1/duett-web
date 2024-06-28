import './layoutForm.styles.css'

import { ILayoutProps } from "./layoutForm.types";

export function LayoutForm ({ children, image }: ILayoutProps ) {
    return (
        <div className="container">
            <div className="layout_wrapper">
                <div className="image_container">
                    <img className="illustration_image" src={image} alt="" />
                </div>
                <div className="form_container">
                    {children}
                </div>
            </div>
        </div>
    )
}