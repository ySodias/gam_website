import { Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { PStyle,DivStyle } from './style';
import { IPosts } from '../../interfaces';
import { HeaderPost } from '../../components/Post/HeaderPost';
import { Interator } from '../../components/Post/Interators';
import React from 'react';


interface PostProps extends IPosts {
  posts: IPosts[]
}

export const Post: React.FC<PostProps> = ({
    posts
  }) => {
    const post = posts.map((post: any) => {
        return(
          <Row className='mb-5 border'>
            <HeaderPost users={post.user}/>
            <Col className="md-6 mb-3">
              <img className="img-fluid" src={post.src_img} alt={post.title}></img>
                <DivStyle>
                  <PStyle>{post.desc}</PStyle>
                </DivStyle>
            </Col>
            <Interator 
                  interator={post?.interator}
              />
          </Row>
        )

    })
    return post
  }