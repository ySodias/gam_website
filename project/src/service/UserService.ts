import { Api } from '../providers';
import { IUser, ILogin } from '../interfaces'


const getUserById = (id: number) => Api
    .get<IUser>(`users?id=${id}`)

const getUserByUsername = (username: string) => Api
    .get<IUser>(`users?username=${username}`)

const getByData = (data: any) => Api
    .get<ILogin>('users', data)

const putUser = (data: any) => Api
    .put<IUser>(`users`, data, {headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }})

const postUser = (data: any) => Api
    .post<IUser>(`users`, data, {headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }})

const deleteUser = (id: number) => Api
    .delete<IUser>(`users?id=${id}`)

export const UserService = {
    getUserById,
    getUserByUsername,
    putUser,
    deleteUser,
    postUser,
    getByData
}