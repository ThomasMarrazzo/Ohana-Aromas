/* import { Container, Nav, Navbar } from "react-bootstrap"; */

import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import CardWidget from "./CartWidget";
import "./CartWidget.css"

const NavBar = () =>{
    return(
      <Navbar collapseOnSelect expand="lg" className="nav">
      <Container>
        <Navbar.Brand href="#home">OHANA</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Inicio</Nav.Link>
            <Nav.Link href="#pricing">Novedades</Nav.Link>
            <NavDropdown title="Tienda" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Perfuminas</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Difusores
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Aerosoles</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Nosotros</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Contactanos
            </Nav.Link>
          </Nav>
          <CardWidget/>
        </Navbar.Collapse>
      </Container>
    </Navbar>




/*         <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            Tienda de productos
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar> */
    )
}

export default NavBar;