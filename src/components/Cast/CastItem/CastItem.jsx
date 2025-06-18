import React from 'react'
import { Container, Photo, Name, Character } from "./CastItem.styled";

const CastItem = ({name, character, profile_path}) => {
    const baseUrlImg = 'https://image.tmdb.org/t/p/w200';
  return (
    <Container>
      <Photo src={`${baseUrlImg}${profile_path}`} alt={name} />
      <Name>{name}</Name>
      <Character>{character}</Character>
    </Container>
    
  )
}

export default CastItem
