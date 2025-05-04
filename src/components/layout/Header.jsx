import React from 'react'
import './Header.scss'
import logo from '../../assets/logo.png'
import Button from '../button/Button'


const Header = () => {
  return (
    <div className='header'>
      <span>
        <img src={logo} alt="" />
      </span>
      <span>
       <Button text='Sign In'/>
      </span>
    </div>
  )
}

export default Header