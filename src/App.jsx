import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import { Link, Route, Routes } from 'react-router-dom'
import Open from './components/Open'
import EmpForm from './components/EmpForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<Open/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/empform' element={<EmpForm/>}></Route>
      </Routes>
    </>
  )
}

export default App
