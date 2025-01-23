// import { useEffect, useRef } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Landing() {
  const navigate = useNavigate();

  return (
    <Container>
      <Row>
        <Col xs={12} md={6}>
          <div style={{ marginTop: '100px' }}>
            <h1 style={{ fontSize: '4rem' }}>
              Hi, I'm <br />
              Roman Scandariato
            </h1>
            <h1 style={{ fontSize: '2rem', color: '#CC0133' }}>Software Engineer</h1>
            <h5 style={{ marginTop: '15px' }}>Earner demonstrated proficiency in web development focused on Full Stack languages in high demand. Through coding assignments and challenges augmented by three team projects, experience is gained in collaborating to build front-end and back-end web applications. Problem-solving skills are learned by researching and applying new skills independently. Graduates maintain a complete a portfolio of projects and demonstrate the ability to adapt and apply learning across industries and employers.</h5>
            <h5 style={{ marginTop: '35px' }}>Graduate from Rutgers Software Development Bootcamp</h5>
            <img
              src="/images/rut_badge.png"
              alt="Rutgers Badge"
              className="img-fluid"
              style={{ width: '20%', height: 'auto', marginTop: '20px' }}
            />
            <img
              src="/images/rut_cert.png"
              alt="Rutgers Certificate"
              className="img-fluid"
              style={{ width: '30%', height: 'auto', marginTop: '20px', marginLeft: '50px' }}
            />
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
            <h1 style={{ fontSize: '4rem' }}>Projects</h1>
          </div>
        </Col>
      </Row>
      <Row>
        <Col className="mt-5">
          <img
            src="/images/MaypoDeluxeMain.png"
            alt="Project Image 1"
            className="img-fluid"
            style={{ width: '100%', height: '70%' }}
          />
          <h5 style={{ marginTop: '20px' }}>Maypo Deluxe</h5>
          <p style={{ marginTop: '20px' }}>Full Stack Web App Development</p>
          <Button className="read-more-btn" onClick={() => navigate('/ProjectOne')}>Read more</Button>
        </Col>
        <Col className="mt-5">
          <img
            src="/images/FirstStepMain.png"
            alt="Project Image 2"
            className="img-fluid"
            style={{ width: '100%', height: '70%' }}
          />
          <h5 style={{ marginTop: '20px' }}>FirstStep Fitness</h5>
          <p style={{ marginTop: '20px' }}>Full Stack Web App Development</p>
          <Button className="read-more-btn" onClick={() => navigate('/ProjectTwo')}>Read more</Button>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col className="mt-5">
          <Row>
            <hr className="custom-hr" />
          </Row>
          <h2>“I see it, you know when I'm talking to you or when you've asked me questions or you're showing me something. I see that comprehension that's very rare at this point, and for 3 months in.. huge potential for you in the future. Keep that drive going because you have something here, and you're very far along in your understanding. Everybody here that's worked with you has to agree that Roman has been a big integral and a vital part of everybody's success.” - JD Tadlock</h2>
        </Col>
      </Row>
      <Row>
        <Col className="mt-5">
          <Row>
            <hr className="custom-hr" />
          </Row>
          <h2>“You should take pride in meeting the demands of this intensive and immersive educational experience. The Boot Camp requires participants to maintain an unwaveringly rapid pace, and these credentials document your success in resolving coding challenges – both as an individual and as a member of project-based teams. These credentials will remain an enduring symbol of your strength and resilience, and they affirm your ability to surmount steep challenges through hard work and creative problem solving.” - James R. Morris</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="mt-5">
            <Row>
              <hr className="custom-hr" />
            </Row>
            <h1 style={{ fontSize: '4rem' }}>Reach out and Connect!</h1>
          </div>
        </Col>
      </Row>
      <Row>
        <Col className="mt-5">
          <a href="https://github.com/RomanScandariato" target="_blank" rel="noopener noreferrer" className="no-underline" style={{ display: 'flex', alignItems: 'center', marginBottom: '20px'}}>
            <FontAwesomeIcon icon={faGithub} size="3x" style={{ color: 'white', marginRight: '20px' }} />
            <h2 style={{ fontSize: '1.5rem', color: 'white' }}>github.com/RomanScandariato</h2>
          </a>
        </Col>
      </Row>
      <Row>
        <Col>
        <a href="mailto:rocketr0man98@gmail.com" target="_blank" rel="noopener noreferrer" className="no-underline" style={{ display: 'flex', alignItems: 'center', marginBottom: '20px'}}>
                <FontAwesomeIcon icon={faEnvelope} size="3x" style={{ color: 'white', marginRight: '20px' }} />
                <h2 style={{ fontSize: '1.5rem', color: 'white' }}>rocketr0man98@gmail.com</h2>
              </a>
        </Col>
      </Row>
      <Row className="mb-5">
        <Col>
        <a href="https://www.linkedin.com/in/roman-scandariato-524469340" target="_blank" rel="noopener noreferrer" className="no-underline" style={{ display: 'flex', alignItems: 'center'}}>
                <FontAwesomeIcon icon={faLinkedin} size="3x" style={{ color: 'white', marginRight: '20px' }} />
                <h2 style={{ fontSize: '1.5rem', color: 'white' }}>linkedin.com/in/romanscandariato</h2>
              </a>
        </Col>
      </Row>
    </Container>
  );
}

export default Landing;