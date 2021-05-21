import React from 'react'
import {Navbar,NavDropdown,Nav,FormGroup,Form,FormControl,Button} from 'react-bootstrap';
function Nav2() {
    return (
        <div>
            <div className="NavB ">
              <Navbar  expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="m-auto">
                    <Nav.Link className="navItemLink" href="#home">Home</Nav.Link>
                    <Nav.Link className="navItemLink" href="#link">Explore</Nav.Link>
                    <Nav.Link className="navItemLink" href="#link">Featured</Nav.Link>
                    <Nav.Link className="navItemLink" href="#link">Guides</Nav.Link>
                    <Nav.Link className="navItemLink" href="#link">Testimonials</Nav.Link>
                    <Nav.Link className="navItemLink" href="#link">Trending</Nav.Link>
                    <Nav.Link className="navItemLink" href="#link">Contact Us</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
          </div>
        </div>
    )
}

export default Nav2;
