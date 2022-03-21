import { StyledContainer } from '../FormSignIn/style';
import { Row, Col } from 'react-bootstrap';

export type PostProps = {
  src_img: string;
  title: string;
}

export const Post: React.FC<PostProps> = ({
  src_img,
  title}) => {
    return(
      <img src={src_img} alt={title}></img>
    )
  }