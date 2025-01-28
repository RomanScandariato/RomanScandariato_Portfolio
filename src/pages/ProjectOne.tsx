import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

function ProjectOne() {
  return (
    <Container className="mt-3">
      <Row>
        <Col>
          <div className="text-center">
            <h1 style={{ fontSize: '4rem' }}>Project 1</h1>
          </div>
          <img
            src="/images/MaypoDeluxeMain.png"
            alt="Project 1 Main Image"
            className="img-fluid mt-5"
          />
          <h1 style={{ fontSize: '6rem', marginTop: '50px', fontWeight: '400' }}>Maypo Deluxe</h1>
          <div className="links-container" style={{ marginTop: '65px' }}>
            <Row>
              <Col>
                <a href="https://github.com/RomanScandariato/Maypo_Deluxe_Website" target="_blank" rel="noopener noreferrer" className="no-underline" style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                  <FontAwesomeIcon icon={faGithub} size="3x" style={{ color: 'white', marginRight: '20px' }} />
                  <h2 style={{ fontSize: '1.5rem', color: 'white' }}>github.com/Maypo_Deluxe_Website</h2>
                </a>
              </Col>
            </Row>
            <Row>
              <Col>
                <a href="https://maypodeluxe.com" target="_blank" rel="noopener noreferrer" className="no-underline" style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                  <FontAwesomeIcon icon={faGlobe} size="3x" style={{ color: 'white', marginRight: '20px' }} />
                  <h2 style={{ fontSize: '1.5rem', color: 'white' }}>maypodeluxe.com</h2>
                </a>
              </Col>
            </Row>
          </div>
          <div className="text-center">
            <h3>This Project was </h3>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ProjectOne;