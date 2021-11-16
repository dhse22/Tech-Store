import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Logo  from '../media/Logo.png'

const Navbars = () => {
    return (
            <Navbar bg="dark" variant="dark">
                <Container>
                <Navbar.Brand><img className="Logo" src="https://w7.pngwing.com/pngs/633/104/png-transparent-technological-innovation-system-technology-computer-icons-research-electronics-innovation-system.png" alt="logo" /></Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link ><Link to='/'>Home</Link></Nav.Link>
                        <Nav.Link><Link to='/features'>Features</Link></Nav.Link>
                    </Nav>
            </Container>
            <button className="btn btn-primary">Login</button>
            </Navbar>   
    )
}

export default Navbars
