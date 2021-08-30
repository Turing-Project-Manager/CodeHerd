import React, { useEffect, useState } from 'react';
import NewProject from '../NewProject/NewProject';
import PropTypes from 'prop-types';
import './Project.css'


const Project = () => {

  const [showForm, setShowForm] = useState(false)

  const showProjectForm = () => {
    setShowForm(true)
  }

  const closeProjectForm = () => {
    setShowForm(false)
  }

  return (
    <>
      <button onClick={showProjectForm}>New Project</button>
      <NewProject showForm={showForm} closeProjectForm={closeProjectForm}/>
    </>
  )
}

export default Project;