import React, { useEffect, useState } from 'react'

import { useMutation } from '@apollo/client'
import { CREATE_COLLABORATOR, GET_COLLABORATOR } from '../..'

import plus from '../../assets/plus.png'
import'./Collaborators.css'

const initialState = {
  name: '',
  email: '',
  isPM: false
}

const Collaborators = ({project}) => {

  const [newCollaborator, setNewCollaborator] = useState(initialState)
  const [collaborators, setCollaborators] = useState([])
  const [showAddCollab, setShowAddCollab] = useState(false)
  const [formError, setFormError] = useState('')
  const [addToCollaborators, {error, loading, data} ] = useMutation(CREATE_COLLABORATOR,  {
    refetchQueries: GET_COLLABORATOR
  })

  useEffect(() => {
    {!!error && console.log('error in collaborators', error)}
    {!!loading && console.log('loading collaborators', loading)}
    setCollaborators(project.data.project.collaborators)
  }, collaborators)

  const handleCollabInput = (e) => {
    const { name, value } = e.target;
    setNewCollaborator((prevState) => ({ ...prevState, [name]: value }));
  }

  const submitCollaborator = (e) => {
    e.preventDefault();
    if (!newCollaborator.name.length || !newCollaborator.email.length){
      setFormError('You must enter a value for name and email to submit.')
    } else {
      addToCollaborators({
        variables: {
          userId: project.data.project.owner.id,
          email: newCollaborator.email,
          projectId: project.data.project.id
        }
      })
      setFormError('')
    }
    
    clearInputs();
  }

  
  const showCollabForm = () => {
    setShowAddCollab(true)
  }

  const closeCollabForm = () => {
    setShowAddCollab(false)
    setFormError('')
  }

  const clearInputs = () => {
    setNewCollaborator({...initialState})
  }


  const collaboratorProfiles = collaborators.map(collaborator => {
    
    return(
      <article class="s-card s-card-profile s-border-yellow-500 collab-card">
        <div class="s-card-header collab-info">
          <img class="s-card-profile-pic collab-img" src={collaborator.user.image} />
          <div class="s-card-header-right collab-name-email">
            <h2 class="s-card-title collab-name">{collaborator.user.name}</h2>
            <h3 class="s-card-subtitle collab-email">{collaborator.user.githubHandle}</h3>
          </div> 
        </div> 
      </article>
    )
  })

  return(
    <section className='project-collabs'>
    
        <article className='s-h3 s-shadow-md collaborator-profile'>
          <div className='add-collab-btn-text'>
            <button className='s-button-secondary s-border-radius-2 add-collab-btn'onClick={showCollabForm}>
              <img className='plus' src={plus} alt='plus sign' /></button>
          </div>
          <h3 className='s-text-center s-m-3 resource-h3'>Project Collaborators</h3>
          {!collaborators.length ?
            <p className='s-font-lg s-text-center .s-m-3 no-text'>No collaborators yet! Click above to add one.</p> :
            <div className='collaborator-names'>
              {collaboratorProfiles}
            </div>
          }
        </article>
      
      {showAddCollab && 
        <form className='s-shadow-md add-collab-form'>
          <button className='s-button-secondary close-btn' onClick={closeCollabForm}>X</button>
          <input
            className='text-input'
            type='text'
            placeholder='Collaborator Name'
            name='name'
            value={newCollaborator.name}
            onChange={handleCollabInput}
            />

          <input
            className='text-input'
            type='text'
            placeholder='Collaborator Email'
            name='email'
            value={newCollaborator.email}
            onChange={handleCollabInput}
            />  

          <label className='pm'> Project Manager: 
            <input
              type="checkbox"
              name="isPM"
              value={true}
              onChange={handleCollabInput}
            />
          </label>
          
          {!!formError.length && <p className='form-error'>{formError}</p>}

          <button className='s-button btn' onClick={submitCollaborator}>Add Collaborator!</button>
        </form>
      }
    </section>
  )

}

export default Collaborators