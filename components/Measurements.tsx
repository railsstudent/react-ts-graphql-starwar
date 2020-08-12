import React, { FunctionComponent } from 'react';

interface Props {
  mass: string;
  height: number | string;
};

const Measurements: FunctionComponent<Props> = (prop) => {
  const { mass = 'N/A', height = 'N/A' } = prop || {};
  return (
    <div className="physical-measurement">
      <p className="title">Measurements</p>
      <div>
        <span style={{ marginRight: '0.5rem'}}>Mass: { mass }</span>
        <span>Height: { height }</span>
      </div>
    </div>
  );
}

export default Measurements;
