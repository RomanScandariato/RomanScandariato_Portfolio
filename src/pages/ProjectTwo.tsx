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
            <h5>This was a group project including me and three other developers. This project was a very intense and difficult project with all the funtionality that was needed for it to work properly. The app was designed to inspire users to try new exercises and keep track of the exercises that work for them. After creating a free account, the user will be able to look up exercises by the muscle they are targeting for the workout, save the exercises they like most, update them if needed, and delete the more entry level exercises as they gain experience. This was a difficult website to make when it came to the funtionality but was super rewarding to work on. The stack we used was Typescript, React, Node.js, and MongoDB. It was such a challenge but was worth it in the end.</h5>
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