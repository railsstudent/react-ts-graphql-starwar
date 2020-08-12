import React, { FunctionComponent } from 'react';

const Homeworld: FunctionComponent<{ name: string }> = (prop) => {
  const { name } = prop;
  return (
    <div className="home-world">
      <p className="title">Home world</p>
      <p className="name">{ name }</p>
    </div>
  );
}

export default Homeworld;
