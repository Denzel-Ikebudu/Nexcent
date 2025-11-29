import React from 'react'
import './App.css'
import Navbar from './components/navbar/navbar'
import Home from './components/hero/hero'
import Features from './components/features/features'
import Community from './components/community/community'
import Blog from './components/blog/blog'
import Pricing from './components/pricing/pricing'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/community" element={<Community />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
    </Router>
  )
}

export default App
