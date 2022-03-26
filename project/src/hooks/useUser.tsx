import { useState, useCallback } from 'react';
import { IUser } from "../interfaces";
import { UserService } from '../service/UserSerivce';

export const useUser = () => {
    const [ user, setUser] = useState<IUser>();

    const getUserById = useCallback(async (id) => {
        const { status, data } = await UserService.getUserById(id);
    if (status != 200) throw new Error();
    setUser(data)
}, [])
return {
    user,
    getUserById
    }
}
