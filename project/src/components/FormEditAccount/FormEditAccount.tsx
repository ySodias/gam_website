import Form from 'react-bootstrap/Form';
import { StyledContainer } from '../FormSignIn/style';
import { Link, useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import { IUser } from '../../interfaces';
import { useUser } from '../../hooks';
import { useState, useEffect } from 'react';


export const FormEditAccount = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email_adress, setEmail] = useState('');
  const [photo, setPhoto] = useState('')

  const { putUser } = useUser();
  const { user, getUserByUsername }  = useUser();

  const navigate = useNavigate();

  const handleSubmit = () => {
    event?.preventDefault()
    handleSubmitForm()
  }

  async function handleForm(){
    const username = localStorage.getItem('username')
    const response = await getUserByUsername(username)
    return response
  }

  async function handleSubmitForm() {
      let data = {
        'id': user[0][0].id,
        'username': username ? username : null,
        'password': password ? password : null,
        'email_adress': email_adress ? email_adress : null,
        'photo': photo ? photo : null 
      }
      Object.keys(data).forEach(key=>{
        if(data[key] === null){
          delete data[key]
        }
      });
    const response = await putUser({
      data
    })
    console.log(response)
      if (response.status === 200) {
        navigate('/signin')
      } else {
        alert('Error')
      }
  }

  useEffect(() => {
    handleForm();
  }, [])
  
  if (user){
    return (
      <StyledContainer className='d-flex justify-content-center'>
          <Form className="align-self-center m-3">
            <div className='d-flex justify-content-center pb-5'>
                <h1>Edit Account</h1>
              </div>
            <Form.Group className="mb-3" controlId="formUsername">
                  <Form.Label>Username</Form.Label>
                  <Form.Control type="text" placeholder={user[0][0].username}
                  onChange={e => setUsername(e.target.value)}/>
                </Form.Group>
              <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder={user[0][0].email_adress}
                  onChange={(e) => setEmail(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder={user[0][0].password}
                  onChange={(e) => setPassword(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPhoto">
                  <Form.Label>Photo</Form.Label>
                  <Form.Control type="text" placeholder={user[0][0].photo}
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
          </Form>
    </StyledContainer> 
  )
  } else {
    navigate('/signin')
    return null
  }
}