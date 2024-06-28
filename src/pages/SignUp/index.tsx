import './signup.styles.css'

import * as Yup from 'yup';

import { Form, Formik } from 'formik';

import { Button } from '../../components/Button';
import { CiLock } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { Input } from '../../components/Input';
import { LayoutForm } from '../../components/LayoutForm';
import { Redirect } from '../../components/RedirectText';
import { Select } from '../../components/Select';
import { Tittle } from '../../components/Tittle';
import signUp from '../../assets/signUp.jpg'

export function SignUp() {
    const initialValues = {
        name: '',
        cpf: '',
        mail: '',
        password: '',
        password_confirmation: '',
        profile: ''
    }

    const validationSchema = Yup.object({
        name: Yup.string().required("Informe seu nome"),
        cpf: Yup.string().required("Informe seu cpf"),
        mail: Yup.string().required("Informe sua email"),
        password: Yup.string().required("Informe sua senha"),
        password_confirmation: Yup.string()
            .oneOf([Yup.ref('password')], "As senhas devem ser iguais")
            .required("Confirme sua senha"),
        profile: Yup.string().required("Por, favor Selecione um perfil"),  
    });

    const handleSubmit = (values: any, { setSubmitting }: any) => {
        console.log(values);
        setSubmitting(false);
    }

    const profileOptions = [
        { value: 'user', label: 'Usuário' },
        { value: 'admin', label: 'Administrador' }
    ];

    return (
    <div className='signup_container'>
        <LayoutForm image={signUp}>
            <Tittle tittle='Cadastre-se' />     
            
            <Formik 
                initialValues={initialValues} 
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
            >
                {({  values, isSubmitting }) =>(
                    <Form className='signup_form'>
                        <Input  name={"name"} placeholderText="Nome"  type={"text"} icon={CiMail} props={values}/>
                        <Input name={"cpf"} placeholderText= "Cpf"  type={"text"} icon={CiLock} props={values}/>
                        <Input name={"mail"} placeholderText= "Email"  type={"text"} icon={CiMail} props={values}/>
                        <Input name={"password"}  placeholderText= "Senha" type={"password"} icon={CiLock} props={values}/>
                        <Input name={"password_confirmation"}  placeholderText="Confirme a senha" type={"password"} icon={CiLock} props={values}/>
                        
                        <Select name="profile" options={profileOptions} />
                        <div  className="button_signup">
                            <Button  disabled={isSubmitting} >
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
      