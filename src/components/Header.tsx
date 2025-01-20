import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function Header() {
  const textStyle = { color: 'white' };
  const containerStyle = { padding: '20px 0' };

  return (
    <Container className="navbar-style" style={containerStyle}>
      <Navbar>
        <Container className="nav-wrap">
          <Navbar.Brand as={NavLink} to="/" style={textStyle}>Roman Scandariato</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/" style={textStyle}>Home</Nav.Link>
            <Nav.Link as={NavLink} to="/contact" style={textStyle}>Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </Container>
  )
}

export default Header;
