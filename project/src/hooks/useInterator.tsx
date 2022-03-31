import { useState, useCallback } from "react";
import { IInterator } from "../interfaces";
import { InteratorService } from "../service";

export const useInterator = () => {

    const [ interator, setInterator ] = useState<IInterator[]>([]);

    const getAllInteratorByPost = useCallback(async (id_post) => {
        const {status, data} = await InteratorService.getInteratorByPost(id_post);

        if (status != 200) throw new Error();
        setInterator(data)
        return data
    }, [])
    return {
        interator,
        getAllInteratorByPost
    }
}