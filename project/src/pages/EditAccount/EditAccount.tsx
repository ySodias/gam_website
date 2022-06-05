import React from 'react';
import { Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FormEditAccount } from '../../components/FormEditAccount/FormEditAccount'

export interface ISignUpPageProps {}

const EditAccount: React.FunctionComponent<ISignUpPageProps> = (props) =>{
  return (
    <div>
        <Row>
            <Col className="d-flex justify-content-center align-self-center"> 
                <img src="/src/assets/img/Gaming-amico.svg" 
                width="50%" height="50%"></img>
            </Col>
            <Col >
                <FormEditAccount/>
            </Col>
        </Row>
    </div>
  )
};

export default EditAccount;