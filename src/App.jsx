//Importing styles
import './styles/App.css'
import './styles/hero.css'
import './styles/tickets.css'
import './styles/break.css'
import './styles/overlay.css'
import './styles/media.css'

//Importing components/pages
import Footer from './Components/Footer'
import Header from './Components/Header'
import Start from './Pages/Start'
import About from './Pages/About'
import Break from './Pages/Break'
import News from './Pages/News'
import Rides from './Pages/Rides'
import Tickets from './Pages/Tickets'
import Error from './Pages/Error'

//Import routing and useState
import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

function App() {
  //Open/Close nav
  const [openNav, setOpenNav] = useState(false)
  //Routing
  return (
    <BrowserRouter>
      <Header state={openNav} setState={setOpenNav}/>
      <article onClick={() => setOpenNav(false)}>
        <Routes > 
          <Route path='/about' element={<About />} />
          <Route path='/break' element={<Break />} />
          <Route path='/news' element={<News />} />
          <Route path='/rides' element={<Rides />} />
          <Route path='/tickets' element={<Tickets />} />
          <Route path='/error' element={<Error />} />
          <Route path='/' element={<Start />} />
          <Route path='*' element={<Navigate to='/error'/>} />
        </Routes>
      </article>
      <Footer />
    </BrowserRouter>
  )
}

export default App
