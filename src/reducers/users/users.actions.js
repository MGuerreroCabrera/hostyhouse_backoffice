import { API } from "../../utils/API/API";

// Crear función de Login
export const login = async (body, dispatch, navigate) => {

    // Inicializar loading
    dispatch({ type: "LOADING" });

    const { error, response } = await API({ endpoint: "/users/login", method: "POST", body, content_type: true });
    
    if(error) {
        dispatch({ type: "ERROR", payload: error.message });
        //console.log(error.message);
    } else {
        //console.log(response);
        //console.log(response.data.name);
        //console.log(response.data.token);
        dispatch({ type: "LOGIN_SUCCESS", payload: response });
        localStorage.setItem("hhToken", response.data.token); 
        navigate("/");
    }
};

export const checkSession = async (dispatch, navigate) => {
    const { error, response } = await API({ endpoint: "/users/checksession" });

    if(error) {
        dispatch({ type: "LOGOUT" });
        localStorage.removeItem("hhToken");
        navigate("/login");
    } else {
        dispatch({ type: "LOGIN_CHECKED", payload: response });
        console.log("Paso por aquí");
        navigate("/");
    }
};