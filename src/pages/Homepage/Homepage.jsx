import React, {useEffect, useState}from 'react'
import './Homepage.css'
import axios from 'axios'
import CharacterCard from '../../components/CharacterCard/CharacterCard'

function Homepage() {

  const[characters, setCharacters] = useState([])
  
  //This page displays characters
  //https://rickandmortyapi.com/api/character

  useEffect(
    ()=>{
        console.log('Homepage loaded')
        axios.get(`https://rickandmortyapi.com/api/character`)

        .then(res=>{
          console.log(res.data.results)
          setCharacters(res.data.results)
        })
        .catch(err => console.log("err"))


  }, []
  )


  return (
    <div className='home-container'>
      <h1>Main Characters</h1>
      <div className="characters-container">
        {
          characters.map(item => <CharacterCard key={item.id} character={item}/>)

          //characters.map(item => <p key={item.id}>{item.name}</p>)

        }
      </div>
    </div>
  )
}

export default Homepage
