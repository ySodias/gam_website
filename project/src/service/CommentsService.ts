import { Api } from "../providers";
import { IComments } from "../interfaces"

const getCommentByPostAndUser = (id_post: number, id_user: number) => Api.get<IComments>(`/comments`);

export const CommentService = {
}