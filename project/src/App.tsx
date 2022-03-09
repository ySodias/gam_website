import { Header } from "./components/Header";
import { Footer } from "./components/Foooter"
import { Forms } from "./components/Form/Form";
import { Row, Col, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div>
      <Header />
        <Container>
          <Row>
              <Col> Aoba
              </Col>
              <Col>
                <Forms />
              </Col>
            </Row>
      </Container>
          
      <Footer />
    </div>
  )
}

export default App
