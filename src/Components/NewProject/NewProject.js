import React, { useReducer, useEffect } from 'react';

import PropTypes from 'prop-types'

import './NewProject.css'

const initialState = {
  title: '',
  description: '',
  module: '',
  collaborators: [],
  projectManager: ''
}

const reducer = (project, {field, value}) => {
  return {
    ...project,
    [field]: value
  }
}

const NewProject = ({showForm, closeProjectForm}) => {

  const [project, setProject] = useReducer(reducer, initialState)

  const handleInput = (e) => {
    setProject({field: e.target.name, value: e.target.value})
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

          <button className='s-button-primary submit-proj-btn'>Create Project!</button>
        </form>
        }
      </>
  )
}

export default NewProject