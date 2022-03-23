import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import { StyledContainer } from './style';


export const FormSignIn = () => {

  const navigate = useNavigate();

    return (
      <StyledContainer className='d-flex justify-content-center'>
      <Form className="align-self-center m-3">
        <div className='d-flex justify-content-center pb-5'>
          <h1>Sign In</h1>
        </div>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Username" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
            <div className='d-flex justify-content-around p-3'>
                  <Button onClick={() => navigate('/feed')}
                  variant="warning" type="submit">
                    Cancelar
                  </Button>
                  <Button onClick={() => navigate('/feed')} 
                  variant="danger" type="submit">
                    Logar
                  </Button>
              </div>
          </Form>
    </StyledContainer>   
    )
}