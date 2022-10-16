import React ,{useState, useEffect}from "react"
import Employee from "./Employee"
import { Button  } from "reactstrap";
import base_url from "../api/bootapi";
import axios from "axios";
import {ToastContainer , toast} from "react-toastify";
import table from "./table"

const Allemployees=()=>{

    useEffect(()=>{
        document.title="View Employees || HrMS"
    },[]);

    //function to call server
    const getEmployees=()=>{
        axios.get(`${base_url}/employees`).then(
        (response)=>{
            toast.success("employee data has been loaded",{
            toastId: 'success1'});
            setEmployees(response.data);
            console.log(response)
        },
        (error)=>{
            //for error
            console.log(error)
        }
        )
    }

    //calling server fucnt

    useEffect(() =>{

        getEmployees();

    },[]);

    const [employees,setEmployees]=useState([
        
            {id:"12",firstname:"Srushti",lasttname:"Patil",deptId:"AS064"},

        
    ])
    return(
<div className="text-center">
    
    <h1>Employee Details</h1>
    
    <table className="table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Dept Id</th>
                    </tr>
                </thead>
                </table>
    {
        
        employees.length>0?
        employees.map((item)=> <Employee key={item.id} employee={item} />


            ):"No Employees"
    }
</div>

    )

}

export default Allemployees;