import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Error from './Components/Error'
import Header from './Components/Header'
import Contact from './pages/Contact' 
import Music from './pages/Music';
import Discover from './pages/Decouvrir';

  ReactDOM.render(
    <React.StrictMode>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='Music' element={<Music />} />
          <Route path='/Contact' element={<Contact/>}/>
          <Route path='/Decouvrir' element={<Discover/>}/>
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </React.StrictMode>,
    document.getElementById('root')
  )
  

