import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import Auth from "./pages/Auth/Auth";
import Home from "./pages/Home/Home";
import { useEffect } from "react";
import Loading from "./components/Loading/Loading";
import { useContext } from "react";
import { UsersContext } from "./providers/UsersProvider";
import { checkSession } from "./reducers/users/users.actions";
import ResetPassword from "./pages/ResetPassword/ResetPassword";

const App = () => {

  const navigate = useNavigate();
  
  // Recoger el estado para el loading
  // Hago destructuring de loadindg del state  
  const { state: { loading }, dispatch } = useContext(UsersContext); 

  // Comprobar si existe token para enviar al usuario a /login
  useEffect(() => {
    checkSession(dispatch, navigate);
  }, []);
  // if(!window.location.pathname === "/reset-password") {
    
  // }  

  return (
    <>
      { loading && <Loading/> }
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Auth/ >}/>
        <Route path="/forgot-password" element={<Auth />}/>
        <Route path="/reset-password" element={<ResetPassword />}/>
        <Route path="*" element={<Home/>}/>
      </Routes>
    </>
  )
}

export default App