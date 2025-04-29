import { Routes, Route, Outlet } from 'react-router-dom'

import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import './App.css'

const App = () => {

  return (
    <>
      <div className='background' />
      <div className='content'>
        <Navbar />
        <Outlet />
        <Footer />
      </div>

    </>
  )
}

export default App;

