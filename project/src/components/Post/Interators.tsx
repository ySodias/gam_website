import React from 'react';
import 'react-bootstrap';
import Console from '../../assets/icons/Console.svg';
import Love from '../../assets/icons/Love.svg'

export type InteratorPros = {
    id: number;
    id_post: number;
    likes: number;
    comments: number
}

export const Interator: React.FC<InteratorPros> = ({
    id,
    id_post,
    likes,
    comments
}) => {
    return(
        <div className='d-flex px-3 border'>
        <div >
          <span className='px-3'>{likes ? likes : 0}</span><img src={Love}></img>
        </div>
        <div className='mx-3'>
          <span className='px-3'>{comments ? comments : 0}</span><img src={Console}></img>
        </div>
      </div>
    )
}