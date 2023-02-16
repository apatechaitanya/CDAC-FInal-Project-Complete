import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';


function NavbarNew() {
  return (
    <Navbar  className=" sticky-top" style={{ backgroundColor: "#000000" ,color:'white' }}  expand="lg">
      <Container fluid className="NavbarNew sticky-top">
        <Navbar.Brand href="#" style={{ textDecoration: "none", color: "white" }}>On Door Services</Navbar.Brand>
        <div >
        <Navbar.Toggle aria-controls="navbarScroll d-flex" />
        <Navbar.Collapse id="navbarScroll">

      
          <Nav 
            className="me-auto my-2 my-lg-0 "
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={Link} to={"/Home"} style={{ textDecoration: "none", color: "white" }}>Home</Nav.Link>

            <Nav.Link href="#action2" style={{ textDecoration: "none", color: "white" }}>Contact Us</Nav.Link>

            <Nav.Link href="#action2" style={{ textDecoration: "none", color: "white" }}>Services</Nav.Link>

            <NavDropdown title="Login" id="navbarScrollingDropdown" style={{ textDecoration: "none", color: "white" }}>
              <NavDropdown.Item href="#action3" style={{ textDecoration: "none", color: "white" }}>Admin</NavDropdown.Item>
              <NavDropdown.Item href="#action4" style={{ textDecoration: "none", color: "white" }}>
              Customer
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5" style={{ textDecoration: "none", color: "white" }}>
              Worker
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Register" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3" style={{ textDecoration: "none", color: "white" }}>Customer</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5" style={{ textDecoration: "none", color: "white" }}>
              Worker
              </NavDropdown.Item>
            </NavDropdown>

            
          </Nav>
          
            
            
          
        </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
}

export default NavbarNew;
     