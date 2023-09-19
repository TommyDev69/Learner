import React, { Component } from 'react'
import '../src/design.css'
import Narbar from './projects/Narbar';
import WebSite from './WebSite';
import NavheadBody from './projects/NavheadBody';
import AdminPage from './projects/AdminPage';
import Library from './projects/Library';
import Login from './projects/Login'
import PageSign from './projects/PageSign';
import { Route, Routes } from 'react-router-dom'
import Footer from './projects/Footer';
class App extends Component {
  render() {

    return (
      <div className="App back " >
        <Narbar name='HOME' />
        <Routes>
          <Route path='/' element={<WebSite />} />
          <Route path='/admin%page' element={<AdminPage />} />
          <Route path="/libaries" element={<Library />} />
          <Route path='/contact' element={<NavheadBody />} />
          <Route path='/signup' element={<PageSign />} />
          <Route path='/Login' element={<Login />} />
        </Routes>

      
        <Footer />
      </div>
    )
  }
}

export default App

// <Route path ="/cart" element = {<Library/>} />
