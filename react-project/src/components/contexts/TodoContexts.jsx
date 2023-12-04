import { createContext } from "react";
import { useNavigate  } from "react-router-dom";
import usePersistedState from "../../hooks/usePersistedState";
import Path from "../../path";
import * as authService from "../../services/authService"

export  const TodoContext = createContext()


export const AuthProvider = ({
    children,
   
}) => {
    const navigate = useNavigate()

    const [auth,setAuth] = usePersistedState('auth',{})

    const loginSubmithandler = async (values)=>{

    const result = await authService.login(values.email, values.password)

    setAuth(result)

    localStorage.setItem('accessToken', result.accessToken)

    navigate(Path.Home)

}
const registerSubmitHandler = async (values)=>{

    const result = await authService.register(values.email, values.password)
    
    setAuth(result)

    localStorage.setItem('accessToken', result.accessToken)

    navigate(Path.Home)

}


    const values = {
        loginSubmithandler,
        registerSubmitHandler,
    }

    return(
        <TodoContext.Provider value={values}>

        {children}
        
       </TodoContext.Provider>
    )
}