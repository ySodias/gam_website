import React, { useEffect } from 'react';
import 'react-bootstrap';
import CSS from 'csstype';
import { IUser } from '../../interfaces';
import { formatDistance, subDays, format } from 'date-fns';

export type HeaerPostProps = {
    users: IUser
}

const PerfilStyle: CSS.Properties = {
    height: '4.5vh',
    width: '4.5vw',
    maxHeight: '60px',
    maxWidth: '60px',
}

export const HeaderPost: React.FC<HeaerPostProps> = ({
    users
}) => {
    console.log(users)
    async function toformatTime(created_at: string): Promise<string> {
        if (created_at) {
            var date = new Date(created_at);
            var formattedDate: number = +format(date, 'MM')*30
            const respTime = await formatDistance(subDays(new Date(), 
                formattedDate), new Date(), {addSuffix: true});
            return respTime
        } else {
            return ''
        }
    }
    const response = toformatTime(users.created_at).then(
        function(result) {
            var p = document.getElementById('data')
            if (result) {
                p ? p.innerHTML = result : ''
            }
        }
        )
    
    return(
        <div className="px-3 pb-2 pt-3 d-flex align-items-center">
            <img className="rounded-circle" style={PerfilStyle} 
                src={users.photo} alt="username"></img>
                <p className="px-3 m-0">{users.username}<br />
                <span id='data'></span> </p>
        </div>
    )
}