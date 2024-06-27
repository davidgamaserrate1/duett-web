import React from "react";
import './layout-styles.css'

interface LayoutProps {
    children: React.ReactNode;
    image: string;
}

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