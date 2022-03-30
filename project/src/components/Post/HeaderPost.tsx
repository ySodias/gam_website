import React from 'react';
import 'react-bootstrap';

export type HeaerPostProps = {
    id_id_user: number,
    username: string,
    email_address: string,
    photo: string,
    user_created_at: string,
    user_updated_at: string
}

export const HeaderPost: React.FC<HeaerPostProps> = ({
    id_id_user,
    username,
    email_address,
    photo,
    user_created_at,
    user_updated_at
}) => {

    console.log(username)

    return(
        <div>
            <p>{username}</p>
        </div>
    )
}