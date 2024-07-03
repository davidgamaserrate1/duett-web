import './changePassword.styles.css';

import * as Yup from 'yup';

import { Form, Formik, FormikHelpers } from 'formik';

import { AlertFeedback } from '../../components/AlertFeedback/indext';
import { Button } from '../../components/Button';
import { CiLock } from 'react-icons/ci';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { IoArrowBackOutline } from "react-icons/io5";
import { LayoutForm } from '../../components/LayoutForm';
import { Tittle } from '../../components/Tittle';
import changePasswordImg from '../../assets/forgotPassword.jpg';
import { changePasswordRequest } from '../../services/auth.service';
import { useAuth } from '../../context/Hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

interface IChangePasswordFormValues {
    old_password: string;
    new_password: string;
    new_password_confirmation: string;
}

export function ChangePassword() {
    const [response, setResponse]=  useState<string | undefined>();
    const [typeResponse, setTypeResponse] = useState<'success' | 'error' | undefined>();
    const { token, id } = useAuth();
    const navigate = useNavigate()

    const initialValues: IChangePasswordFormValues = {
        old_password: '',
        new_password: '',
        new_password_confirmation: '',
    };

    const validationSchema = Yup.object({
        old_password: Yup.string().required('Informe sua senha atual'),
        new_password: Yup.string().required('Informe a nova senha'),
        new_password_confirmation: Yup.string()
            .oneOf([Yup.ref('new_password')], 'As senhas devem ser iguais')
            .required('Confirme a nova senha'),
    });

    async function handleSubmit( values: IChangePasswordFormValues,{ setSubmitting }: FormikHelpers<IChangePasswordFormValues>) {
        setSubmitting(true)
        const { old_password, new_password } = values;
        
        const obj:any = {
            id,
            token: token,
            old_password: old_password,
            new_password: new_password,
        };
        
        const response = await changePasswordRequest(obj);
        setTypeResponse(response === "Senha alterada com sucesso!" ? 'success' : 'error');
        setResponse(response);

        setTimeout(() => {           
            setTypeResponse(undefined);
            setResponse(undefined);
            setSubmitting(false)
        }, 3000);      
        
    }

    function redirectToHome(){
        navigate('/home')
    }

    return (
        <> 
            <Header />
            <div className='changePassword_container'>
                <LayoutForm image={changePasswordImg}>
                    <div className='back_home' onClick={()=>redirectToHome()}> 
                        <IoArrowBackOutline /> voltar 
                    </div>
                    <Tittle tittle='Alterar senha' subtittle='Confirme sua senha atual e insira uma nova' />                   
                    <Formik
                        initialValues={initialValues}
                        onSubmit={handleSubmit}
                        validationSchema={validationSchema}
                    >
                    {({ values, isSubmitting }) => (
                        <Form className='login_form' id='2'>
                            <Input placeholderText='Senha atual' name='old_password' type='password' icon={CiLock} props={values} />
                            <Input placeholderText='Nova senha' name='new_password' type='password' icon={CiLock} props={values} />
                            <Input placeholderText='Confirme a nova senha' name='new_password_confirmation' type='password' icon={CiLock} props={values} />                                
                            {response && <AlertFeedback type={typeResponse!} message={response} />}                                
                            <div className='button_send'>
                                <Button disabled={isSubmitting}>Salvar</Button>
                            </div>
                        </Form>
                    )}
                    </Formik>
                </LayoutForm>
            </div>
        </>
    );
}
