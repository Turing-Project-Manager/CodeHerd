import React, { useState } from 'react'

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

  const showResourceForm = () => {
    setShowAddResource(true)
  }

  const closeResourceForm = () => {
    setShowAddResource(false)
  }

  const handleResourceInput = (e) => {
    const { name, value } = e.target;
    setNewResource((prevState) => ({ ...prevState, [name]: value }));
  }

  const submitResource = (e) => {
    e.preventDefault();
    {newResource.content.length && newResource.name.length && newResource.resourceType.length &&
      setResources(allResources => [...allResources, newResource])
    }
    clearInputs();
  }

  const resourcesToDisplay = resources.map(resource => {
    return(
      <a className='proj-resource' 
        href={resource.content} 
        key={resource.content}>{resource.name}</a>
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
          <h4>Add Resource</h4>
        </div>
        <h3 className='s-text-center s-m-3'>Project resources</h3>
        {!resources.length ?
          <p className='s-font-lg s-text-center .s-m-3'>No project resources yet! Click below to add one.</p> :
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

            <button className='s-button btn' onClick={submitResource}>Add Resource!</button>
        </form>
      }
      
      
    </section>
  )

}

export default ProjectResources