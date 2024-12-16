import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import FieldLoginForm from "../FieldLoginForm/FieldLoginForm";
import AuthFooter from "../AuthFooter/AuthFooter";
import Button from "../Button/Button";
import CorporateImageForm from "../CorporateImageForm/CorporateImageForm";
import Form from "../Form/Form";
import { useForm } from "react-hook-form";
import { login } from "../../reducers/users/users.actions";
import { useContext } from "react";
import { UsersContext } from "../../providers/UsersProvider";

const Login = () => {
  // Extraer register y handleSubmit de useForm()
  const { register, handleSubmit } = useForm();

  // Obtener la función navigate de react-router-dom para ir a la home tras el login OK
  const navigate = useNavigate();

  // Rercoger el dispatch de UsersContext para poder pasarle el dispatch a la función login
  const { dispatch } = useContext(UsersContext);

  return (
   <div className="login-container">
      <Form handleSubmit={handleSubmit} submit={(data) => login(data, dispatch, navigate)} register={register}>
        <CorporateImageForm/>
        <div className="login-header">
          <h2>Inicio de Sesión</h2>
        </div>
        <FieldLoginForm type="email" ph="Correo electrónico" registerName="email"/>
        <FieldLoginForm type="password" ph="Contraseña" registerName="password"/>
        <Link to="/forgot-password" className="forgot-password-ln">Olvidé mi contraseña</Link>
        <Button textButton="Iniciar Sesión" type="submit"/>
    </Form>
    <AuthFooter/>
   </div>
  )
}

export default Login