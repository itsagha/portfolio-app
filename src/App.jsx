import { useState } from 'react';
import Navbar from './components/Navbar';
import ExpEdu from './pages/ExpEdu';
import Home from './pages/Home';
import Contact from './pages/Contact';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='expedu' element={<ExpEdu />} />
        <Route path='contact' element={<Contact />} />
      </Routes>
    </>
  )
}

export default App