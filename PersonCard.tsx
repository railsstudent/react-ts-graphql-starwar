import React, { FunctionComponent } from 'react';
// import FacialFeatures from './components/FacialFeatures';
// import Measurements from './components/Measurements';
// import Species from './components/Species';
// import Homeworld from './components/Homeworld';
// import FilmCard from './components/FilmCard';

interface Planet {
  name: string;
}

interface Species {
  name: string;
  language: string;
}

interface Film {
  episodeId: number;
  title: string; 
}

enum Gender {
  UNKNOWN = 'UNKNOWN',
  MALE = 'MALE',
  FEMALE = 'FEMALE',
  HERMAPHRODITE = 'HERMAPHRODITE',
}

enum HairColor {
  UNKNOWN = 'UNKNOWN',
  BLONDE = 'BLONDE',
  BROWN = 'BROWN',
  BLACK = 'BLACK',
  AUBURN = 'AUBURN',
  WHITE = 'WHITE',
  GREY = 'GREY',
}

enum EyeColor {
  UNKNOWN = 'UNKNOWN',
  BLUE = 'BLUE',
  YELLOW = 'YELLOW',
  RED = 'RED',
  BROWN = 'BROWN',
  BLUEGREY = 'BLUEGREY',
  BLACK = 'BLACK',
  ORANGE = 'ORANGE',
  HAZEL = 'HAZEL',
  PINK = 'PINK',
  GOLD = 'GOLD',
  GREEN = 'GREEN',
  WHITE = 'WHITE',
  DARK = 'DARK'
}

enum SkinColor {
  UNKNOWN = 'UNKNOWN',
  FAIR = 'FAIR',
  GOLD = 'GOLD',
  WHITE = 'WHITE',
  LIGHT = 'LIGHT',
  GREEN = 'GREEN',
  GREENTAN = 'GREENTAN',
  PALE = 'PALE',
  METAL = 'METAL',
  DARK = 'DARK',
  BROWNMOTTLE = 'BROWNMOTTLE',
  BROWN = 'BROWN',
  GREY = 'GREY',
  MOTTLEDGREEN = 'MOTTLEDGREEN',
  ORANGE = 'ORANGE',
  BLUE = 'BLUE',
  RED = 'RED',
  YELLOW = 'YELLOW',
  TAN = 'TAN',
  SILVER = 'SILVER'
}

interface Person {
  id: string;
  name: string;
  height: number;
  mass: number;
  birthYear: string;
  gender: Gender;
  eyeColor: EyeColor[];
  hairColor: HairColor[];
  skinColor: SkinColor[];
  homeworld?: Planet;
  species?: Species[];
  films: Film[]
}

const PersonCard: FunctionComponent<{ person: Person }> = (prop) => {
  const { person } = prop;
  const {
    id, 
    eyeColor: eyeColors = [], 
    hairColor: hairColors = [], 
    skinColor: skinColors = [], 
    homeworld,
    species,
    films
  } = person || {}
  const eyeColor = eyeColors.length > 0 && eyeColors[0] || undefined
  const hairColor = hairColors.length > 0 && hairColors[0] || undefined
  const skinColor = skinColors.length > 0 && skinColors[0] || undefined

  const { name = '' } = homeworld || {};
  const { name: speciesName, language } = species && species.length > 0 && species[0] || { name: '', language: '' };

  return (
    <div className="person-card">
      <div className="name">
        { person.name } ({ person.gender })
      </div>
      <div className="details">
        <div>
          <span>Birth year: { person.birthYear || 'UNKNOWN' }</span>
        </div>
      </div>
    </div>
  )
}

  // <Measurements key={`${id}-mass`} mass={person.mass} height={person.height} />
  // <FacialFeatures key={`${id}-facial`} eyeColor={eyeColor} skinColor={skinColor} hairColor={hairColor} />
  // { name && <Homeworld key={`${id}-home`} name={name} /> }
  // { (!!speciesName || !!language) && <Species key={id} speciesName={speciesName} language={language} /> }
  // <FilmCard key={`${id}-films`} films={films} />

export default PersonCard;
