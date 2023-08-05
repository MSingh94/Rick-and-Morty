import React, { useEffect, useState } from 'react';
import './Episodes.css';
import axios from 'axios';
import CharacterCard from '../../components/CharacterCard/CharacterCard';

function Episodes() {
  const [options, setOptions] = React.useState([]);
  const [selectedOption, setSelectedOption] = React.useState(1);
  const [selectedEpisode, setSelectedEpisode] = React.useState('');
  const [characterList, setCharacterList] = React.useState([]);

  useEffect(() => {

    //I need to find out how many episodes there are
    axios
      .get(`https://rickandmortyapi.com/api/episode/`)
      .then((res) => {
        const newOptions = [];
        for (let i = 1; i <= res?.data?.info?.count; i++) {
          newOptions.push(i);
        }
        setOptions(newOptions);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    console.log('Get data for selected option');
    fetchEpisodeData();
  }, [selectedOption]);

  const fetchEpisodeData = async () => {
    console.log('Make API call');
    try {
      const res = await axios.get(`https://rickandmortyapi.com/api/episode/${selectedOption}`);
      console.log(res.data);
      // Store the episode data in state
      setSelectedEpisode(res?.data);

      //Now we must get Character data
      console.log(res.data.characters)
      const episodeCharacters = await Promise.all (
        res.data.characters.map(url => {
          return axios.get(url).then (res => res.data)
        })
      )
      console.log(episodeCharacters)
      setCharacterList(episodeCharacters)



    } catch (err) {
      console.log(err);
    }
  };

  const handleSelectChange = (e) => {
    console.log(e.target.value);
    setSelectedOption(e.target.value);
  };

  return (
    <div className='episodes-container'>
      <div>
        <label htmlFor='select-episode'>Select an Episode</label>
        <select id='select-episode' onChange={handleSelectChange} value={selectedOption}>
          {options.map((num) => (
            <option key={num} value={num}>
              {`Episode ${num}`}
            </option>
          ))}
        </select>
      </div>
      <div>
        <div className="episode-info">
          {/* Access the selectedEpisode data to display episode information */}
          <p>Episode Name: {selectedEpisode.name}</p>
          <br></br>
          <p>Air Date: {selectedEpisode?.air_date}</p>
          {/* Add other episode details here */}
        </div>
        <div className="character-container">
        {
          characterList.map(item => <CharacterCard key={item.id} character={item}/>)

        }

        </div>
      </div>
    </div>
  );
}

export default Episodes;
