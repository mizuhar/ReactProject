import { useContext } from "react"
import { TodoContext } from "../contexts/TodoContexts"
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";
import * as authService from '../../services/authService'

export default function Logout(){

const { logoutHandler } = useContext(TodoContext)

const navigate = useNavigate()

useEffect(() =>{
    authService.logout()
    .then(()=>{  logoutHandler(),
        navigate(Path.Home)})
    .catch(()=>{
            logoutHandler()
        })
},[])

    return null
}