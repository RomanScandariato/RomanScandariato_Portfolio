import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

function ProjectTwo() {
  return (
    <Container className="mt-3">
      <Row>
        <Col>
          <div className="text-center">
            <h1 style={{ fontSize: '4rem' }}>Project 2</h1>
          </div>
          <img
            src="/images/FirstStepMain.png"
            alt="Project 2 Main Image"
            className="img-fluid mt-5"
          />
          <h1 style={{ fontSize: '6rem', marginTop: '50px', fontWeight: '400' }}>FirstStep Fitness</h1>
          <div className="links-container" style={{ marginTop: '65px' }}>
            <Row>
              <Col>
                <a href="https://github.com/RomanScandariato/FirstStep_Fitness" target="_blank" rel="noopener noreferrer" className="no-underline" style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                  <FontAwesomeIcon icon={faGithub} size="3x" style={{ color: 'white', marginRight: '20px' }} />
                  <h2 style={{ fontSize: '1.5rem', color: 'white' }}>github.com/FirstStep_Fitness</h2>
                </a>
              </Col>
            </Row>
            <Row>
              <Col>
                <a href="https://firststep-fitness.onrender.com" target="_blank" rel="noopener noreferrer" className="no-underline" style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                  <FontAwesomeIcon icon={faGlobe} size="3x" style={{ color: 'white', marginRight: '20px' }} />
                  <h2 style={{ fontSize: '1.5rem', color: 'white' }}>firststep-fitness.onrender.com</h2>
                </a>
              </Col>
            </Row>
          </div>
          <div className="mt-3">
            <h5>This project was a collaborative effort between myself and three other developers, designed to create a web application that inspires users to try new exercises and manage their fitness routines. The app allows users to create a free account, browse exercises by targeted muscle groups, save their favorites, update routines as they progress, and delete beginner-level exercises as their skills improve. Balancing usability with robust functionality made the project both challenging and rewarding.</h5>
            <h5 className="mt-3">We built the platform using TypeScript, React, Node.js, and MongoDB, leveraging each tool to create a responsive interface and efficient data management system. The process demanded technical expertise, problem-solving, and teamwork to overcome hurdles and deliver a smooth user experience. Despite its complexity, completing this project was deeply fulfilling and reinforced the value of collaboration and perseverance in tackling ambitious goals.</h5>
          </div>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <img
            src="/images/WorkoutPlan.png"
            alt="Project 2 Workout Plan Page"
            className="img-fluid"
            style={{ width: '100%', height: 'auto' }}
          />
          <h5 style={{ marginTop: '30px' }}>Workout Plan Page</h5>
        </Col>
        <Col>
          <img
            src="/images/AddExercise.png"
            alt="Project 2 Add Exercise Page"
            className="img-fluid"
            style={{ width: '100%', height: 'auto' }}
          />
          <h5 style={{ marginTop: '30px', marginBottom: '50px' }}>Add Exercise Page</h5>
        </Col>
      </Row>
    </Container>
  );
}

export default ProjectTwo;