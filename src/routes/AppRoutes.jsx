import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/home/Home';
import JobList from '../components/job/JobList';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/job" element={<JobList />} />
        </Routes>
    );
};

export default AppRoutes;

