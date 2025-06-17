import React from 'react';
import CastItem from '../CastItem/CastItem';

const CastList = ({ cast }) => {
  // console.log(cast);
  return (
    <div>
      {cast.map(({ id, name, character, profile_path }) => (
        <li key={id}>
          <CastItem
            name={name}
            character={character}
            profile_path={profile_path}
          />
        </li>
      ))}
    </div>
  );
};

export default CastList