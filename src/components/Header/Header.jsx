import React, { useContext } from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../../context/ThemeContext'
import Favorites from '../../pages/Favorites/Favorites';

function Header() {

  //Create variable for Dark Mode
  //const darkMode = false;

  //Create state to control darkMode

  const {darkMode, setDarkMode} = useContext(ThemeContext)



  return (
    <div className={darkMode? "header-container header-dark" :'header-container'}>
      <div>
      <Link to="/" style={{marginRight:"10px"}}>Home</Link>
      <Link to="/about" style={{marginRight:"10px"}}>About</Link>
      <Link to="/episodes">Episodes</Link>
      </div>
      <div>
          <Link to={'/favorites'}>My Favorites</Link>
          <button onClick={() => setDarkMode(!darkMode)} className={darkMode?"theme-button theme-button-dark" : 'theme-button' }>
            {
              darkMode? "Light Mode" : "Dark Mode"
            }
          </button>
      </div>
    </div>
  )
}

export default Header
