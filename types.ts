export interface Planet {
  name: string;
}

export interface Species {
  name: string;
  language: string;
}

export interface Film {
  episodeId: number;
  title: string;
  director: string;
}

export enum Gender {
  UNKNOWN = 'UNKNOWN',
  MALE = 'MALE',
  FEMALE = 'FEMALE',
  HERMAPHRODITE = 'HERMAPHRODITE',
}

export enum HairColor {
  UNKNOWN = 'UNKNOWN',
  BLONDE = 'BLONDE',
  BROWN = 'BROWN',
  BLACK = 'BLACK',
  AUBURN = 'AUBURN',
  WHITE = 'WHITE',
  GREY = 'GREY',
}

export enum EyeColor {
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

export enum SkinColor {
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

export interface Person {
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