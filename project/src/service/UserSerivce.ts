import { Api } from '../providers';
import { IUser } from '../interfaces'

const getUserById = (id: number) => Api.get<IUser>(`users?id=${id}`)

export const UserService = {
    getUserById,
}