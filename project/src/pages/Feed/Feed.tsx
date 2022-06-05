import React, { useEffect } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { usePosts } from '../../hooks';
import { Post } from '../../components/Post/Post';
import 'bootstrap/dist/css/bootstrap.min.css';

export interface IFeedPageProps {}

const Feed: React.FunctionComponent<IFeedPageProps> = (props) => {

  const { posts, getAllPost } = usePosts()

  async function getData(){
    const respPost = await getAllPost()
    return respPost
  }
  useEffect(() => {
    getData()
  }, [getAllPost])
    return(
      <div>
        <Container>
          <Row className='justify-content-center'>
              <Col className="p-5" xs={5}>
                <div>
                <Post
                posts={posts}
                />
                </div>
              </Col>
            </Row>
        </Container>
      </div>
    )
}
export default Feed