import React, { useReducer, useEffect, useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { GET_ALL_USER_PROJECTS, CREATE_PROJECT } from '../..';
import PropTypes from 'prop-types';
import './NewProject.css'

const initialState = {
  title: '',
  description: '',
  module: "1",
  collaborators: [],
  projectManager: ''
}


const NewProject = ({user, showForm, closeProjectForm}) => {

  let currentUser = user
  console.log(user)

  const [formError, setFormError] = useState('')
  const [project, setProject] = useState(initialState)
  const [createProjectInput, { data, loading, error }] = useMutation(CREATE_PROJECT , {
    refetchQueries: [GET_ALL_USER_PROJECTS]
  })
  const { title, description, module} = project
  const { qData, qLoading, qError } = useQuery(GET_ALL_USER_PROJECTS, {
    variables: { currentUser }
  })



  if ( qData ) {
    // console.log('data from mutation new project', qData)
  }

  if ( qError ) {
    // console.log('new project error', qError);
  }

  if ( qLoading) {
    // console.log("One monument please. New Project Loading: ", qLoading)
  }


  const handleInput = (e) => {
    const { name, value } = e.target;
    setProject((prevState) => ({ ...prevState, [name]: value }));
  }

  const closeForm = () => {
    closeProjectForm();
    clearInput();
  }

  const clearInput = () => {
    setProject(initialState)
  }

  const submitProject = (event) => {
    event.preventDefault()
    if (!!error) {
      console.log(error)
    }
    if (!project.title.length || project.title.trim() == '' || !project.module.length) {
      setFormError('Sorry, you must enter a value for all fields to submit.')
    } else {
      setFormError('') 
      clearInput();
      createProjectInput({
        variables: {
            name: project.title, 
            modNumber: String(project.module),
            summary: project.description,
            ownerId: localStorage.getItem('userId') 
          }
      }) 

    }
  }

  if ( data ) {
    console.log('data from mutation new project', data)
  }

  if ( error ) {
    console.log('new project error', error);
  }

  if ( loading) {
    console.log("One monument please. New Project Loading: ", loading)
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

          {!!formError.length && <p className='form-error'>{formError}</p>}

          <button className='s-button btn' onClick={submitProject}>Create Project!</button>
        </form>
        }
      </>
  )
}

export default NewProject