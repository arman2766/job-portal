import React from 'react'
import Footer from './Footer'
import Header from './Header'
import './MainLayout.scss'

const MainLayout = ({ children }) => {
  return (
    <div className='main-layout'>
      <Header />
      <main className='main-content'>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout