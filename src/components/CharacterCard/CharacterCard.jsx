import React, { useContext } from 'react'
import './CharacterCard.css'
import { Link } from 'react-router-dom'
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { FavoritesContext } from '../../context/FavoritesContext';


function CharacterCard({character}) {

  //get the global state
  //Note {} not []

  const {addCharacter, favorites, removeCharacter} = useContext(FavoritesContext)

  // const isFavourite = false; 
  //Needs to become state

  const [isFavourite, setIsFavorite] = React.useState(false);

  React.useEffect(() => {
    setIsFavorite(favorites?.find(item=> item.id === character.id))

  }, [favorites] //Runs everytime favorites change
  )


  return (
    <div className='character-card'>
      <img src={character.image}/>
      <p>{character.name}</p>
      <Link to={`/details/${character.id}`}>See Details</Link>
      {
        isFavourite? 
        <FaHeart onClick={()=>removeCharacter(character.id)} className='heart-icon'/>
        :
        <FaRegHeart onClick={()=>addCharacter(character)} className='heart-icon'/>
      }
    </div>
  )
}

export default CharacterCard
