import React, { useState } from 'react'
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

// constants/dummyJobs.js
const dummyJobs = [
  { id: 1, title: 'Frontend Developer', experience: 'fresher', noticePeriod: 1, skills: ['HTML', 'CSS', 'JavaScript', 'React'] },
  { id: 2, title: 'Backend Developer', experience: 'mid', noticePeriod: 10, skills: ['Node.js', 'Express', 'MongoDB', 'REST APIs'] },
  { id: 3, title: 'Fullstack Developer', experience: 'senior', noticePeriod: 20, skills: ['React', 'Node.js', 'GraphQL', 'Docker'] },
  { id: 4, title: 'UI Designer', experience: 'mid', skills: ['Figma', 'Adobe XD', 'Wireframing', 'Design Systems'] },
  { id: 5, title: 'Frontend Developer', experience: 'fresher', noticePeriod: 30, skills: ['HTML', 'CSS', 'JavaScript', 'Vue.js'] },

  { id: 6, title: 'DevOps Engineer', experience: 'mid', noticePeriod: 15, skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD'] },
  { id: 7, title: 'QA Engineer', experience: 'fresher', noticePeriod: 5, skills: ['Manual Testing', 'Selenium', 'Test Cases'] },
  { id: 8, title: 'Product Manager', experience: 'senior', noticePeriod: 60, skills: ['Agile', 'Scrum', 'JIRA', 'Stakeholder Management'] },
  { id: 9, title: 'Technical Writer', experience: 'mid', skills: ['Documentation', 'Markdown', 'Git', 'Confluence'] },
  { id: 10, title: 'UI/UX Designer', experience: 'senior', noticePeriod: 45, skills: ['User Research', 'Prototyping', 'Figma', 'Usability Testing'] },

  { id: 11, title: 'Mobile Developer', experience: 'fresher', noticePeriod: 7, skills: ['React Native', 'Flutter', 'Android SDK'] },
  { id: 12, title: 'Data Scientist', experience: 'mid', noticePeriod: 20, skills: ['Python', 'Pandas', 'Scikit-learn', 'SQL'] },
  { id: 13, title: 'ML Engineer', experience: 'senior', skills: ['TensorFlow', 'PyTorch', 'ML Ops', 'Model Deployment'] },
  { id: 14, title: 'Business Analyst', experience: 'mid', noticePeriod: 15, skills: ['Excel', 'SQL', 'Tableau', 'Requirement Gathering'] },
  { id: 15, title: 'Cloud Architect', experience: 'senior', noticePeriod: 30, skills: ['AWS', 'Azure', 'GCP', 'Terraform'] },

  { id: 16, title: 'Security Analyst', experience: 'mid', skills: ['Network Security', 'Penetration Testing', 'SIEM Tools'] },
  { id: 17, title: 'Frontend Developer', experience: 'mid', noticePeriod: 10, skills: ['React', 'Redux', 'JavaScript', 'TypeScript'] },
  { id: 18, title: 'Backend Developer', experience: 'senior', noticePeriod: 25, skills: ['Node.js', 'GraphQL', 'SQL', 'Docker'] },
  { id: 19, title: 'QA Engineer', experience: 'mid', noticePeriod: 12, skills: ['Automation', 'Selenium', 'Jest', 'Postman'] },
  { id: 20, title: 'DevOps Engineer', experience: 'senior', noticePeriod: 20, skills: ['Kubernetes', 'AWS', 'CI/CD', 'Monitoring Tools'] },

  { id: 21, title: 'Fullstack Developer', experience: 'mid', noticePeriod: 8, skills: ['Vue.js', 'Node.js', 'MongoDB', 'Docker'] },
  { id: 22, title: 'Mobile Developer', experience: 'senior', noticePeriod: 30, skills: ['Swift', 'Kotlin', 'React Native', 'Mobile CI/CD'] },
  { id: 23, title: 'Technical Writer', experience: 'fresher', noticePeriod: 4, skills: ['Google Docs', 'Markdown', 'Research', 'Editing'] },
  { id: 24, title: 'Product Manager', experience: 'mid', skills: ['Product Roadmap', 'User Stories', 'Analytics'] },
  { id: 25, title: 'UI Designer', experience: 'senior', noticePeriod: 18, skills: ['Sketch', 'Adobe Suite', 'Interaction Design'] },

  { id: 26, title: 'Cloud Architect', experience: 'mid', noticePeriod: 22, skills: ['Cloud Design', 'AWS', 'DevOps', 'Security'] },
  { id: 27, title: 'ML Engineer', experience: 'fresher', noticePeriod: 3, skills: ['Python', 'NumPy', 'Pandas', 'Machine Learning'] },
  { id: 28, title: 'Data Scientist', experience: 'senior', noticePeriod: 40, skills: ['Deep Learning', 'NLP', 'Big Data', 'Spark'] },
  { id: 29, title: 'Business Analyst', experience: 'fresher', skills: ['Excel', 'Requirement Gathering', 'Communication'] },
  { id: 30, title: 'Security Analyst', experience: 'senior', noticePeriod: 60, skills: ['Cybersecurity', 'Risk Management', 'Incident Response'] },

  { id: 31, title: 'Frontend Developer', experience: 'senior', noticePeriod: 14, skills: ['React', 'Next.js', 'TypeScript', 'Jest'] },
  { id: 32, title: 'Backend Developer', experience: 'fresher', noticePeriod: 7, skills: ['Node.js', 'Express', 'MongoDB'] },
  { id: 33, title: 'UI/UX Designer', experience: 'mid', noticePeriod: 17, skills: ['Prototyping', 'Figma', 'User Flows'] },
  { id: 34, title: 'QA Engineer', experience: 'senior', skills: ['Test Automation', 'API Testing', 'Performance Testing'] },
  { id: 35, title: 'DevOps Engineer', experience: 'fresher', noticePeriod: 6, skills: ['Linux', 'Shell Scripting', 'GitHub Actions'] },

  { id: 36, title: 'Fullstack Developer', experience: 'fresher', noticePeriod: 5, skills: ['HTML', 'CSS', 'JavaScript', 'Node.js'] },
  { id: 37, title: 'Mobile Developer', experience: 'mid', noticePeriod: 12, skills: ['Flutter', 'Firebase', 'Android SDK'] },
  { id: 38, title: 'Data Scientist', experience: 'fresher', noticePeriod: 8, skills: ['Python', 'Data Cleaning', 'Excel'] },
  { id: 39, title: 'ML Engineer', experience: 'mid', noticePeriod: 10, skills: ['Scikit-learn', 'XGBoost', 'Model Tuning'] },
  { id: 40, title: 'Technical Writer', experience: 'senior', noticePeriod: 25, skills: ['Documentation Strategy', 'API Docs', 'Style Guides'] },

  { id: 41, title: 'Product Manager', experience: 'fresher', noticePeriod: 9, skills: ['Market Research', 'Product Documentation'] },
  { id: 42, title: 'Cloud Architect', experience: 'fresher', noticePeriod: 6, skills: ['Cloud Fundamentals', 'AWS Basics'] },
  { id: 43, title: 'Security Analyst', experience: 'fresher', noticePeriod: 3, skills: ['Networking Basics', 'Security Tools'] },
  { id: 44, title: 'Frontend Developer', experience: 'mid', noticePeriod: 11, skills: ['JavaScript', 'Vue.js', 'Tailwind CSS'] },
  { id: 45, title: 'UI Designer', experience: 'fresher', noticePeriod: 2, skills: ['Canva', 'Design Principles'] },

  { id: 46, title: 'Backend Developer', experience: 'mid', noticePeriod: 13, skills: ['Java', 'Spring Boot', 'SQL'] },
  { id: 47, title: 'Fullstack Developer', experience: 'senior', noticePeriod: 21, skills: ['Angular', 'Node.js', 'MySQL'] },
  { id: 48, title: 'QA Engineer', experience: 'mid', noticePeriod: 16, skills: ['Cypress', 'Postman', 'Load Testing'] },
  { id: 49, title: 'Mobile Developer', experience: 'fresher', noticePeriod: 5, skills: ['React Native', 'Expo', 'Git'] },
  { id: 50, title: 'Cloud Architect', experience: 'senior', noticePeriod: 50, skills: ['AWS Solutions Architect', 'Cost Optimization'] },

  { id: 51, title: 'Technical Writer', experience: 'mid', noticePeriod: 7, skills: ['API Documentation', 'Markdown', 'Tools: DITA, Sphinx'] },
  { id: 52, title: 'Product Manager', experience: 'mid', noticePeriod: 26, skills: ['Strategy', 'Backlog Grooming', 'KPIs'] },
  { id: 53, title: 'Security Analyst', experience: 'mid', noticePeriod: 19, skills: ['Firewall Config', 'Threat Detection', 'SIEM'] },
  { id: 54, title: 'UI/UX Designer', experience: 'fresher', noticePeriod: 4, skills: ['User Research', 'Wireframes', 'Design Tools'] },
  { id: 55, title: 'Business Analyst', experience: 'senior', noticePeriod: 33, skills: ['Gap Analysis', 'UML', 'Stakeholder Communication'] },
];






const Hero = () => {

  const [search, setSearch] = useState('');
  const [searchExp, setSearchExp] = useState('');
  const [filteredJobs, setFilteredJobs] = useState(dummyJobs);
  const [loading, setLoading] = useState(false);


  // const filterJob = dummyJobs.filter((jobs) => (jobs.noticePeriod === search & jobs.experience === searchExp));

  const experience = [...new Set(dummyJobs.map((job) => job.experience))];
  const handleFilterJob = () => {

    const filtered = dummyJobs.filter((jobs) => {
      setLoading(true);
      const matchNotice = jobs.noticePeriod === search;
      const matchExp = jobs.experience === searchExp;
      return matchNotice && matchExp;
    });
    setFilteredJobs(filtered);
    setLoading(false);
  }



  return (
    <><div className='hero-container'>
      <span className='hero-container__title-des'>
        <h1>Find Your Next Opportunity in Just a Click</h1>
        <p>Click2Work is a smart job portal connecting job seekers with top employers. With tailored job matches and real-time updates, finding the right opportunity is just a click away.</p>
        <span className='hero-container__search-container'>
          <InputSearch onChange={(e) => setSearch(Number(e.target.value))} />
          <select onChange={(e) => setSearchExp(e.target.value)}>
            <option value="" disabled selected defaultValue="">
              Select experience
            </option>
            {experience.map((exp) => (
              <option value={exp}>{exp.toUpperCase()}</option>
            ))}
          </select>

          <Button text={loading ? 'Searching...' : 'Search'} btnType='secondary' onClick={handleFilterJob} />
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

        <span style={{ display: 'flex', flexWrap: 'wrap', gap: '24px' }}>
          {filteredJobs.length > 0 ? (
            filteredJobs.map((jobs) => (
              <span key={jobs.id} style={{ background: '#6974f1', padding: '24px', borderRadius: '10px;' }}>
                <p>{jobs.id}</p>
                <p>{jobs.title}</p>
                <p>{jobs.experience}</p>
              </span>
            ))) : (
            <p>No jobs match your search criteria.</p>

          )}

        </span>
      </div>

    </div><JobCard /></>
  )
}

export default Hero