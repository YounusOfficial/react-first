import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import ConditionalRendering from './pages/conditional/ConditionalRendering'



function App() {
  return (
    <>
      <Navbar></Navbar>

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/conditional-rendering' element={<ConditionalRendering />}></Route>
        <Route path='/dashboard' element={<h1>Dashboard Page</h1>}></Route>
      </Routes>
    </>
  )
}

export default App
