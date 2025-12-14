
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './Components/Header.jsx'
import Footer from './Components/Footer.jsx'
import Home from './Pages/Home.jsx'

function App() {

  return (
    <>
      <Header/>


        <Routes>
        <Route path='/' element={<Home/>} />
        
        </Routes>


      <Footer/>


    </>
  )
}

export default App
