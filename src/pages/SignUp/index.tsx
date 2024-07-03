import './signup.styles.css'

import * as Yup from 'yup';

import { Form, Formik } from 'formik';

import { AlertFeedback } from '../../components/AlertFeedback/indext';
import { Button } from '../../components/Button';
import { CiLock } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { Helmet } from 'react-helmet-async';
import { IUser } from '../../interfaces/User';
import { Input } from '../../components/Input';
import { IoArrowBackOutline } from 'react-icons/io5';
import { LayoutForm } from '../../components/LayoutForm';
import { Redirect } from '../../components/RedirectText';
import { Select } from '../../components/Select';
import { TitleComponent } from '../../components/Title';
import signUp from '../../assets/signUp.jpg'
import { signupRequest } from '../../services/auth.service';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export function SignUp() {
    const [response, setResponse]=  useState<string | undefined>();
    const [responseType, setResponseType] = useState<'success' | 'error' | undefined>();

    const navigate = useNavigate()

    const initialValues = {
        name: '',
        cpf: '',
        email: '',
        password: '',
        password_confirmation: '',
        profile: ''
    }

    const validationSchema = Yup.object({
        name: Yup
            .string()
            .required("Informe seu nome"),
        cpf: Yup
            .string()
            .required("Informe seu cpf"),
        email: Yup
            .string()
            .required("Informe sua email"),
        password: Yup
            .string()
            .required("Informe sua senha"),
        password_confirmation: Yup
            .string()
            .required("Confirme sua senha"),
        profile: Yup
            .string()
            .required("Por, favor Selecione um perfil"),  
    });

    async function handleSubmit(user: Partial<IUser>) {
        const RegisterForm = {
            name: user.name,
            cpf: user.cpf,
            email: user.email,
            password: user.password,
            profile: user.profile,
        }
        const responseSignup = await signupRequest(RegisterForm)
        setResponseType(responseSignup.id ? 'success' : 'error');
        
        if(responseSignup.id){
            setResponseType( 'success');
            setResponse( 'Cadastrado com sucesso');
            redirectToLogin()
        }
        
        setTimeout(() => {
            
            setResponseType(undefined);
            setResponse(undefined);
        }, 3000);
    }
    
    
    function redirectToLogin(){
        setTimeout(() => {
            navigate('/login')     
        }, 1500);
    }

    const profileOptions = [
        { value: 'USER', label: 'Usuário' },
        { value: 'ADMIN', label: 'Administrador' }
    ];

    return (
    <div className='signup_container'>
        <Helmet><title>Cadastrar - Duett</title></Helmet>
        <LayoutForm image={signUp}>
            <div className='back_home' onClick={()=>redirectToLogin()}> 
                <IoArrowBackOutline /> Voltar
            </div>
            <TitleComponent title='Cadastre-se' />     
            
            <Formik 
                initialValues={initialValues} 
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
            >
                {({  values }) =>(
                    <Form className='signup_form'>
                        <Input  name={"name"} placeholderText="Nome"  type={"text"} icon={CiMail} props={values}/>
                        <Input name={"cpf"} placeholderText= "Cpf"  type={"text"} icon={CiLock} props={values}/>
                        <Input name={"email"} placeholderText= "Email"  type={"text"} icon={CiMail} props={values}/>
                        <Input name={"password"}  placeholderText= "Senha" type={"password"} icon={CiLock} props={values}/>
                        <Input name={"password_confirmation"}  placeholderText="Confirme a senha" type={"password"} icon={CiLock} props={values}/>
                        <Select name="profile" options={profileOptions} />
                        {response && <AlertFeedback type={responseType!} message={response} />}  
                        
                        <div  className="button_signup">
                            <Button  disabled={false} >
                                Salvar
                            </Button>
                        </div>
                        <Redirect firstText='Possui acesso?' textRedirect='Entre' urlRedirect='login' />                    
                    </Form>
                )}
            </Formik>
                         
                            
                         
        </LayoutForm>    
    </div>  
    );
    }
      