// import React, { useState } from 'react'
import './Hero.scss'
import JobCard from '../jobcard/JobCard'
import InputSearch from '../input/InputSearch'
import Button from '../button/Button'
// import JobGet from '../job/JobGet'
import useJobList from '../../hooks/useJobList'


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

  // const [search, setSearch] = useState('');
  // const [searchExp, setSearchExp] = useState('');
  const { jobList } = useJobList();
  // const [filteredJobs, setFilteredJobs] = useState(jobList);

  console.log('jobList', jobList);
  // const experience = [...new Set(jobList.map((job) => job.experience))];
  // const handleFilterJob = () => {

  //   const filtered = jobList.filter((jobs) => {

  //     const matchNotice = jobs.title === search;
  //     const matchExp = jobs.experience === searchExp;
  //     return matchNotice && matchExp;
  //   });
  //   setFilteredJobs(filtered);

  // }



  return (
    <>
      <div className='hero-container'>
        <span className='hero-container__title-des'>
          <h1>Find Your Next Opportunity in Just a Click</h1>
          <p>Click2Work is a smart job portal connecting job seekers with top employers. With tailored job matches and real-time updates, finding the right opportunity is just a click away.</p>
          <span className='hero-container__search-container'>
            {/* <InputSearch onChange={(e) => setSearch(Number(e.target.value))} />
            <select onChange={(e) => setSearchExp(e.target.value)}>
              <option value="" disabled>
                Select experience
              </option>
              {experience.map((exp, id) => (
                <option key={id} value={exp}>{exp.toUpperCase()} Years</option>
              ))}
            </select> */}

            <InputSearch />

            <Button text='Search' btnType='secondary' />
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
        <div style={{ display: 'flex', gap: '24px' }}>
          {/* <span>
          {dummyJobs.map((jobs) => (
            <span key={jobs.id}>
              <p>{jobs.id}</p>
              <p>{jobs.title}</p>
              <p>{jobs.experience}</p>
            </span>
          ))}

        </span> */}

          {/* <span style={{ display: 'flex', flexWrap: 'wrap', gap: '24px' }}>
            {jobList.length > 0 ? (
              jobList.map((job) => (
                <span key={job.id} style={{ background: '#6974f1', padding: '24px', borderRadius: '10px' }}>
                  <p><strong>Title:</strong> {job.title}</p>
                  <p><strong>Company:</strong> {job.company}</p>
                  <p><strong>Experience:</strong> {job.experience}</p>
                  <p><strong>Salary:</strong> {job.salary}</p>
                  <p><strong>Location:</strong> {job.location}</p>
                </span>
              ))) : (
              <p>No jobs match your search criteria.</p>

            )}

          </span> */}
        </div>

      </div><JobCard /></>
  )
}

export default Hero