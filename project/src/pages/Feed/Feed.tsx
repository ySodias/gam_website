import React, { useEffect } from 'react';
import { Row, Col } from 'react-bootstrap'
import { usePosts } from '../../hooks';
import { Post } from '../../components/Post/Post'
import 'bootstrap/dist/css/bootstrap.min.css';

export interface IFeedPageProps {}

const Feed: React.FunctionComponent<IFeedPageProps> = (props) => {

  const { posts, getAllPost } = usePosts()

  useEffect(() => {
    getAllPost();
  },  [getAllPost])

  return(
    <div>
      <Row>
          <Col >
            <div className="d-flex justify-content-center align-content-center">
            <Post src_img={posts[0]?.src_img} title={posts[0]?.title}/>
            </div>
          </Col>
          <Col>
          <div>
            Aoba
          </div>
          </Col>
        </Row>
    </div>
  )
}
export default Feed