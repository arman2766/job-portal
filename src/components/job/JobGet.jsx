import useJobList from "../../hooks/useJobList";


const JobGet = () => {
    const { jobList } = useJobList();


    return (
        <div>
            <p>data</p>
            <div style={{ display: 'flex', gap: '25px' }}>
                {jobList.map((job, i) => (
                    <div key={i}>
                        <p><strong>Title:</strong> {job.title}</p>
                        <p><strong>Company:</strong> {job.company}</p>
                        <p><strong>Experience:</strong> {job.experience}</p>
                        <p><strong>Salary:</strong> {job.salary}</p>
                        <p><strong>Location:</strong> {job.location}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default JobGet;