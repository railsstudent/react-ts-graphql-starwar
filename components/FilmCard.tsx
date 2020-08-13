import React, { FunctionComponent } from 'react';
import { Film } from '../types';

const FilmCard: FunctionComponent<{ films: Film[] }> = ({films}) => {
  return (
    <div>
      <p>Films</p>
      <ul style={{marginLeft: '-1rem' }}>
        { (films || []).map(
          ({ episodeId, title }) => <li key={episodeId} className='file-item' style={{listStyleType: 'none'}}>{title}</li>) 
        }
      </ul>
    </div>
  );
}

export default FilmCard;
