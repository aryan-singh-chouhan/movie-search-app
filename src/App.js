import React from 'react'
import Home from './Home.js';
import { Routes, Route } from 'react-router-dom';
import Detail from './Detail.js';


const App = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/details/:id' element={<Detail/>}/>
        </Routes>
    </div>
  )
}

export default App;