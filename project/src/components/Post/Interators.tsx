import React, { useEffect, useMemo } from 'react';
import 'react-bootstrap';
import Console from '../../assets/icons/Console.svg';
import Love from '../../assets/icons/Love.svg'
import { useInterator } from '../../hooks/useInterator';
import { IInterator } from '../../interfaces';

export type IPostProps = {
  interator: IInterator
}

let id_old: number = 0

export const Interator: React.FC<IPostProps> = ({
  interator
}) => {
    return(
        <div className='d-flex px-3 border pt-3 pb-3'>
        <div >
          <span className='px-3'>{interator?.likes}</span><img src={Love}></img>
        </div>
        <div className='mx-3'>
          <span className='px-3'>{interator?.comments}</span><img src={Console}></img>
        </div>
      </div>
    )
}