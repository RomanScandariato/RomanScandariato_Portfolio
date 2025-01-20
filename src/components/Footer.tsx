import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-text" style={{ backgroundColor: '#22242E', color: '#fff' }}>
      <Container className="py-4">
        <Row className="align-items-center">
          <Col>
            <p className="mb-0">
              &copy; {currentYear} - All Rights Reserved
            </p>
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