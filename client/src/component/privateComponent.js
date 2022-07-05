
import { Outlet,Navigate } from "react-router-dom";


export const Privatecomponent = () =>{
    
    const auth = localStorage.getItem("login");

    return auth?<Outlet/>:<Navigate to="/signup"/>
}