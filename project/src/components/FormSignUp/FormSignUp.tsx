import Form from 'react-bootstrap/Form';
import { StyledContainer } from '../FormSignIn/style';
import { Link, useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import { useUser } from '../../hooks';
import { useState, useCallback } from 'react';


export const FormSignUp = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email_adress, setEmail] = useState('');
  const [photo, setPhoto] = useState('')

 
  const { postUser } = useUser();

  const navigate = useNavigate();

  const handleSubmit = () => {
    event?.preventDefault()
    handleSubmitForm()
  }

async function handleSubmitForm() {
  if (username && password && email_adress && photo) {
    const response = await postUser({ 
    'username': username,
    'password': password,
    'email_adress': email_adress,
    'photo': photo 
  })
    if (response.status === 201) {
      navigate('/signin')
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
            <h1>Sign Up</h1>
          </div>
        <Form.Group className="mb-3" controlId="formUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="Username" 
              onChange={e => setUsername(e.target.value)}/>
            </Form.Group>
          <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" 
              onChange={(e) => setEmail(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" 
              onChange={(e) => setPassword(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPhoto">
              <Form.Label>Photo</Form.Label>
              <Form.Control type="text" placeholder="Insert photo url"
              onChange={(e) => setPhoto(e.target.value)} />
            </Form.Group>
            <div className='d-flex justify-content-center p-3'>
                <div className='p-3'>
                  <Button onClick={() => navigate('/feed')}
                    variant="warning" type="submit">
                      Back
                  </Button></div>
                <div className='p-3'>
                  <Button 
                    variant="danger" type="submit" onClick={handleSubmit}> 
                      Start
                  </Button>
                </div>
            </div>
            <div className='d-flex justify-content-center'>
              <p>Já possui Conta? 
                <Link to="/signin"> Clique aqui</Link>
                 para fazer Login</p>
            </div>
          </Form>
      </StyledContainer> 
  )
}