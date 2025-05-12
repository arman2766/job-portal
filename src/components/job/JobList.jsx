import React, { useState, } from 'react';
import JobCard from './JobCard';
import useJobList from '../../hooks/useJobList';
import './joblist.scss';
import Loader from '../loader/Loader';
import InputSearch from '../input/InputSearch';
import JobListHero from '../hero/JobListHero';


const JobList = () => {
    const [query, setQuery] = useState('');
    const { jobList, loading } = useJobList();
    const [selectedJobType, setselectedJobtype] = useState([]);



    // Filter logic
    const filteredJobList = jobList.filter(item => {
        const matchesSearch = item.title.toLowerCase().includes(query.toLowerCase());
        const matchesCategory =
            selectedJobType.length === 0 || selectedJobType.includes(item.location);
        return matchesSearch && matchesCategory;
    });



    const jobType = [...new Set(jobList.map((job) => job.location))];

    return (
        <>
            {loading ? (
                <Loader />
            ) : (
                <div className='job-list-container'>
                    <div className='filter'>
                        <h3>Job type</h3 >
                        <div className='job-type-list'>
                            {jobType.map((jobType) => (
                                <span className='job-type' key={jobType}>
                                    <label htmlFor={jobType}>
                                        <input
                                            type="checkbox"
                                            id={jobType}
                                            value={jobType}
                                            checked={selectedJobType.includes(jobType)}
                                            onChange={(e) => {
                                                const value = e.target.value;
                                                setselectedJobtype((prev) =>
                                                    prev.includes(value)
                                                        ? prev.filter((item) => item !== value)
                                                        : [...prev, value]
                                                );
                                            }}
                                        />
                                        {jobType}
                                    </label>
                                </span>
                            ))}
                        </div>

                    </div >
                    <div className='Job-lists'>
                        <JobListHero title="Are you looking for a dream job?" des="Discover exciting opportunities that match your passion and skills. Let’s help you land the role you’ve always dreamed of!">
                            <InputSearch placeholder='Search by company name' onChange={(e) => setQuery(e.target.value)} />
                        </JobListHero>

                        <div className="job-list">
                            {loading ? (
                                <Loader />
                            ) : filteredJobList.length > 0 ? (
                                filteredJobList.map((job) => (
                                    <JobCard
                                        key={job.id}
                                        title={job.title}
                                        company={job.company}
                                        salary={`${job.salary} LPA`}
                                        location={job.location}
                                        exp={`${job.experience} Yrs`}
                                        createdAt={job.createdAt}
                                    />
                                ))
                            ) : (
                                <p className="no-jobs">No jobs found.</p>
                            )}
                        </div>
                    </div>
                </div >
            )}
        </>
    );
};

export default JobList;
