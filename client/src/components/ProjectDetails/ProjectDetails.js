import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import { FetchProjectDetails } from '../../';
// import s from './ProjectDetails.module.css';

export default function RegisterView() {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  // useEffect(() => {
  //  fetchProjectDetails(id).then(setProject);
  // }, [id]);

  return (
    <>
      <h2>details of project id: {id}</h2>
    </>
  );
}