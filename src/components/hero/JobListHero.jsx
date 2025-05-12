import React from 'react'
import './JobListHero.scss'

const JobListHero = ({ title, des, children }) => {
    return (
        <div className='job-list-hero'>
            <h1>{title}</h1>
            <p>{des}</p>
            {children}
        </div>
    )
}

export default JobListHero