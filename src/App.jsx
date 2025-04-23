import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


import Navbar from './Components/Navbar/Navbar'
import HomePage from './Pages/HomePage/HomePage'
import InfoPage from './Pages/InfoPage/InfoPage'
import DetailPage from './Pages/DetailsPage/DetailPage'
import './App.css'

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/info' element={<InfoPage />} />
        <Route path='/details/:id' element={<DetailPage />} />
      </Routes>
    </>
  )
}
const AppWrapper = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
export default AppWrapper
