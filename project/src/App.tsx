import { Header } from "./components/Header";
import { Footer } from "./components/Foooter"
import { SignIn } from "./pages/SignIn";
import { Row, Col, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { StyledContainer } from "./components/Form/style";



export function App() {
  return (
    <div>
    <Header />
      <Container>
        <SignIn />
    </Container>
    <Footer />
  </div>
  )
};

export default App
