import React,{useEffect} from "react";



const Home =()=>{
    useEffect(()=>{
        document.title="Home || HrMS"
    },[]);
    return(
        <div className="text-center">
   
                <h1>HRMS</h1><p></p>
                    
                    <p className="text-center my-5">An HRMS, or human resources management system, is a suite of software applications used to manage human resources and related processes throughout the employee lifecycle. An HRMS enables a company to fully understand its workforce while staying compliant with changing tax laws and labor regulations.</p>

                    <p>HR leaders and staff are the primary users, given that they run day-to-day workforce operations and are responsible for compliance and performance reporting. However, HR isn’t the only department that benefits. Companies can empower managers and employees with self-service for common tasks—an important selling point for younger hires. Executives can use an HRMS to generate data on workforce trends and their business implications.</p>

        </div>
    )
}
export default Home;