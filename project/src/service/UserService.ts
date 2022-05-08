import { Api } from '../providers';
import { IUser, ILogin } from '../interfaces'


const getUserById = (id: number) => Api
    .get<IUser>(`users?id=${id}`)

const getByData = (data: any) => Api
    .get<ILogin>('users', data)

const postUser = (data: any) => Api
    .post<IUser>(`users`, data, {headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }})

export const UserService = {
    getUserById,
    postUser,
    getByData
}