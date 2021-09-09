import React, { useState, useEffect } from 'react'
import { useMutation } from '@apollo/client'
import { GET_PROJECT, CREATE_RESOURCE, DELETE_RESOURCE } from '../..'

import './ProjectResources.css'

import plus from '../../assets/plus.png'

const initialState = {
  content: '',
  name: '',
  project: {},
  resourceType: '',
  tags: []
}

const ProjectResources = ({ project }) => {
  const [currentProject, setCurrentProject] = useState({})
  const [newResource, setNewResource] = useState(initialState)
  const [resources, setResources] = useState([])
  const [showAddResource, setShowAddResource] = useState(false)
  const [formError, setFormError] = useState('')
  const [createProjectResources, { loading , error, data }] = useMutation(CREATE_RESOURCE, {
    refetechQueries: [GET_PROJECT]
  })
  const [deleteProjectResource, { dLoading, dError, dData }] = useMutation(DELETE_RESOURCE, {
    refetechQueries: [GET_PROJECT]
  })

  useEffect(() => {
    setCurrentProject(project)
    const resourcesToTransfer = currentProject.data
    setResources(project.data.project.resources)
  }, [currentProject, project, resources])


  if ( error || dError) {
    console.log('error from projectResources', error)
    console.log('Derror from projectResources', dError)
  }

  if ( loading || dLoading) {
    console.log('loading from projectResources', loading)
    console.log('Derror from projectResources', dLoading)
  }

  if ( data || dData ) {
    console.log('data from projectResources', data)
    console.log('Ddata from projectResources', dData)
  }

  const showResourceForm = () => {
    setShowAddResource(true)
  }

  const closeResourceForm = () => {
    setShowAddResource(false)
    setFormError('')
  }

  const handleResourceInput = (e) => {
    const { name, value } = e.target;
    setNewResource((prevState) => ({ ...prevState, [name]: value }));
  }

  const handleDeleteResourceClick = (e, resource) => {
    e.preventDefault();
    deleteProjectResource({
      variables: {
        userId: localStorage.getItem('userId'),
        projectId: project.data.project.id,
        resourceId: resource
      }
    })

  }

  const submitResource = (e) => {
    e.preventDefault();
    if (!newResource.content.length ||
        newResource.content.trim() == '' ||
        !newResource.name.length ||
        newResource.name.trim() == '') {
      setFormError('You must fill out all form fields to continue.')
    } else {
      createProjectResources({
        variables: {
          userId: localStorage.getItem('userId'),
          projectId: project.data.project.id,
          content: newResource.content, 
          name: newResource.name,
          project: newResource.project, 
          resourceType: "link",
          tags: newResource.tags
        }
      })


      setFormError('')
    } 
    clearInputs();
  }

const resourcesToDisplay = () => {
    const resourcesToMap = resources.map(resource => {
      return(
        <article className=' s-h3 s-shadow-md resource-card' key={resource.id}>
          <a className='proj-resource' 
            href={`http://${resource.content}`}
            key={resource.content}
            target="blank">{resource.name}</a>
            <p>{resource.resourceType}</p>
          <button className="s-button-secondary"
          onClick={(e) => handleDeleteResourceClick(e, resource.id)}>Delete</button>
        </article>
      )
    })
    return resourcesToMap
}

  const clearInputs = () => {
    setNewResource({...initialState})
  }

  return(
    <section className='project-resources'>
      <article className='s-h3 s-shadow-md resources-to-display'>
       <div className='add-resource-btn-text'>
          <button className='s-button-secondary s-border-radius-2 add-resource-btn'onClick={showResourceForm}>
            <img className='plus' src={plus} alt='plus sign' /></button>
        </div>
        <h3 className='s-text-center s-m-3 resource-h3'>Project resources</h3>
        {!resources.length ?
          <p className='s-font-lg s-text-center .s-m-3 no-text'>No project resources yet! Click above to add one.</p> :
          <div className='resource-names'>
            {resourcesToDisplay()}
          </div>
        }
      </article>

      {showAddResource && 
        <form className='s-shadow-md add-resource-form'>
          <button className='s-button-secondary close-btn' onClick={closeResourceForm}>X</button>
          <input
            className='text-input'
            type='text'
            placeholder='Resource Name'
            name='name'
            value={newResource.name}
            onChange={handleResourceInput}
          />

          <input
            className='text-input'
            type='text'
            placeholder='Resource URL'
            name='content'
            value={newResource.content}
            onChange={handleResourceInput}
          />  
          
          {!!formError.length && <p className='form-error'>{formError}</p>}

          <button className='s-button btn' onClick={submitResource}>Add Resource!</button>
        </form>
      }
      
    </section>
  )

}

export default ProjectResources