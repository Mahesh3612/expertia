import { useState } from "react"
import { useNavigate } from "react-router-dom";

 export const AddJob = () =>{

    const [data,setData] = useState({});

    const navigate = useNavigate()

    const [error,setError] = useState(false)



    async function addProduct(){

        if(!data.name || !data.tech || !data.experience || !data.openings || !data.salary){
            setError(true)
            return false
        }

        let result = await fetch("http://localhost:5000/addproduct",{
            method:"post",
            body:JSON.stringify(data),
            headers:{
                "Content-Type":"application/json"
            }
        })

        result = await result.json();
        console.log(result)
        navigate("/")

    }

    function addJob(e){
        const {name,value} = e.target;
        setData({...data,[name]:value})
    }

    return(
        <div className="product">
            <h1>add product</h1>
            <input type="text" placeholder="Enter company name" className="inputBox" onChange={addJob} name="name" />
            {error && !data.name && <span className="invalid-input">Enter name</span>}
            <input type="text" placeholder="Enter technology required" className="inputBox" onChange={addJob} name="tech"/>
            {error && !data.tech && <span className="invalid-input">Enter  tech</span>}
            <input type="text" placeholder="Enter company openings" className="inputBox" onChange={addJob} name="openings"/>
            {error && !data.openings && <span className="invalid-input">Enter openings</span>}
            <input type="text" placeholder="Enter experience" className="inputBox" onChange={addJob} name="experience"/>
            {error && !data.experience && <span className="invalid-input">Enter experience require</span>}
            <input type="text" placeholder="Enter Salary" className="inputBox" onChange={addJob} name="salary"/>
            {error && !data.salary && <span className="invalid-input">Enter salary</span>}
            <button className="appButton" onClick={addProduct}>Add Job</button>
        </div>
    )
}