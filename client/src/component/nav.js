import { Link, useNavigate } from "react-router-dom"

export const Nav = () => {

    let auth = localStorage.getItem("login")
    let navigate = useNavigate()

    function logOut(){
        localStorage.clear();
        navigate("/signup")
    }


    return (
        <div>
            <ul className="nav-ul">
                {auth ?<ul><li><Link to="/">Jobs</Link></li>
                <li><Link to="/add">Add Job</Link></li>
                 <li><Link to="/logout" onClick={()=>logOut()}>logout</Link></li></ul>
                 : <ul className="nav-ul nav-right">
                    <li><Link to="/login">login</Link></li>
                    <li><Link to="/signup">signup</Link></li>
                </ul>}

            </ul>
        </div>
    )
}




