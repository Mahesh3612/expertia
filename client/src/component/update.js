import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"




export const Update = () =>{


const {id} = useParams();
const [name,setName] = useState()
const [salary,setSalary] = useState()
const [tech,setTech] = useState()
const [openings,setOpenings] = useState()
const [experience,setExperience] = useState()
const navigate = useNavigate()



useEffect(()=>{
    console.log("hi")
    getData()
},[])


async function getData(){
    let result = await fetch(`http://localhost:5000/product/${id}`) 
    result = await result.json();
    setName(result.name)
    setTech(result.tech)
    setOpenings(result.openings)
    setSalary(result.salary)
    setExperience(result.experience)
}


    async function updateProduct(){
        let result = await fetch(`http://localhost:5000/product/${id}`,{
            method:"put",
            body:JSON.stringify({name,tech,openings,salary,experience}),
            headers:{
                "Content-Type":"application/json"
            }
        })
        console.log(result)
        navigate("/")
    }

        return(
            <div className="product">
                <h1>Update product</h1>
                <input type="text" placeholder="Enter  name" className="inputBox" onChange={(e)=>setName(e.target.value)}  value={name} />
    
                <input type="text" placeholder="Enter  salary" className="inputBox" onChange={(e)=>setSalary(e.target.value)}   value={salary}/>
    
                <input type="text" placeholder="Enter  technology" className="inputBox" onChange={(e)=>setTech(e.target.value)}   value={tech}/>
    
                <input type="text" placeholder="Enter  openings" className="inputBox" onChange={(e)=>setOpenings(e.target.value)}   value={openings}/>

                <input type="text" placeholder="Enter experience" className="inputBox" onChange={(e)=>setExperience(e.target.value)}   value={experience}/>
    
                <button className="appButton" onClick={updateProduct}>Update Product</button>
            </div>
        )
    
}