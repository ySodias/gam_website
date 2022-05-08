import { useState, useCallback } from 'react';
import { IUser, ILogin } from "../interfaces";
import { UserService } from '../service/UserService';

export const useUser = () => {
    
    const [ user, setUser] = useState<IUser>();
    const [ login ] = useState<ILogin>();

    const getUserById = useCallback(async (id) => {
        const { status, data } = await UserService.getUserById(id);
    if (status != 200) throw new Error();
    setUser(data)
    return data
    }, []);

    const postUser = useCallback(async (user) => {
        const { status, data } = await UserService.postUser(user);
    if (status != 201) throw new Error();
    const response = { data, status}
    return response
    }, []);

    const toLogin = useCallback(async (login) => {
        const { status, data } = await UserService.getByData(login)
        if (status != 200) throw new Error();
        const response = { data, status}
        return response
    }, []);


return {
    user,
    getUserById,
    postUser,
    toLogin
    }
}
