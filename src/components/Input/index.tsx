import './input.styles.css'

import { ErrorMessage, Field } from "formik"

import { IInputProps } from './input.type';

export function Input({placeholderText, name, type,  icon: Icon, ...props}:IInputProps){    
    
    return (
        <div className='input_container'> 
            <ErrorMessage name={name} component="div" className="input_error" />
            {Icon && <Icon className="input_icon" />}  
            <Field 
                className="input_field" 
                name={name} 
                type={type} 
                placeholder={placeholderText}
                {...props}              
            />
        </div>
            
    )
}