import {useState, useEffect, createContext } from 'react'

// create context

export const ThemeContext = createContext()

export default function ThemeContextProvider(props) {
    // create global state
    const [darkMode, setDarkMode] = useState(false)

    useEffect(
        ()=>{
            //is there a value in localStorage
            const storedDarkMode = localStorage.getItem('darkMode')
            //check if something was there
            if (storedDarkMode){
                //console.log('datatype is ', typeof(storedDarkMode))
                //setDarkMode(storedDarkMode)
                //parse converts from string to its datatype
                setDarkMode(JSON.parse(storedDarkMode))
            }
            //otherwise will use default state value

        }, []
    )

    useEffect(() => {
        console.log('Now dark mode is', darkMode)
        //create local storage for the state
        localStorage.setItem('darkMode', JSON.stringify(darkMode))

    },[darkMode]
    )

    return (
        <ThemeContext.Provider value={{darkMode, setDarkMode}}>
            {props.children}
        </ThemeContext.Provider>
    )
}