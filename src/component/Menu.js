import React from "react";
import {ListGroup,ListGroupItem} from "reactstrap";
import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";

const Menu=()=>{

    return(
        <ListGroup>
            <Link className="list-group-item list-group-item" tag="a" to="/home" action>
                Home
            </Link>
            <Link className="list-group-item list-group-item" tag="a" to="/add-employee" action>
                Add/Update Employee            
            </Link>
            <Link className="list-group-item list-group-item" tag="a" to ="/view-employee" action>
                View Employees        
            </Link>


        </ListGroup>

    )
}
export default Menu;