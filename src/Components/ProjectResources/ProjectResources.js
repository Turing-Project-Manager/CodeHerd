import React, { useState } from 'react'
import { useMutation } from '@apollo/client'
import { GET_PROJECT, CREATE_RESOURCE } from '../..'

import './ProjectResources.css'

import plus from '../../assets/plus.png'

const initialState = {
  content: '',
  name: '',
  project: {},
  resourceType: '',
  tags: []
}

const ProjectResources = () => {

  const [newResource, setNewResource] = useState(initialState)
  const [resources, setResources] = useState([])
  const [showAddResource, setShowAddResource] = useState(false)
  const [formError, setFormError] = useState('')
  const [editProjectResources, { loading , error, data }] = useMutation(CREATE_RESOURCE, {
    refetechQueries: [GET_PROJECT]
  })

  if ( error) {
    console.log('error from projectResources', error)
  }

  if ( loading) {
    console.log('loading from projectResources', loading)
  }

  if ( data ) {
    console.log('data from projectResources', data)
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
    setNewResource((prevState) => ({ ...prevState, [name]: value.trim() }));
  }

  const submitResource = (e) => {
    e.preventDefault();
    if (!newResource.content.length || !newResource.name.length || !newResource.resourceType.length) {
      setFormError('You must fill out all form fields to continue.')
    } else {
      editProjectResources({
        variables: {
          content: newResource.content, 
          name: newResource.name,
          project: newResource.project, 
          resourceType: newResource.resourceType,
          tags: newResource.tags
        }
      })


      setFormError('')
    } 
    clearInputs();
  }
  console.log('resources', resources)
  const resourcesToDisplay = resources.map(resource => {
    return(
      <article className='resource-card'>
        <a className='proj-resource' 
          href={resource.content} 
          key={resource.content}>{resource.name}</a>
          <p>{resource.resourceType}</p>

      </article>
    )
  })

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
            {resourcesToDisplay}
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

          <input
            className='text-input'
            type='text'
            placeholder='Resource Type (??)'
            name='resourceType'
            value={newResource.resourceType}
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