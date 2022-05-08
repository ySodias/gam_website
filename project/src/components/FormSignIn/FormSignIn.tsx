import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import { StyledContainer } from './style';
import { useState } from 'react';
import { useUser } from '../../hooks';


export const FormSignIn = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const { toLogin } = useUser();

  const handleSubmit = () => {
    event?.preventDefault()
    handleSubmitForm()
  }

  async function handleSubmitForm() {
    if (username && password) {
      const response = await toLogin({ 
      'username': username,
      'password': password,
    })
      if (response.status === 200) {
        navigate('/feed')
      } else {
        alert('Error')
      }
    } else {
      handleSubmitForm()
    }
  }

    return (
      <StyledContainer className='d-flex justify-content-center'>
      <Form className="align-self-center m-3">
        <div className='d-flex justify-content-center pb-5'>
          <h1>Sign In</h1>
        </div>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Username" 
            onChange={e => setUsername(e.target.value)}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" 
            onChange={e => setPassword(e.target.value)}/>
          </Form.Group>
            <div className='d-flex justify-content-around p-3'>
                  <Button onClick={() => navigate('/feed')}
                  variant="warning" type="submit">
                    Cancelar
                  </Button>
                  <Button onClick={handleSubmit} 
                  variant="danger" type="submit">
                    Logar
                  </Button>
              </div>
          </Form>
    </StyledContainer>   
    )
}