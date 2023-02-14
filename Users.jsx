import style from "./home.module.css"
import { Link } from "react-router-dom"
import axios from "axios"
import { useEffect, useState } from "react"

const Users = () =>{

    let [State,setState] = useState([])

    useEffect(()=>{
        axios.get("http://localhost:3000/content")
        .then((response)=>{
            setState(response.data)
        })
    },[])

     let deleteData =(a) =>{
        alert("Are you sure to delete")
        axios.delete(`http://localhost:3000/content/${a}`)
        window.location.assign("/user")
     }
    return(
        <div id={style.profile}>
            {State.map((x)=>{
                return(
                    <div id={style.box}>
                    <table>
                        <tr>
                            <td colSpan="2">Employe {x.id}</td>
                        </tr>
                        <tr>
                            <td>Name</td>
                            <td>{x.name}</td>
                        </tr>
                        <tr>
                            <td>Salary</td>
                            <td>{x.salary}</td>
                        </tr>
                        <tr>
                            <td>Company</td>
                            <td>{x.company}</td>
                        </tr>
                        <tr>
                            <td><Link path to={`/edituser/${x.id}`}>Edit</Link></td>
                            <td><button id={style.Btn} onClick={()=>{deleteData(x.id)}}>Delete</button></td>
                        </tr>
                    </table>
                    </div>
                )
            })


            }

        </div>
    )
}
export default Users