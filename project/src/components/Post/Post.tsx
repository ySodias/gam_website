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
  updated_at: string
}

export const Post: React.FC<PostProps> = ({
  id,
  src_img,
  type,
  title,
  desc,
  id_user,
  created_at,
  updated_at
  }) => {
      return(
        <Container className="">
        <Row>     
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