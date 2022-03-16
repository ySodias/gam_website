import Form from 'react-bootstrap/Form'
import { useMediaQueries } from '@react-hook/media-query';
import { StyledContainer } from './style';


export const Forms = () =>{
    return (
      <StyledContainer className='d-flex justify-content-center'>
        <Form className="align-self-center m-3">
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
            </Form>
      </StyledContainer>   
    )
}
