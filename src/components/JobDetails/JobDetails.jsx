import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const JobDetails = () => {
  // const [job, setJob] = useState([]);
  const job = useLoaderData();
  // setJob(j);
  console.log(job);
  return (
    <div>
      <h2>Job Details</h2>
    </div>
  );
};

export default JobDetails;