import { Header } from "./components/Header";
import { Footer } from "./components/Foooter"
import { Forms } from "./components/Form/Form";
import { Row, Col, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { StyledContainer } from "./components/Form/style";



export function App() {
  return (
    <div>
    <Header />
      <Container>
        <Row>
            <Col className="d-flex justify-content-center align-self-center"> 
              <img src="/src/assets/icons/game-control.ico" width="50%" height="50%"></img>
            </Col>
            <Col >
              <Forms />
            </Col>
          </Row>
    </Container>
    <Footer />
  </div>
  )
};

export default App
