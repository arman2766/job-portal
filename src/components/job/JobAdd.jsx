import React, { useState } from 'react';
import { getDatabase, push, ref, set } from 'firebase/database';
import app from '../../firebase/config';

const JobAdd = () => {


    const [addJob, setAddJob] = useState({
        title: "",
        company: "",
        experience: "",
        salary: "",
        location: "",

    });

    const handleChangeAddJob = (e) => {
        setAddJob({ ...addJob, [e.target.name]: e.target.value });
    };

    const handleAddJob = async () => {
        try {
            const db = getDatabase(app);
            const newDocRef = push(ref(db, 'jobs/joblist'));
            await set(newDocRef, { ...addJob, createdAt: new Date().toISOString(), });
            setAddJob({
                title: "",
                company: "",
                experience: "",
                salary: "",
                location: ""


            });
        } catch (error) {
            console.log(error);
        }
    };




    return (
        <div>

            <input name="title" placeholder="Job Title" onChange={handleChangeAddJob} value={addJob.title} required />
            <input name="company" placeholder="Company (optional)" onChange={handleChangeAddJob} value={addJob.company} />
            <input name="experience" placeholder="Experience" onChange={handleChangeAddJob} value={addJob.experience} required />
            <input name="salary" placeholder="Salary" onChange={handleChangeAddJob} value={addJob.salary} required />
            <input name="location" placeholder="Location" onChange={handleChangeAddJob} value={addJob.location} required />
            <button type="button" onClick={handleAddJob}>Add Job</button>
        </div>
    );
};

export default JobAdd;
