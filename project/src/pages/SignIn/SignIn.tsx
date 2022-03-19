import { FormSignIn } from "../../components/FormSignIn/FormSignIn";
import { Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { SvgStyle } from './style'

export interface ISignInPageProps {}

const SignIn: React.FunctionComponent<ISignInPageProps> = (props) =>{
 return (
    <div>
        <Row>
            <Col className="d-flex justify-content-center align-self-center">
                <div>
                    <SvgStyle>
                        <img src="/src/assets/img/Game analytics-pana.svg" width="100%" height="100%"></img>
                    </SvgStyle>
                </div> 
            </Col>
            <Col >
                <FormSignIn />
            </Col>
        </Row>
    </div>
 )   
};

export default SignIn