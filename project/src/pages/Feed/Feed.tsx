import React, { useEffect } from 'react';
import { Row, Col } from 'react-bootstrap'
import { usePosts, useUser } from '../../hooks';
import { Post } from '../../components/Post/Post'
import 'bootstrap/dist/css/bootstrap.min.css';

export interface IFeedPageProps {}

const Feed: React.FunctionComponent<IFeedPageProps> = (props) => {

  const { posts, getAllPost } = usePosts()

  useEffect(() => {
    getAllPost();
  },  [getAllPost])

  const { user, getUserById } = useUser();

  useEffect(() =>{
    let id = posts[0]?.id_user
    getUserById(id);
  }, [getUserById])

  console.log(user)

  return(
    <div>
      <Row>
          <Col >
            <div className="d-flex justify-content-center align-content-center">
            <Post
            id={posts[0]?.id}
            type={posts[0]?.type}
            desc={posts[0]?.desc}
            id_user={posts[0]?.id_user}
            created_at={posts[0]?.created_at}
            updated_at={posts[0]?.updated_at}
            src_img={posts[0]?.src_img}
             title={posts[0]?.title}/>
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