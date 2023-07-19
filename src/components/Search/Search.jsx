import React from 'react'
import './Search.css'
import axios from 'axios'

function Search({setCharacters}) {

  const [query, setQuery] = React.useState('')

  const handleSubmit = (e) =>{
    //stops page from refreshing
    e.preventDefault()
    console.log('Search for', query)
    
    axios.get(`https://rickandmortyapi.com/api/character/?name=${query}`)
    .then(res=> {
      console.log(res.data.results)
      setCharacters(res.data.results)
    })
    .catch(err=> {
      console.log(err.response.status)
      if (err.response.status === 404) {
        alert(`No character names ${query}`)
      }
      else {
        console.log(err)
      }

    
    })
    setQuery('')
  }

  return (
    <form className='search-container' onSubmit={handleSubmit}>
      <input type="text" onChange={e=>setQuery(e.target.value)}
      value={query} placeholder='Search all characters'/>
    </form>
    //Always remember to connect the functions to the form!
  )
}

export default Search
