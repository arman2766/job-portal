import { get, getDatabase, ref } from 'firebase/database';
import React, { useEffect, useState } from 'react'
import app from '../firebase/config';

const useJobList = () => {
    const [jobList, setJobList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchJobListData = async () => {
            try {
                const db = getDatabase(app);
                const dbRef = ref(db, 'jobs/joblist');
                const snapshot = await get(dbRef);
                if (snapshot.exists()) {
                    setJobList(Object.values(snapshot.val()));
                }
                else {
                    setJobList([]);
                }

            } catch (error) {
               setError(error.message)
            }
            finally {
                setLoading(false);
            }
        }
        fetchJobListData();
    }, [])
    return {jobList, loading, error}
}

export default useJobList