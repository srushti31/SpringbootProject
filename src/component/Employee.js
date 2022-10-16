import React from "react";
import { Card,CardBody,CardTitle,CardSubtitle,CardText,CardFooter,Button,Container,}
from "reactstrap";



const Employee=({ employee})=>{
    return(
        

        
            <table>
                <td width={100}> {employee.id}</td>
                <td width={180}> {employee.firstName}</td>
                <td width={300}>{employee.lastName}</td>
                <td width={125}>{employee.deptId}</td>
                </table>
  



    )


}

export default Employee;