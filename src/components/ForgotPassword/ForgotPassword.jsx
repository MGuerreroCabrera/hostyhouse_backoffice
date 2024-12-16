import "./ForgotPassword.css";
import FieldLoginForm from "../FieldLoginForm/FieldLoginForm";
import Button from "../Button/Button";
import Form from "../Form/Form";
import CorporateImageForm from "../CorporateImageForm/CorporateImageForm";
import AuthFooter from "../AuthFooter/AuthFooter";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const ForgotPassword = () => {
  const { register, handleSubmit } = useForm();

  const submit = (data) => {
    console.log(data);
  }

  return (
   <div className="forgot-pwd-container">
    <Form handleSubmit={handleSubmit} submit={submit} register={register}>
      <CorporateImageForm/>
      <div className="forgot-pwd-header">       
        <h2>Recuperar Contraseña</h2>
      </div>
      <FieldLoginForm type="email" ph="Correo electrónico" registerName="email"/>
      <Link to="/login" className="forgot-password-ln">Inicio de Sesión</Link>
      <Button textButton="Recuperar contraseña" type="submit"/>      
    </Form>
    <AuthFooter/>
   </div>
  )
}

export default ForgotPassword