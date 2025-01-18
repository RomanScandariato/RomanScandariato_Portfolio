// import { useEffect, useRef } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Landing() {
  const navigate = useNavigate();
  
  return (
    <Container className="mt-5">
      <Row>
        <Col xs={12} md={6}>
          <div style={{ marginTop: '100px' }}>
            <h1 style={{ fontSize: '4rem' }}>Welcome to My Portfolio</h1>
            <h5>This is a brief introduction or description.</h5>
          </div>
        </Col>
        <Col xs={12} md={6}>
          <img
            src="/images/test_main_img.png"
            alt="Main Portfolio Picture"
            className="img-fluid"
            style={{ width: '90%', height: 'auto' }}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="mt-5">
            <h1 style={{ fontSize: '4rem'  }}>Projects</h1>
          </div>
        </Col>
      </Row>
      <Row>
        <Col className="mt-5">
          <img
            src="/images/MaypoDeluxeMain.png"
            alt="Project Image 1"
            className="img-fluid"
            style={{ width: '50%', height: 'auto' }}
          />
          <h5 style={{ marginTop: '20px' }}>Maypo Deluxe</h5>
          <p style={{ marginTop: '20px' }}>Full Stack Web App Development</p>
          <Button className="read-more-btn" onClick={() => navigate('/ProjectOne')}>Read more</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Landing;