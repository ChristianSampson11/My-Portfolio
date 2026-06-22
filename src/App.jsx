import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import ScrollToHash from "./Components/ScrollToHash";
import Projects from './Components/Projects'
import HomePage from './Pages/HomePage'
import Commerce from './Pages/Commerce'
import Analytics from './Pages/Analytics'

function App() {
  return (
    <BrowserRouter>

        <ScrollToHash />
        <Routes>

          <Route path="/" element={<HomePage />}/>
          <Route path="/Service" element={<Service />}/>
          <Route path="/Commerce" element={<Commerce />}/>
          <Route path="/Analytics" element={<Analytics />}/>
          <Route path="/Game" element={<Game />}/>
          <Route path="/Projects" element={<Projects />}/>

        </Routes>
    </BrowserRouter>
  )
}

export default App
