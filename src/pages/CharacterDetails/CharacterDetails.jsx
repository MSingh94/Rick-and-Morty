import React, { useEffect, useState } from 'react'
import './CharacterDetails.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function CharacterDetails() {

    //this page shows details about a specific character, the ID is in the URL

    const{characterId} = useParams()

    //I need to get details for this character when the page loads
    //use the API: https://rickandmortyapi.com/api/character/2

    const [character, setCharacter] = useState('')

    useEffect(
        ()=>{
            console.log('get data for character', characterId)
            axios.get(`https://rickandmortyapi.com/api/character/${characterId}`)
            .then(res => {console.log(res.data)
                setCharacter(res.data)
            
            })

            .catch(err=> console.log(err))


        }, []
    )


  return (
    <div className='details-container'>
      <div className="container-info">
        <img src={character.image}/>
        <p>Name: {character?.name}</p>
        <p>Gender: {character?.gender}</p>
        <p>Location: {character?.location?.name}</p>
        <p>Species: {character?.species}</p>
      </div>


    </div>
  )
}

export default CharacterDetails
