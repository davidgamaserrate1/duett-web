import './login.styles.css'

import * as Yup from 'yup';

import { Form, Formik } from 'formik';

import { Button } from '../../components/Button';
import { CiLock } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { Input } from '../../components/Input';
import { Layout } from '../../components/Laytout';
import { Redirect } from '../../components/Redirect';
import { Tittle } from '../../components/Tittle';
import loginImg from '../../assets/login.jpg'

export function Login() {
    const initialValues = {
        mail: "",
        senha: "",
    }
    
    const validationSchema = Yup.object({
        mail: Yup.string().required("Informe seu email"),
        senha: Yup.string().required("Informe sua senha"),
    })

    const handleSubmit = (values: any, {  isSubmitting }: any)  =>{
        console.log(values)
        isSubmitting(false)
    }
   
    return (
    <Layout image={loginImg}>
        <Tittle tittle='Seja bem vindo!' subtittle='Informe seus dados  para entrar' />         
        <Formik 
            initialValues={initialValues} 
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
        >
            {({  values, isSubmitting }) =>(
                <Form className='login_form'  id='2'>
                    <Input placeholderText='Email' name={"mail"} type={"text"} icon={CiMail} props={values}/>
                    <Input placeholderText='Senha' name={"senha"} type={"password"} icon={CiLock} props={values}/>
                    <div className='recover_password'>
                        <Redirect  textRedirect='recuperar senha' urlRedirect='recuperar-senha' />  
                    </div>   

                    <div className="button_login">
                        <Button  disabled={isSubmitting} >
                            Enviar
                        </Button>
                    </div>
                    <Redirect firstText='Não possui acesso?' textRedirect='Cadastre-se' urlRedirect='cadastrar' />                    
                </Form>
            )}
        </Formik>

    </Layout>      
    );
    }
      