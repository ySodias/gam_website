import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Container, Table } from 'react-bootstrap';
import { SvgStyle } from '../SignIn/style'
import CSS from 'csstype';
import { faBackwardStep, faPlus, faPencil, faSquarePen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export interface IMenuPageProps {}

const TableStyle: CSS.Properties = {
  height: '30vh',
  width: '10vw'
}

const MenuStyle: CSS.Properties = {
  height: '80vh',
}

const aStyle: CSS.Properties = {
  textDecoration: 'none',
  color: 'black',
  fontSize: '20px'
}

const Menu: React.FunctionComponent<IMenuPageProps> = (props) => {
  return (
    <div style={MenuStyle}>
      <Container className='pt-5'>
        <Row className='justify-content-center'> 
        <Col className='d-flex align-items-center justify-content-center'>
          <div style={TableStyle}>
            <Table striped bordered hover  size="xs">
                <tbody>
                  <tr>
                    <td>
                      <a href='' style={aStyle}>
                        <FontAwesomeIcon icon={faPlus}
                      className="mx-3"/> 
                      New Post
                      </a></td>
                  </tr>
                  <tr>
                    <td><a href='' style={aStyle}>
                      <FontAwesomeIcon icon={faSquarePen} 
                    className="mx-3"/> 
                    Edit Post </a></td>
                  </tr>
                  <tr>
                    <td><a href='/editaccount' style={aStyle}>
                      <FontAwesomeIcon icon={faPencil} 
                    className="mx-3"/>
                    Edit Account</a></td>
                  </tr>
                  <tr>
                    <td>
                    <a href='/feed' style={aStyle}>
                      <FontAwesomeIcon icon={faBackwardStep} 
                    className="mx-3"/> 
                    Go to Feed</a></td>
                  </tr>
                </tbody>
            </Table>
          </div>
        </Col>
        <Col>
          <SvgStyle>
            <img src="/src/assets/img/Arcade machine-amico.svg" 
                width="100%" height="100%"></img>
            </SvgStyle>
        </Col>
        </Row>
      </Container>
    </div>
  )
}
export default Menu