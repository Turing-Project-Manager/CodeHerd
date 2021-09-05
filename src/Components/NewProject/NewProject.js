import React, { useReducer, useEffect, useState } from 'react';
import { useMutation } from '@apollo/client';

import PropTypes from 'prop-types'

import './NewProject.css'
import { CREATE_NEW_PROJECT } from '../..';
import { mod } from 'prelude-ls';

const initialState = {
  title: '',
  description: '',
  module: '',
  collaborators: [],
  projectManager: ''
}


const NewProject = ({user, showForm, closeProjectForm}) => {

  const [project, setProject] = useState(initialState)
  // const [createProjectInput, { data, loading, error }] = useMutation(CREATE_NEW_PROJECT)
  const { title, description, module} = project


  const handleInput = (e) => {
    const { name, value } = e.target;
    setProject((prevState) => ({ ...prevState, [name]: value.trim() }));
  }

  const closeForm = () => {
    closeProjectForm();
  }

  const submitProject = () => {
    // if (!!error) {
    //   console.log(error)
    // }
    // createProjectInput({
    //   variables: {
    //     input: {
    //       name: title,
    //       summary: description, 
    //       modNumber: module, 
    //       ownerId: user.id
    //     }
    //   }
    // })
  }


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

          <button className='s-button btn' onClick={submitProject}>Create Project!</button>
        </form>
        }
      </>
  )
}

export default NewProject