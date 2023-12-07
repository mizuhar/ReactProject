import { useContext } from "react"
import { TodoContext } from "../contexts/TodoContexts"

import useForm from "../../hooks/useForm"
import { useState } from "react"


const RegisterFormKeys = {
    Email: "email",
    Password: "password",
    ConfirmPassword: "confirm-password",
  }
  export default function Register(){
    const [errorMessage,setErrorMessage] = useState('')
    const { registerSubmitHandler } = useContext(TodoContext)

    const { values, onChange, onSubmit } = useForm(registerSubmitHandler,{
        [RegisterFormKeys.Email]: '',
        [RegisterFormKeys.Password]: '',
        [RegisterFormKeys.ConfirmPassword]: '',

    })
    const validatePasswordHandler = ()=>{
        if(values[RegisterFormKeys.Password].length < 5){
            setErrorMessage('Password must be at least 5 characters!');
        }
        else if(values[RegisterFormKeys.ConfirmPassword] !== values[RegisterFormKeys.Password]){
            setErrorMessage('Confirm Password ana Password must be the same!');
        }

        else {
           setErrorMessage('');
        }
    }
   

    return(
        <>
        <section id="register-page" className="content auth">
  <form id="register" onSubmit={onSubmit}>
    <div className="container">
      <div className="brand-logo" />
      <h1>Register</h1>
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name={RegisterFormKeys.Email}
        placeholder="maria@email.com"
        onChange={onChange}
        value={values[RegisterFormKeys.Email]}
      />
      <label htmlFor="pass">Password:</label>
      <input type="password" 
      name={RegisterFormKeys.Password} 
      id="register-password"
      onChange={onChange}
      onBlur={validatePasswordHandler}
      value={values[RegisterFormKeys.Password]}
       />
       {errorMessage && (<p style={{color:"red", fontSize:"17px"}}>{errorMessage}</p>)}
      <label htmlFor="con-pass">Confirm Password:</label>
      <input type="password"
       name="confirm-password"
        id="confirm-password" 
        onChange={onChange}
        onBlur={validatePasswordHandler}
        value={values[RegisterFormKeys.ConfirmPassword]}
        />
         {errorMessage && (<p style={{color:"red", fontSize:"17px"}}>{errorMessage}</p>)}
      <input className="btn submit" type="submit" defaultValue="Register" disabled={Object.values(errorMessage).some(x=>x)}/>
      <p className="field">
        <span>
          If you already have profile click <a href="/login">here</a>
        </span>
      </p>
    </div>
  </form>
</section>

        </>
    )
  }