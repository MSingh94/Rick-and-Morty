import {useState, useEffect, createContext } from 'react'
import Favorites from '../pages/Favorites/Favorites';

// create context

export const FavoritesContext = createContext()

export default function FavoritesContextProvider(props) {
    // create global state
    const [favorites, setFavorites]  = useState([])

    useEffect(
        ()=>{
            //is there a value in localStorage
            const storedFavorites = localStorage.getItem('favoritesList')
            //check if something was there
            if (storedFavorites){
                //console.log('datatype is ', typeof(storedDarkMode))
                //setDarkMode(storedDarkMode)
                //parse converts from string to its datatype
                setFavorites(JSON.parse(storedFavorites))
            }
            //otherwise will use default state value

        }, []
    )

    useEffect(() => {
        console.log(favorites)
        //create local storage for the state
        localStorage.setItem('favoritesList', JSON.stringify(favorites))

    },[favorites]
    )

    //This function adds character to the list


    const addCharacter = (charToAdd) => {
        console.log('Adding', charToAdd)
        let newFavorites = [...favorites, charToAdd]
        console.log(newFavorites) 
        //update state
        setFavorites(newFavorites)
    }

    const removeCharacter = (charId) => {
        console.log('Removing', charId)
        //use filter to keep all that is not charID
        let newFavorites = favorites.filter(item => item.id != charId) 
        //update state
        console.log(newFavorites)
        setFavorites(newFavorites)
    }

    

    return (
        <FavoritesContext.Provider value={{favorites, addCharacter, removeCharacter}}>
            {props.children}
        </FavoritesContext.Provider>
    )
}

