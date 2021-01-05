import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

export default function ProjectDetails() {
  const { projectId } = useParams();
  const proj = useSelector(state => state.projects);
  console.log(proj);
  // find(i => i._id === projectId));
  // console.log(proj.items.iterable.find(item => item._id === { projectId }));
  // const [project, setProject] = useState(null);

  // useEffect(() => {
  //  fetchProjectDetails(id).then(setProject);
  // }, [id]);

  return (
    <>
      <h2>details of project id: {projectId}</h2>
    </>
  );
}
