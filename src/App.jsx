import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'


import Homepage from './pages/Homepage/Homepage'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import About from './pages/About/About'
import Episodes from './pages/Episodes/Episodes'
import CharacterDetails from './pages/CharacterDetails/CharacterDetails'
import ThemeContextProvider from './context/ThemeContext'
import Favorites from './pages/Favorites/Favorites'
import FavoritesContextProvider from './context/FavoritesContext'



function App() {

  return (
    <BrowserRouter>
      <ThemeContextProvider>
        <FavoritesContextProvider>
      <Header />

      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/about' element={<About />} />
        <Route path='/favorites' element={<Favorites />} />
        <Route path='/episodes' element={<Episodes />} />
        <Route path='/details/:characterId' element={<CharacterDetails />} />
      </Routes>

      <Footer />
      </FavoritesContextProvider>
      </ThemeContextProvider>

    </BrowserRouter>
  )
}

export default App
