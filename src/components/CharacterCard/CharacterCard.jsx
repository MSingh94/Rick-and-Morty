import React from 'react'
import './CharacterCard.css'


function CharacterCard({character}) {
  return (
    <div className='character-card'>
      <img src={character.image}/>
      <p>{character.name}</p>
      <a href="#">See Details</a>
    </div>
  )
}

export default CharacterCard
