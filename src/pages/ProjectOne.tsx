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
          <div className="mt-3">
            <h5>It was an absolute pleasure to work on this project, which involved creating a fully functional and visually engaging website for an up-and-coming band that has garnered significant attention with over 1 million streams on their chart-topping hit, "Lonely Road". The band approached me seeking a complete overhaul of their outdated website. They were eager for a fresh, modern design that would captivate their audience and reflect the dynamic energy of their music.</h5>
            <h5 className="mt-3">To meet their needs, I utilized a combination of TypeScript and React to develop a sleek and user-friendly platform. The goal was to deliver a visually striking and responsive website that not only showcased their artistic identity but also provided an enhanced user experience. This project required careful attention to detail and was a joy to work on.</h5>
          </div>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <img
            src="/images/MaypoBio.png"
            alt="Project 1 Bio Page"
            className="img-fluid"
            style={{ width: '100%', height: 'auto' }}
          />
          <h5 style={{ marginTop: '30px' }}>Maypo Deluxe Biography</h5>
        </Col>
        <Col>
          <img
            src="/images/MaypoSongsPage.png"
            alt="Project 1 Songs Page"
            className="img-fluid"
            style={{ width: '100%', height: 'auto' }}
          />
          <h5 style={{ marginTop: '30px', marginBottom: '50px' }}>Maypo Deluxe Songs Page</h5>
        </Col>
      </Row>
    </Container>
  );
}

export default ProjectOne;