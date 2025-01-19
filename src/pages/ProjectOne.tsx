import { Container, Row, Col } from 'react-bootstrap';

function ProjectOne() {
  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <img
            src="/images/MaypoDeluxeMain.png"
            alt="Project 1 Main Image"
            className="img-fluid"
          />
          <h1 style={{ fontSize: '6rem', marginTop: '50px', fontWeight: '400' }}>Maypo Deluxe</h1>
          <div className="links-container" style={{ marginTop: '65px' }}>
            <p>
              Github Link: <a href="https://github.com/RomanScandariato/Maypo_Deluxe_Website" target="_blank" rel="noopener noreferrer">https://github.com/RomanScandariato/Maypo_Deluxe_Website</a>
            </p>
            <p>
              Website Link: <a href="https://maypodeluxe.com" target="_blank" rel="noopener noreferrer">https://maypodeluxe.com</a>
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

export default ProjectOne;