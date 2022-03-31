import React, { useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import { usePosts, useUser } from '../../hooks';
import { Post } from '../../components/Post/Post';
import { HeaderPost } from '../../components/Post/HeaderPost';
import 'bootstrap/dist/css/bootstrap.min.css';
import { IUser } from '../../interfaces';
import { Interator } from '../../components/Post/Interators';
import { useInterator } from '../../hooks/useInterator';

export interface IFeedPageProps {}
let user: IUser

const Feed: React.FunctionComponent<IFeedPageProps> = (props) => {

  const { posts, getAllPost } = usePosts()
  const { user, getUserById } = useUser()
  const { interator, getAllInteratorByPost } = useInterator() 


  async function getData(){
    const respPost = await getAllPost()
    const respUser = await getUserById(respPost[0].id_user)
    getInteratorByPost(respPost[0].id)
    return respUser
  }

  async function getInteratorByPost(id_post: number) {
    const respInterator = await getAllInteratorByPost(id_post)
    return respInterator
  }

  useEffect(() => {
    getData()
  }, [getAllPost])

  if (user) {
    console.log(interator)
    return(
      <div>
        <Row>
            <Col className="p-5">
              <div className="border">
              <HeaderPost id_user={user[0].id}
                          username={user[0].username}
                          email_address={user[0].email_address}
                          photo={user[0].photo}
                          created_at={user[0].created_at}
                          updated_at={user[0].updated_at}
                          />
              <Post
              id={posts[0]?.id}
              type={posts[0]?.type}
              desc={posts[0]?.desc}
              id_user={posts[0]?.id_user}
              created_at={posts[0]?.created_at}
              updated_at={posts[0]?.updated_at}
              src_img={posts[0]?.src_img}
              title={posts[0]?.title}
              />
              <Interator 
                  id={interator[0]?.id}
                  id_post={interator[0]?.id_post}
                  likes={interator[0]?.likes}
                  comments={interator[0]?.comments}
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