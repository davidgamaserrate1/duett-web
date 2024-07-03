import './login.styles.css'

import * as Yup from 'yup';

import { Form, Formik } from 'formik';

import { AlertFeedback } from '../../components/AlertFeedback/indext';
import { Button } from '../../components/Button';
import { CiLock } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { Helmet } from 'react-helmet-async';
import { ILogin } from '../../interfaces/LoginRequest';
import { Input } from '../../components/Input';
import { LayoutForm } from '../../components/LayoutForm';
import { Redirect } from '../../components/RedirectText';
import { TitleComponent } from '../../components/Title';
import loginImg from '../../assets/login.jpg'
import { useAuth } from '../../context/Hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export function Login() {
    const [error, setError] = useState<string | undefined>();
    const auth = useAuth()
    const navigate = useNavigate()

    const initialValues = {
        email: "",
        password: "",
    }
    
    const validationSchema = Yup.object({
        email: Yup.string().required("Informe seu email"),
        password: Yup.string().required("Informe sua senha"),
    })

    async function handleSubmit({email, password}: ILogin)  {
       try{
            const loginSuccessfully = await auth.authenticate(email, password)
            if(loginSuccessfully){
                navigate('/home');
            }

            setError('Credenciais inválidas')
            setTimeout(() => {
                setError(undefined);
            }, 3000);

       }catch(error:any){
            setError(error)
            
       }
    }
   
    return (
    <div className='login_container'>
        <Helmet><title>Login - Duett</title></Helmet>
        <LayoutForm image={loginImg}>
            <TitleComponent title='Seja bem vindo!' subtitle='Informe seus dados  para entrar' />         
            <Formik 
                initialValues={initialValues} 
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
            >
                {({  values, isSubmitting }) =>(
                    <Form className='login_form' >
                        <Input placeholderText='Email' name={"email"} type={"text"} icon={CiMail} props={values}/>
                        <Input placeholderText='Senha' name={"password"} type={"password"} icon={CiLock} props={values}/>
                         
                        { error && <AlertFeedback type={'error'} message={error}/> }
                        <div className="button_login">
                            <Button  disabled={isSubmitting} >
                                Entrar
                            </Button>
                        </div>
                        <Redirect firstText='Não possui acesso?' textRedirect='Cadastre-se' urlRedirect='cadastrar' />                    
                        
                    </Form>
                )}
            </Formik>
        </LayoutForm>     
    </div> 
    );
    }
      