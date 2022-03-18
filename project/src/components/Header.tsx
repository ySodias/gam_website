import { Navbar, Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGamepad, faBars } from '@fortawesome/free-solid-svg-icons';
import CSS from 'csstype';

const aStyle: CSS.Properties = {
  textDecoration: 'none',
  color: 'black',
  fontSize: '20px'
}

export function Header(){
  return (
      <Container fluid className='border-bottom'>
      <Row >
          <Col md={4}>
            <div className='p-3'>
              <a style={aStyle} className="p-3"><FontAwesomeIcon icon={faBars} /></a>
            </div>
          </Col>
          <Col md={{ span: 4, offset: 4 }} >
            <div className='p-3'>
              <a style={aStyle} className="p-3"><FontAwesomeIcon icon={faGamepad} /></a>
            </div>
          </Col>
      </Row>
      </Container>
  )
}