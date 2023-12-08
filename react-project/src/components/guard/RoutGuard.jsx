import { useContext } from "react"
import { TodoContext } from "../contexts/TodoContexts"
import {  Navigate, Outlet } from "react-router-dom"
import Path from "../../path"


export default function RoutGuard(){

    const { isAuthenticated } = useContext(TodoContext)

    if(!isAuthenticated){
        return <Navigate  to={Path.Login}/>
    }

    return <Outlet />
        
    
}