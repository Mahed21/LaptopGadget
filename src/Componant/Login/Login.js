import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { Link} from 'react-router-dom';
import UseAuth from '../../Context/UseAuth';
import './Login.css'
import { useNavigate } from 'react-router';


const Login = () => {
    const {GoogleSignIn,user} =UseAuth();
    const {RegisterdEmail}=UseAuth();
    let navigate = useNavigate();
    const [email,setEmail]=useState({})
    const [pass,setPass]=useState({})
   
   if(user.email)
   {
       navigate('/')
   }
    const HandleEmail=(e)=>
    {
        setEmail(e.target.value)

    }
    const HandlePass=(e)=>
    {
        setPass(e.target.value)

    }
    const Login1=(e)=>
    {
        

        e.preventDefault();
        RegisterdEmail(email,pass,navigate)
    }
 
    return (
        
        
        <div className='form-class'>
           
            <div className='row'>
                <div className='col-lg-4'>

                </div>

                <div className='col-lg-4 form-beck mt-5 mb-5'>
                 <h3 className='text-center mt-2 login'>Registartion Form</h3>
                 <div className='mt-5'>
                 <Form>
                    <Form.Group as={Row} className="mb-3 " controlId="formPlaintextEmail">
                        <Form.Label column sm="2">
                        Email
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="email" placeholder="Password" onBlur={HandleEmail}/>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        <Form.Label column sm="2">
                        Password
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="password" placeholder="Password" onBlur={HandlePass}/>
                        </Col>
                    </Form.Group>
                    <div className='d-flex justify-content-center'>
                    <Button className='ms-2 mt-3 btn' onClick={Login1} >Login</Button>

                    <Link to="/register" className='ms-2 mt-3'>Not Register?</Link>
                    </div>

                    <div className='d-flex justify-content-center'>
                    <Button className='ms-2 mt-3 btn' onClick={GoogleSignIn}>Login With Google</Button>
                    </div>
                    </Form>
                 </div>
                </div>
                
                <div className='col-lg-4'>

                </div>

            </div>
          
        </div>
    );
};

export default Login;