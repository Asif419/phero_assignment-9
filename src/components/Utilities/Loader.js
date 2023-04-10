

export const jobsLoader = async () => {
  const res = await fetch('job.json');
  const data = await res.json();
  return data.jobs;
};

// export const jobDetailsLoader = (id) => {
//   const [jobDetails, setJobDetails] = useState(null);

//   useEffect(() => {
//     const fetchJobDetails = async () => {
//       const job = await jobsLoader(id);
//       setJobDetails(job);
//     };

//     fetchJobDetails();
//   }, [id]);
//   console.log(jobDetails)
//   return jobDetails;
// };


export const jobDetailsLoader = async (id) => {
  const jobs = await jobsLoader();
  const job = jobs.find(d => d.id === id);
  console.log
  return job;
};