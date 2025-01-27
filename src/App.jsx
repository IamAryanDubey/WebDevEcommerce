import { useState } from 'react';
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import ItemPage from './pages/ItemPage'; 
import Search from './pages/Search';
import Cart from './pages/Cart';
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Homepage/>}/>
            <Route path="/item/:id" element={<ItemPage />} /> 
            <Route path="/Search/:category" element={<Search />} /> {/* Add Search route */}
            <Route path='/Cart' element={<Cart/>}/>
        </Routes>
      </BrowserRouter>
        
    </>
  )
}

export default App
