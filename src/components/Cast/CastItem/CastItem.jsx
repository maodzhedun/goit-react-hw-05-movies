import React from 'react'

const CastItem = ({name, character, profile_path}) => {
    const baseUrlImg = 'https://image.tmdb.org/t/p/w200';
  return (
    <div>
      <img src={`${baseUrlImg}${profile_path}`} alt={name} />
      <h3>{name}</h3>
      <p>{character}</p>
    </div>
    
  )
}

export default CastItem
