import React from 'react';
import { Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FormSignUp } from '../../components/FormSignUp/FormSignUp'

export interface ISignUpPageProps {}

const SignUp: React.FunctionComponent<ISignUpPageProps> = (props) =>{
  return (
    <div>
        <Row>
            <Col className="d-flex justify-content-center align-self-center"> 
                <img src="/src/assets/img/Gaming-amico.svg" 
                width="50%" height="50%"></img>
            </Col>
            <Col >
                <FormSignUp/>
            </Col>
        </Row>
    </div>
  )
};

export default SignUp;