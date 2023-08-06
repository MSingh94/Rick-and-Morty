import React, { useContext } from 'react'
import './Favorites.css'
import { FavoritesContext } from '../../context/FavoritesContext'
import CharacterCard from '../../components/CharacterCard/CharacterCard';


function Favorites() {
    
    const {favorites} = useContext(FavoritesContext)

  return (
    <div className='favorites-container'>
      <h1>My Favorite Characters</h1>
      <div className="favorite-characters"></div>
      {
        favorites.length > 0 ?
        favorites.map(item => <CharacterCard key={item.id} character={item}/>)
        :
        <p>No Favorites selected yet!</p>
    }
    </div>
  )
}

export default Favorites
