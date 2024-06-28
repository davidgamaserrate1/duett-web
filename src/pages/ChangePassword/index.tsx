import './changePassword.styles.css'

import * as Yup from 'yup'

import { Form, Formik } from "formik";

import { Button } from "../../components/Button";
import { CiLock } from "react-icons/ci";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { LayoutForm } from "../../components/LayoutForm";
import { Redirect } from "../../components/RedirectText";
import { Tittle } from "../../components/Tittle";
import changePasswordImg from '../../assets/forgotPassword.jpg'

export function ChangePassword(){
    const initialValues = {
        mail: "",
        senha: "",
    }
    
    const validationSchema = Yup.object({
        mail: Yup.string().required("Informe sua senha"),
        senha: Yup.string().required("Informe sua senha"),
    })

    const handleSubmit = (values: any, {  isSubmitting }: any)  =>{
        console.log(values)
        isSubmitting(false)
    }
    
    return (
        <>
            <Header />
            <div className='changePassword_container'>
                <LayoutForm image={changePasswordImg}>
                    <Tittle tittle='Alterar senha' subtittle='Informe uma nova senha e confirme' />         
                    <Formik 
                        initialValues={initialValues} 
                        onSubmit={handleSubmit}
                        validationSchema={validationSchema}
                    >
                        {({  values, isSubmitting }) =>(
                            <Form className='login_form'  id='2'>
                                <Input placeholderText='Senha' name={"mail"} type={"password"} icon={CiLock} props={values}/>
                                <Input placeholderText='Confirme a senha' name={"senha"} type={"password"} icon={CiLock} props={values}/>
                                <div className="button_login">
                                    <Button  disabled={isSubmitting} >
                                    Concluir
                                    </Button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </LayoutForm>     
            </div>
        </>
    )
}