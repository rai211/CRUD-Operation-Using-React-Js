import style from "./home.module.css"
import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

const EditUser =() =>{

    let[name,setName] = useState("")
    let[salary ,setSalary] = useState("")
    let[company,setCompany] = useState("")

    
    let {index} = useParams()
    let navigate =useNavigate()  



    useEffect(()=>{
        axios.get(`http://localhost:3000/content/${index}`)
        .then((response)=>{
            setName(response.data.name)
            setSalary(response.data.salary)
            setCompany(response.data.company)
        })
    },[])


    let nameData =(e) =>{
        setName(e.target.value)
    }
    let salaryData =(e) =>{
        setSalary(e.target.value)
    }
    let companyData =(e) =>{
        setCompany (e.target.value)
    }

    let formHandle =(e) =>{
        e.preventDefault()
        let payload = {name , salary ,company}
        axios.put(`http://localhost:3000/content/${index}`, payload)
        .then(()=>{
            console.log("data has been updated");
        })
        navigate("/user")
 }

     return(
        <div id={style.myform}>
            <form action="" id={style.form}>
                <table>
                    <tr>
                        <td><label htmlFor="">Name</label></td>
                        <td><input type="text" value={name} onChange={nameData}/></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="">Salary</label></td>
                        <td><input type="text" value={salary} onChange={salaryData} /></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="">Company</label></td>
                        <td><input type="text"  value={company} onChange={companyData}/></td>
                    </tr><br />
                    <tr>
                        <td colSpan="2">
                            <button onClick={formHandle} id={style.btn}>Submit</button>
                        </td>
                    </tr>
                </table>
            </form>

        </div>
    )
} 
export default EditUser