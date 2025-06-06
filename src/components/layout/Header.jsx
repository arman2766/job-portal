import React from 'react'
import './Header.scss'
import logo from '../../assets/logo.png'
import Button from '../button/Button'

const navList = [{
  id: 1,
  name: 'Home',
  link: '/'
},
{
  id: 2,
  name: 'Jobs',
  link: '/job'
},

{
  id: 3,
  name: 'About Us',
  link: '/about-us'
}

];

const Header = () => {
  return (
    <div className='header'>
      <span>
        <img src={logo} alt="" />
      </span>
      <span className='header__navlist'>
        <nav>
          {navList.map((list) => (
            <a href={list.link} key={list.id}>{list.name}</a>
          ))}
        </nav>
      </span>
      <span>
        <Button text='Sign In' />
      </span>
    </div>
  )
}

export default Header