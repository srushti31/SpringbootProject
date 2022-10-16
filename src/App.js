import logo from './logo.svg';
import './App.css';
import Home from "./component/home";
import Employee  from './component/Employee';

import Header from './component/Header';
import {Button,Container,Row,Col} from "reactstrap";
import {ToastContainer , toast} from "react-toastify";
import AddEmployee from './component/AddEmployee';
import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";
import Menu from './component/Menu';
import Allemployees from './component/AllEmployees';




function App() {

 
  const notify = () => {
    toast.error("Wow so easy!",{
      position: "top-center"
    });
  };
  return (
    <div>
 <Router>
 <ToastContainer/>  
  <Container>
    <Header/>
    <Row>
      <Col md={4}><Menu/></Col>
      <Col md={8}>
       
        <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route  path="/add-employee" element={<AddEmployee/>}/>
        <Route path="/view-employee" element={<Allemployees/>}/>
        </Routes>

        </Col>
    </Row>
  </Container>

 </Router>
</div>
  )
    ;
}

export default App;
