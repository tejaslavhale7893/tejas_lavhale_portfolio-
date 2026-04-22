import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import Resume from './Resume'
import Contact from './Contact'
import Footer from './Footer'
import Skill from './Skill'
import Projects from './Projects'

function Routing() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
    
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/resume' element={<Resume/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/footer' element={<Footer/>}></Route>
      <Route path='/skill' element={<Skill/>}></Route>
      <Route path='/projects' element={<Projects/>}></Route>
      
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Routing
