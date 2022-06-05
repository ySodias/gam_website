import { Api } from "../providers";
import { IInterator } from "../interfaces";

const getInteratorByPost = (id_post: number) => Api
    .get<IInterator>(`/interators?id_post=${id_post}`)

export const InteratorService = {
    getInteratorByPost,
}