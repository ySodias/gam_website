import { Api } from "../providers"
import { IPosts } from '../interfaces'

const getPost = () => Api.get<IPosts[]>('/posts');

export const PostsService = {
  getPost,
}