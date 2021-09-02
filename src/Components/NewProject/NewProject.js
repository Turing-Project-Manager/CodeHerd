import React, { useReducer, useEffect, useState } from 'react';

import PropTypes from 'prop-types'

import './NewProject.css'

const initialState = {
  title: '',
  description: '',
  module: '',
  collaborators: [],
  projectManager: ''
}


const NewProject = ({showForm, closeProjectForm}) => {

  const [project, setProject] = useState(initialState)

  const handleInput = (e) => {
    const { name, value } = e.target;
    setProject((prevState) => ({ ...prevState, [name]: value.trim() }));
  }

  const closeForm = () => {
    closeProjectForm();
  }

  const { title, description, module, collaborators, projectManager } = project

  return(
      <>
        {showForm && 
        
        <form className='s-shadow-lg new-project'>
          <button className='s-button-secondary close-btn' onClick={closeForm}>X</button>
          <input 
            className='text-input'
            type='text'
            placeholder='Project Title'
            name='title'
            value={project.title}
            onChange={handleInput}
          />

          <input 
            className='text-input'
            type='text'
            placeholder='Project Description'
            name='description'
            value={project.description}
            onChange={handleInput}
          />  

          <label className='mod-form'> Module: 
            <select className='mod-select' name='module' value={project.module} onChange={handleInput}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>  
          </label>

          <input 
            className='text-input'
            type='text'
            placeholder='Collaborator Emails'
            name='collaborators'
            value={project.collaborators}
            onChange={handleCollaborators}
          />  

          <button className='s-button btn'>Create Project!</button>
        </form>
        }
      </>
  )
}

export default NewProject