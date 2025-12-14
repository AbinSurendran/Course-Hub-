import React, { useState } from 'react'
import { Navbar, Nav, Container, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Header.css'




function Header() {
  const [expanded, setExpanded] = useState(false)

  const handleNavClick = () => {
    setExpanded(false)
  }

  return (
    <>
      <Navbar expand="lg" className="custom-navbar" fixed="top" expanded={expanded}>
        <Container>
          <Navbar.Brand as={Link} to="/" className="navbar-brand-custom">
            <i className="bi bi-mortarboard-fill me-2"></i>
            CourseHub
          </Navbar.Brand>
          <Navbar.Toggle 
            aria-controls="basic-navbar-nav" 
            onClick={() => setExpanded(expanded ? false : 'expanded')}
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto" onClick={handleNavClick}>
              <Nav.Link as={Link} to="/" className="nav-link-custom">Home</Nav.Link>
              <Nav.Link as={Link} to="/courses" className="nav-link-custom">Courses</Nav.Link>
              <Nav.Link as={Link} to="/about" className="nav-link-custom">About Us</Nav.Link>
              <Nav.Link as={Link} to="/contact" className="nav-link-custom">Contact</Nav.Link>
            </Nav>
            <div className="d-flex gap-2" onClick={handleNavClick}>
              <Button 
                variant="outline-light" 
                as={Link} 
                to="/signin"
                className="btn-custom"
              >
                Sign In
              </Button>
              <Button 
                variant="light" 
                as={Link} 
                to="/signup"
                className="btn-custom"
              >
                Sign Up
              </Button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </>
  )
}

export default Header







