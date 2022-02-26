import {Navbar, Container, Row, Col} from 'react-bootstrap';
import Vector from '../assets/icons/Vector.svg';
import Logo from '../assets/icons/Logo.svg'
import CSS from 'csstype';

const barStyle: CSS.Properties = {
  height: '70%',
  width: '70%'
}
const logoStyle: CSS.Properties = {
  height: '100%',
  width: '100%'
}

export function Header(){
  return (
    <Navbar bg="light" variant="light">
      <Container>
      <Navbar.Brand href="#home"><img className='fluid' style={barStyle} src={Vector} /></Navbar.Brand>
      <Row>
        <Col><img className='fluid' style={logoStyle} src={Logo}/></Col>
        <Col></Col>
      </Row>
      </Container>
    </Navbar>
  )
}