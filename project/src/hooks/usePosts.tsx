import { useState, useCallback } from 'react';
import { IPosts } from '../interfaces'
import { PostsService } from '../service';
//Para abstrair a camada HTTP
// useCallback => garante que função só será recriada quando o param da função mudar
export const usePosts = () => {

  const [ posts, setPosts] = useState<IPosts[]>([]);

  const getAllPost = useCallback(async () => {
    const { status, data } = await PostsService.getPost();

    if (status != 200) throw new Error();

    setPosts(data);
    return data
  }, [])

  return {

    posts,
    getAllPost
  }
}