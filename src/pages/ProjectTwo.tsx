import { Container, Row, Col } from 'react-bootstrap';

function ProjectTwo() {
  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <img
            src="/images/FirstStepMain.png"
            alt="Project 2 Main Image"
            className="img-fluid"
          />
          <h1 style={{ fontSize: '6rem', marginTop: '50px', fontWeight: '400' }}>FirstStep Fitness</h1>
          <div className="links-container" style={{ marginTop: '65px' }}>
            <p>
              Github Link: <a href="https://github.com/RomanScandariato/FirstStep_Fitness" target="_blank" rel="noopener noreferrer">https://github.com/RomanScandariato/FirstStep_Fitness</a>
            </p>
            <p>
              Website Link: <a href="https://firststep-fitness.onrender.com/" target="_blank" rel="noopener noreferrer">https://firststep-fitness.onrender.com/</a>
            </p>
            <p>
            Flourishing Band with needs for website development to further push music and spread the love and joy of what they love!
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ProjectTwo;