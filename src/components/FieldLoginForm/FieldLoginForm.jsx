import { useState } from "react";
import "./FieldLoginForm.css";
import { useContext } from "react";
import { FormContext } from "../Form/Form";

const FieldLoginForm = ({ ph = "", type, registerName }) => {
    // Estado para controlar el campo password ( visible - not visible )
    const [visible, setVisible] = useState(false);

    const { register } = useContext(FormContext);
    
    return (
        <div className="input-field">
            <input 
                type={type === "password" && visible ? "text" : type} 
                placeholder=""
                {...register(registerName)} 
            />
            <label>{ph}</label>
            {type === "password" && <img 
                src={visible ? "icons/eye-open.png" : "icons/eye-close.png"} 
                alt="Mostrar / Ocultar contraseña" 
                onClick={() => setVisible(!visible)}
                className="form-icon" />}        
        </div>
    )
}

export default FieldLoginForm