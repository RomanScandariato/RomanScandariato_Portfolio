import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-text" style={{ backgroundColor: '#0E091C', color: '#fff' }}>
      <Container className="py-5">
        <Row className="align-items-center">
          <Col>
            <p className="mb-0">
              &copy; {currentYear} - All Rights Reserved
            </p>
          </Col>
          <Col className="text-end">
            <p className="mb-0">
              Dev & Design by Roman Scandariato
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;