import './login.styles.css'

import * as Yup from 'yup';

import { Form, Formik } from 'formik';

import { Button } from '../../components/Button';
import { CiLock } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { Input } from '../../components/Input';
import { Layout } from '../../components/Laytout';
import loginImg from '../../assets/login.jpg'

export function Login() {
    const initialValues = {
        email: "",
        senha: "",
    }
    
    const validationSchema = Yup.object({
        email: Yup.string().required("Informe seu email"),
        senha: Yup.string().required("Informe sua senha"),
    })

    const handleSubmit = (values: any, {  isSubmitting }: any)  =>{
        console.log(values)
        isSubmitting(false)
    }

    return (
    <Layout image={loginImg}>
        <div className='login-header'>
            <h1>Seja bem vindo!</h1>
            <h2>Informe seus dados  para entrar</h2>
        </div>
        <Formik 
            initialValues={initialValues} 
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
        >
            {({  values, isSubmitting }) =>(
                <Form className='login_form'>
                    <Input  name={"email"} type={"text"} icon={CiMail} props={values}/>
                    <Input  name={"senha"} type={"password"} icon={CiLock} props={values}/>
                    <div className="button_login">
                        <Button  disabled={isSubmitting} >
                            Enviar
                        </Button>
                    </div>
                </Form>
            )}
        </Formik>
    </Layout>      
    );
    }
      