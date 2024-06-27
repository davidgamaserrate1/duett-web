import './input.styles.css'

import { ErrorMessage, Field } from "formik"

interface IInputProps {
    name: string,
    type : string,
    icon?: React.ElementType
    props: any,
}
const erro = (
    <span  className="input_error"/>
)
export function Input({name, type, icon: Icon, props}:IInputProps){
    const namePlaceHolder =  name[0].toUpperCase() + name.slice(1);
    
    return (
        <>  
        <div className='input_container'> 
            <ErrorMessage name={name} component="div" className="input_error" />
            {Icon && <Icon className="input_icon" />}  
            <Field className="input_field" name={name} type={type} placeholder={namePlaceHolder}
            {...props}              
            />
        </div>
            
        </>
    )
}