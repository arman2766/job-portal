import React from 'react'
import './Hero.scss'
import JobCard from '../jobcard/JobCard'
import InputSearch from '../input/InputSearch'
import Button from '../button/Button'


const keyPoint = [
  {
    title: 'Search the category',
    des: 'Select the service, and find a list of verified companies.'
  },

  {
    title: 'Search the category',
    des: 'Select the service, and find a list of verified companies.'
  },

  {
    title: 'Search the category',
    des: 'Select the service, and find a list of verified companies.'
  },
];

const Hero = () => {
  return (
    <><div className='hero-container'>
      <span className='hero-container__title-des'>
        <h1>Find Your Next Opportunity in Just a Click</h1>
        <p>Click2Work is a smart job portal connecting job seekers with top employers. With tailored job matches and real-time updates, finding the right opportunity is just a click away.</p>
        <span className='hero-container__search-container'>
          <InputSearch />
          <InputSearch />
          <Button text="Search" btnType='secondary' />
        </span>
      </span>
      <span className='hero-container__key-points-container'>
        {keyPoint.map((item, i) => {
          return (
            <span key={i}>
              <p className='title'>{item.title}</p>
              <p className='des'>{item.des}</p>
            </span>
          )
        })}
      </span>

    </div><JobCard /></>
  )
}

export default Hero