import React, { FunctionComponent } from 'react';
import { Film } from '../types';

const ListItem: FunctionComponent<{ film: Film }> = ({ film }) => {
  const { episodeId, title, director } = film;

  return (
    <li className='file-item' style={{listStyleType: 'none'}}>
      <span style={{display: 'block'}}>{title}</span>
      <span style={{display: 'block'}}>{director}</span>
    </li>
  )
}

const FilmCard: FunctionComponent<{ films: Film[] }> = ({films}) => {
  return (
    <div>
      <p>Films</p>
      <ul style={{marginLeft: '-1rem' }}>
        { (films || []).map((film) => <ListItem key={film.episodeId} film={film} />) }
      </ul>
    </div>
  );
}

export default FilmCard;
