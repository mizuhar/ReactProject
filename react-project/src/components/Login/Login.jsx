
import { useContext } from "react"
import { TodoContext } from "../contexts/TodoContexts"

import useForm from "../../hooks/useForm"
import { useState } from "react"



const LoginFormKeys = {
    Email: "email",
    Password: "password",
  }

export default  function Login(){
    const [ errorMessage, setErrorMessage] = useState('')

const { loginSubmithandler } = useContext(TodoContext)

const { values, onChange, onSubmit } = useForm(loginSubmithandler,{
 [LoginFormKeys.Email]: '',
 [LoginFormKeys.Password]: '',
})
const validatePasswordHandler = ()=>{
    if(values[LoginFormKeys.Password].length < 5){
        setErrorMessage('Password must be at least 5 characters!');
    }
    
    else {
       setErrorMessage('');
    }
}

    return(
        <>
          
        <section id="login-page" className="auth">
  <form id="login" onSubmit={onSubmit}>
    <div className="container">
      <div className="brand-logo" />
      <h1>Login</h1>
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name={LoginFormKeys.Email}
        placeholder="staki@gmail.com"
        onChange={onChange}
        value={values[LoginFormKeys.Email]}
      />
      <label htmlFor="login-pass">Password:</label>
      <input 
        type="password"
        id="login-password"
        name={LoginFormKeys.Password} 
        onChange={onChange}
        onBlur={validatePasswordHandler}
        value={values[LoginFormKeys.Password]}
        />
        {errorMessage && <p style={{color:"red", fontSize: "17px"}}>{errorMessage}</p>}
      <input 
        type="submit" 
        className="btn submit"
        defaultValue="Login"
        />
      <p className="field">
        <span>
          If you don't have profile click <a href="/register">here</a>
        </span>
      </p>
    </div>
  </form>
</section>

        
        </>
    )
}