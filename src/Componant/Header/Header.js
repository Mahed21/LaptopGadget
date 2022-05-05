import React from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'
import { useNavigate } from "react-router-dom";
import UseAuth from '../../Context/UseAuth';

const Header = () => {
  const navigate = useNavigate();
  const {user,logOut} =UseAuth();
    return (
<div>
 <Navbar bg="" expand="lg" className="navbar-background">
  <Container fluid>
    <Navbar.Brand href="#" className="nav-text ms-5">Navbar scroll</Navbar.Brand>
    <Navbar.Toggle className="toggle" aria-controls="navbarScroll"/>
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="/home" className="nav-text">Home</Nav.Link>
        <Nav.Link href="#action2" className="nav-text">Link</Nav.Link>
       
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search "
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />

        <Button variant="outline-success" className="nav-button me-2 p-2">Builder</Button>
        {
        user.email? <Button variant="outline-success" className="nav-button me-3 p-2"
        onClick={logOut}>LogOut</Button>:
        <Button variant="outline-success" className="nav-button me-3 p-2"
        onClick={()=>navigate("/login")}>LogIn
        </Button>
        }
        

      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
</div>
    );
};

export default Header;