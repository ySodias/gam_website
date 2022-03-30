import { StyledContainer } from '../FormSignIn/style';
import { Row, Col, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { PStyle,DivStyle } from './style';
import { useUser } from '../../hooks';
import React, { useEffect } from 'react';
import { HeaderPost } from './HeaderPost';

export type PostProps = {
  id: number;
  src_img: string;
  type: number;
  title: string;
  desc: string;
  id_user: number;
  created_at: string;
  updated_at: string;
  user: [
    id_id_user: number,
    username: string,
    email_address: string,
    photo: string,
    user_created_at: string,
    user_updated_at: string
  ]
}

export const Post: React.FC<PostProps> = ({
  id,
  src_img,
  type,
  title,
  desc,
  id_user,
  created_at,
  updated_at,
  user: [
    id_id_user,
    username,
    email_address,
    photo,
    user_created_at,
    user_updated_at
  ]}) => {

    if (id_id_user){
      return(
        <Container className="p-5">
        <Row>
          <HeaderPost id_id_user={id_id_user}
          username={username}
          email_address={email_address}
          photo={photo}
          user_created_at={user_created_at}
          user_updated_at={user_updated_at}/>     
          <Col className="md-6">
              <img className="img-fluid" src={src_img} alt={title}></img>
              <DivStyle>
                <PStyle>{desc}</PStyle>
            </DivStyle>
          </Col>
        </Row>
        </Container>
  
      )
    }
    return <>Don't work</>
   
  }