import './layout.styles.css'

import { LayoutProps } from "./layout.types";

export function Layout ({ children, image }: LayoutProps ) {
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