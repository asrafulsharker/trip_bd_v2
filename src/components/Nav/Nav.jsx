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
                    <Nav.Link className="navItemLink" href="/">Home</Nav.Link>
                    <Nav.Link className="navItemLink" href="/explore">Explore</Nav.Link>
                    <Nav.Link className="navItemLink" href="/featured">Featured</Nav.Link>
                    <Nav.Link className="navItemLink" href="/guides">Guides</Nav.Link>
                    <Nav.Link className="navItemLink" href="/testimonial">Testimonials</Nav.Link>
                    <Nav.Link className="navItemLink" href="/trending">Trending</Nav.Link>
                    <Nav.Link className="navItemLink" href="/contact">Contact Us</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
          </div>
        </div>
    )
}

export default Nav2;
