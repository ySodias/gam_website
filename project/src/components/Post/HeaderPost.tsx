import React, { useEffect } from 'react';
import 'react-bootstrap';
import CSS from 'csstype';
import { formatDistance, subDays, format } from 'date-fns';

export type HeaerPostProps = {
    id_user: number,
    username: string,
    email_address: string,
    photo: string,
    created_at: string,
    updated_at: string
}

const PerfilStyle: CSS.Properties = {
    height: '4.5vh',
    width: '4.5vw',
}

let respTime: string;

export const HeaderPost: React.FC<HeaerPostProps> = ({
    id_user,
    username,
    email_address,
    photo,
    created_at,
    updated_at
}) => {

    async function toformatTime(created_at: string): Promise<string> {
        var date = new Date(created_at);
        var formattedDate: number = +format(date, 'MM')*30
        const respTime = await formatDistance(subDays(new Date(), 
            formattedDate), new Date(), {addSuffix: true});
        return respTime
    }

    const response = toformatTime(created_at).then(
        function(result) {
            var p = document.getElementById('data')
            if (result) {
                p ? p.innerHTML = result : ''
            }
        }
    )
  

    return(
        <div className="px-3 pb-2 d-flex align-items-center">
            <img className="rounded-circle" style={PerfilStyle} 
                src={photo} alt="username"></img>
                <p className="px-3 m-0">{username}<br />
                <span id='data'></span> </p>
            
        </div>
    )
}