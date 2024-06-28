import'./select.styles.css'

import { ErrorMessage, Field } from 'formik';

import { ISelectProps } from './select.types';

export function Select ({ name, options }: ISelectProps) {
    return  (
        <div className="select_container">
            <ErrorMessage name={name} component="div" className="select_error" />
            <Field as="select" name={name}   className="select_field" >
                <option value="">Selecione um perfil</option>
                {options.map(option => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </Field>
        </div>
    );

}