import React from 'react'
import './jobcard.scss'
import { BriefcaseBusiness, MapPin } from 'lucide-react';
import Button from '../button/Button';




const JobCard = ({ title, company, createdAt, location, exp, salary }) => {
    const date = new Date(createdAt);
    const formattedDate = date.toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
    });

    return (
        <div className='job-card'>
            <div className="job-card__header">
                <span>
                    <h2>{title}</h2>
                    <p>{company}</p>
                </span>
                <span className='post-date'>
                    <p>{formattedDate}</p>
                </span>
            </div>
            <div className='job-card__skill-sets'>
                <span>Html</span>
                <span>Html</span>
                <span>Html</span>
                <span>Html</span>

            </div>
            <div className='job-card__location-exp'>
                <span>
                    <MapPin /> {location}
                </span>
                <span>
                    <BriefcaseBusiness /> {exp}
                </span>
            </div>
            <div className='job-card__footer'>
                <span>
                    <h2>{salary}</h2>
                    <p>Salary</p>
                </span>
                <span>
                    <Button text='Apply Now' btnType='secondary' />
                </span>
            </div>
        </div>
    )
}

export default JobCard