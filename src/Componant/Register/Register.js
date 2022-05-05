import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import UseAuth from '../../Context/UseAuth';
import { useNavigate } from 'react-router';

const Register = () => {
    const [Email,setEmail]=useState({})
    const [Pass,setPass]=useState({})
    const [ConPass,setConPass]=useState({})
    const [name,setName]=useState({})
    const {SignEmail}=UseAuth()
    let navigate = useNavigate();
   
  
    const HandleEmail=(e)=>{
    
        setEmail(e.target.value)
    }
    const HandlePass=(e)=>
    {
        setPass(e.target.value);
    }
    const HandleConPass=(e)=>
    {
        setConPass(e.target.value);
    }
    const handleName=(e)=>
    {
      setName(e.target.value)
    }
    const FormSubmit=(e)=>
    {
        e.preventDefault();

    }
    const Register=(e)=>
    {
        e.preventDefault();
        // console.log(Pass)
        // console.log(ConPass)
       //console.log(Pass.length)
        if(Pass.length<6)
       {
           alert('Password Should be at least 6 digit')
       }
        if(Pass===ConPass)
        {
            const passRegex=/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@$%^&*])?[a-zA-Z0-9!@$%^&*]{6,15}/g
           // console.log(Pass.match(passRegex).join(''))
            if(Pass.match(passRegex)?.join('')===Pass)
            {
                SignEmail(Email,Pass,navigate);
            }
            else{
                alert('Give Strong Password atleast 1 Uppercase 1 digit length should be 6 to 15')
            }

            
        }
        else{
            alert('Password and Confirm Password is not match')
        }
    }
   
    return (
        <div>
            <div className='form-class'>
            <div className='row'>
                <div className='col-lg-4'>

                </div>

                <div className='col-lg-4 form-beck mt-5 mb-5'>
                 <h3 className='text-center mt-2 login'>Login Form</h3>
                 <div className='mt-5'>
                 <Form onClick={FormSubmit}>

                 <Form.Group as={Row} className="mb-3 " controlId="formPlaintextEmail">
                        <Form.Label column sm="2">
                       Name
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="Name" placeholder="Name" 
                         onBlur={handleName}/>
                        
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3 " controlId="formPlaintextEmail">
                        <Form.Label column sm="2">
                        Email
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="email" placeholder="Email" 
                         onBlur={HandleEmail}/>
                        
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
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        <Form.Label column sm="2">
                       Confirm Password
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="password" placeholder=" Confirm Password" onBlur={HandleConPass}/>
                        </Col>
                    </Form.Group>
                    <div className='d-flex justify-content-center'>
                    <Button className='ms-2 mt-3 btn' onClick={Register}>Register</Button>

                    <Link to="/login" className='ms-2 mt-3'>Already Registerd?</Link>
                    </div>

                   
                    </Form>
                 </div>
                </div>
                
                <div className='col-lg-4'>

                </div>

            </div>
          
        </div>
           
        </div>
    );
};

export default Register;