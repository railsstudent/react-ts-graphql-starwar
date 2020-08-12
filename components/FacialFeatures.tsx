import React, { FunctionComponent } from 'react';
import { HairColor, EyeColor, SkinColor } from '../types';

interface Props {
  eyeColor: EyeColor,
  skinColor: SkinColor,
  hairColor: HairColor
};

const FacialFeatures: FunctionComponent<Props> = (prop) => {
  const { eyeColor, skinColor, hairColor } = prop;

  return (
    <div className="facial-features">
      <p className="title">Facial features</p>
      <div className="colors">
        { eyeColor && <div className="color">
          <span>Eye: </span>
          <span className="eye-color" key={eyeColor}>{eyeColor}</span>
        </div> }
        { skinColor && <div className="color">
          <span>Skin: </span>
          <span className="skin-color" key={skinColor}>{skinColor}</span>
        </div> }
        { hairColor && <div className="color">
          <span>Hair: </span>
          <span className="hair-color" key={hairColor}>{hairColor}</span>
        </div>}
      </div>
    </div>
  );
}

export default FacialFeatures;
