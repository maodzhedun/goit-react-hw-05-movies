import React from 'react';
import CastItem from '../CastItem/CastItem';
import { List,Item } from "./CastList.styled";

const CastList = ({ cast }) => {
  // console.log(cast);
  return (
    <List>
      {cast.map(({ id, name, character, profile_path }) => (
        <Item key={id}>
          <CastItem
            name={name}
            character={character}
            profile_path={profile_path}
          />
        </Item>
      ))}
    </List>
  );
};

export default CastList