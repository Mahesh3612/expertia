import { useEffect, useState } from "react"
import { Link } from "react-router-dom";



export const JobList = () => {

    const [data, setData] = useState([]);
   
  

    useEffect(() => {
        getData()
    }, [])


    async function getData() {
        let result = await fetch("http://localhost:5000/product")
        result = await result.json()
        setData(result)
    }

    async function handleDelete(id){
   await fetch(`http://localhost:5000/product/${id}`,{
         method:"Delete"
     })
     getData()
   
    }

    async function handleSearch(e){
      let text = e.target.value
      if(text){
      let result = await fetch(`http://localhost:5000/search/${text}`)
      result = await result.json();
      setData(result)
    }else{
       getData()
    }
  
    }

    async function sortAsc(){
        let result = await fetch("http://localhost:5000/sortAsc")
        result = await result.json();
        setData(result)
    }

    async function sortDsc(){
        let result = await fetch("http://localhost:5000/sortDsc")
        result = await result.json();
        setData(result)
    }



    return (
        <div className="product-list" >
        <input placeholder="search" onChange={handleSearch}/>
        <button onClick={sortAsc}>sortAsc</button>
        <button onClick={sortDsc}>sortDsc</button>
            <ul>
                <li>Sr.No</li>
                <li>Name</li>
                <li>Technology</li>
                <li>Openings</li>
                <li>Experience</li>
                <li>Salary</li>
                <li>Delete</li>
                <li>Edit</li>
            </ul>

            {data.map((el,i)=>{
              return <ul key={i}>
                <li>{i+1}</li>
                <li>{el.name}</li>
                <li>{el.tech}</li>
                <li>{el.openings}</li>
                <li>{el.experience}</li>
                <li>{el.salary}</li>
                <li><button onClick={()=>handleDelete(el._id)}>Delete</button></li>
                <li><Link to={`/update/${el._id}`}><button>Edit</button></Link></li>
            </ul>

            })}



        </div>
    )
}