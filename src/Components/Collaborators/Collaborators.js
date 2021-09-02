import React, { useState } from 'react'

import'./Collaborators.css'

const initialState = {
  name: '',
  email: '',
  isPM: false
}

const Collaborators = ({showAddCollab, closeCollabForm}) => {

  const [newCollaborator, setNewCollaborator] = useState(initialState)
  const [collaborators, setCollaborators] = useState([])

  const handleCollabInput = (e) => {
    const { name, value } = e.target;
    setNewCollaborator((prevState) => ({ ...prevState, [name]: value }));
  }

  const submitCollaborator = (e) => {
    e.preventDefault();
    {newCollaborator.name.length && newCollaborator.email.length &&
      setCollaborators(allCollaborators => [...allCollaborators, newCollaborator])
    }
    clearInputs();
  }

  const collaboratorProfiles = collaborators.map(collaborator => {
    return(
      <article class="s-card s-card-profile s-border-yellow-500">
        <div class="s-card-header">
          <img class="s-card-profile-pic" src="https://d682ma8ami8n4.cloudfront.net/images/staff/kasperowicz.jpg" />
          <div class="s-card-header-right">
            <h2 class="s-card-title">Card Title</h2>
            <h3 class="s-card-subtitle">Card Subtitle</h3>
          </div> 
        </div> 
        <div class="s-card-content">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum risus odio quis sit mattis in luctus. Dignissim auctor aliquam suspendisse non in ac, purus. Aliquam arcu justo quam lorem at id proin morbi. A arcu accumsan, eu id fringilla non.</p>
        </div>
        <div class="s-card-footer">
          <button class="s-button s-button-secondary">Example Button</button>
        </div>
      </article>
    )
  })

  const clearInputs = () => {
    setNewCollaborator({...initialState})
  }

  return(
    <section className='project-collabs'>
    
        <article className='s-h3 s-shadow-md collaborator-profile'>
          <h3 className='s-text-center s-m-3'>Project Collaborators</h3>
          {!collaborators.length ?
            <p className='s-font-lg s-text-center .s-m-3'>No collaborators yet! Click below to add one.</p> :
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

            <button className='s-button btn' onClick={submitCollaborator}>Add Collaborator!</button>
        </form>
      }
    </section>
  )

}

export default Collaborators