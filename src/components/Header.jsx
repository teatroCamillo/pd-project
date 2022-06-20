import React from 'react';
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
  return (
    <Container className="h-25">
        <header>
            <Navbar
                style={{
                borderBottom: "solid 1px",
                paddingBottom: "1rem",
                }}
                >
                <Container className="justify-content-center">
                    <Nav>
                        <Nav.Link ><Link to="/">Home</Link></Nav.Link>
                        <Nav.Link ><Link to="/login">Login</Link></Nav.Link>
                        <Nav.Link ><Link to="/risk">FormRisk</Link></Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </header>
    </Container>
  )
}

export default Header