import React, { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Footer from './Component/Footer'
import Header from './Component/Header'
import PreLoader from './Component/PreLoader'
const Hero = lazy(() => import('./Component/Hero'))
const Menu = lazy(() => import('./Component/Pages/Menu'))
const About = lazy(() => import('./Component/Pages/About'))
const Gallery = lazy(() => import('./Component/Pages/Gallery'))
const Rooms = lazy(() => import('./Component/Pages/Rooms'))




function App() {

  return (
    <>
      <Suspense fallback={<PreLoader/>}>
      <Header/>
        <Routes>
          <Route path='/' element={<Hero />} />
          <Route path='menu' element={<Menu />} />
          <Route path='about' element={<About />} />
          <Route path='gallery' element={<Gallery />} />
          <Route path='rooms' element={<Rooms />} />
        </Routes>
      <Footer />
      </Suspense>
    </>
  )
}

export default App
