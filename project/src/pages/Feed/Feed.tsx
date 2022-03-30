import React, { useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import { usePosts, useUser } from '../../hooks';
import { Post } from '../../components/Post/Post';
import 'bootstrap/dist/css/bootstrap.min.css';
import { IUser } from '../../interfaces';

export interface IFeedPageProps {}
let user: IUser

const Feed: React.FunctionComponent<IFeedPageProps> = (props) => {

  const { posts, getAllPost } = usePosts()
  const { user, getUserById } = useUser()

  async function getData(){
    const respPost = await getAllPost()
    const respUser = await getUserById(respPost[0].id_user)
    return respUser
  }

  useEffect(() => {
    getData()
  }, [getAllPost])

  console.log(user)
  if (user) {
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
              title={posts[0]?.title}
              user={[user.id ? user.id : 0,
                user.username ? user.username : '',
                user.email_address ? user.email_address : '',
                user.photo ? user.photo : '',
                user.created_at ? user.created_at : '',
                user.updated_at ? user.updated_at : '']}
              />
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
  return <>don't work</>
}
export default Feed