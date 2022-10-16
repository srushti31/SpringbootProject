import React ,{Fragment,useEffect, useState,event,e,Component,target} from "react";
import {Form, FormGroup , Input, Button, Container} from "reactstrap";
import axios from "axios";
import base_url from "../api/bootapi";
import {useForm} from "react-hook-form";
const AddEmployee=()=>{
    useEffect(()=>{
        document.title="Add Employee || HrMS"
    },[]);

    const [employee,setEmployees]=useState({});

    const {register,handleSubmit,formState: {error}} = useForm();
    //form handler
    const handleForm=(event)=>{

        console.log(employee);
        postData(employee);
        event.preventDefault();
    }


    //add function to add data to db

    const postData=(data)=>{
        axios.put(`/employeedetailsput/1`,data).then(
            (response)=>{
                console.log(response);
                console.log("success");

            },(error=>{

                console.log(error);
            })
        );

    };


    return(
        <Fragment>
            <h1 className="text-center my-3">Fill Employee Details</h1>
        <Form onSubmit={handleForm}>
            <FormGroup>
                <label name="id">Employee Id</label>
                <Input type="number" placeholder="Enter Id Here"  name="id"  id="id" min="1" max="99"
             
                onChange={(event)=>{
                    setEmployees({...employee,id:event.target.value})
                }}
                />
            </FormGroup>
            <FormGroup>
                <label name="firstName">Employee First Name</label>
                <Input type="text" placeholder="Enter First Name"  name="firstName"  id="firstName" minLength={3}
                maxLength={15}
                               
                                onChange={(event)=>{
                                    setEmployees({...employee,firstName:event.target.value})
                                }}/>
            </FormGroup>
            <FormGroup>
                <label name="lastName">Employee Last Name</label>
                <Input type="text" placeholder="Enter Last Name"  name="lastname"  id="lastName" minLength={3}
                maxLength={15}
                                onChange={(event)=>{
                                    setEmployees({...employee,lastName:event.target.value})
                                }}
                                />
            </FormGroup>
            <FormGroup>
                <label name="emailId">Employee Department Id</label>
                <Input type="string" placeholder="Enter Here for eg: AXC09"  name="emp-deptId"  id="emp-deptId" minLength={5}
                maxLength={5}
                
                onChange={(event)=>{
                    setEmployees({...employee,deptId:event.target.value})
                }}/>
            </FormGroup>
            <Container className="text-center">
            <Button type="submit" color="success">Add Employee</Button>
            <Button type="reset" color="warning ms-3">Clear</Button>
            </Container>
        </Form>
        </Fragment>
    )
}

export default AddEmployee;