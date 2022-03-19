import Form from 'react-bootstrap/Form';
import { StyledContainer } from '../FormSignIn/style';
import { Link, useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';

export const FormSignUp = () => {

  const navigate = useNavigate();

  return (
    <StyledContainer className='d-flex justify-content-center'>
        <Form className="align-self-center m-3">
          <div className='d-flex justify-content-center pb-5'>
            <h1>Sign Up</h1>
          </div>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="Username" />
            </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Photo</Form.Label>
              <Form.Control type="file" placeholder="Upload your file" />
            </Form.Group>
            <div className='d-flex justify-content-center p-3'>
                <div className='p-3'>
                  <Button onClick={() => navigate('/')}
                    variant="warning" type="submit">
                      Back
                  </Button></div>
                <div className='p-3'>
                  <Button onClick={() => navigate('/signin')} 
                    variant="danger" type="submit">
                      Star
                  </Button>
                </div>
            </div>
            <div className='d-flex justify-content-center'>
              <p>Já possui Conta? <Link to="/signin"> Clique aqui</Link> para fazer Login</p>
            </div>
          </Form>
      </StyledContainer> 
  )
}