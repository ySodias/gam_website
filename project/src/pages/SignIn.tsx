import { Forms } from "../components/Form/Form";
import { Row, Col, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import MediaQuery from "react-responsive";

export function SignIn(){
 return (
    <>
    <MediaQuery  minHeight={500}>
        <Row>
            <Col className="d-flex justify-content-center align-self-center"> 
                <img src="/src/assets/icons/game-control.ico" width="50%" height="50%"></img>
            </Col>
            <Col >
                <Forms />
            </Col>
        </Row>
    </MediaQuery>
    </> 
 )   
};

export default SignIn