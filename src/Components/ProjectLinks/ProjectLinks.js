import React, {useReducer, useState} from 'react'

import plus from '../../assets/plus.png'
import './ProjectLinks.css'

const initialState = {
  name: '',
  url: ''
}


const ProjectLinks = () => {

  const [newLink, setNewLink] = useState(initialState)
  const [links, setLinks] = useState([])
  const [showAddLink, setShowAddLink] = useState(false)
  const [formError, setFormError] = useState('')


  const handleLinkInput = (e) => {
    const { name, value } = e.target;
    setNewLink((prevState) => ({ ...prevState, [name]: value.trim() }));
  }

  const submitLink = (e) => {
    e.preventDefault();
    if (!newLink.name.length || !newLink.url.length) {
      setFormError('You must enter values in both field to submit.')
    } else {
      setFormError('')
      setLinks(allLinks => [...allLinks, newLink])
    }
    
    clearInputs()
  }

  const linksToDisplay = links.map(link => {
    return(
      <a className='proj-link' 
        href={link.url} 
        key={link.url}>{link.name}</a>
    )
  })

  const clearInputs = () => {
    setNewLink({...initialState})
  }

  const showLinkForm = () => {
    setShowAddLink(true)
  }

  const closeLinkForm = () => {
    setShowAddLink(false)
    setFormError('')
  }

  return(
    <section className='project-links'>
      <article className='s-h3 s-shadow-md links-to-display'>
        <div className='add-link-btn-text'>
            <button className='s-button-secondary s-border-radius-2 add-link-btn'onClick={showLinkForm}>
              <img className='plus' src={plus} alt='plus sign' /></button>
          </div>
        <h3 className='s-text-center s-m-3 resource-h3'>Project Links</h3>
        {!links.length ?
          <p className='s-font-lg s-text-center .s-m-3 no-text'>No project links yet! Click above to add one.</p> :
          <div className='link-names'>
            {linksToDisplay}
          </div>
        }
      </article>
      
      {showAddLink && 
        <form className='s-shadow-md add-link-form'>
          <button className='s-button-secondary close-btn' onClick={closeLinkForm}>X</button>
          <input
            className='text-input'
            type='text'
            placeholder='Link Name'
            name='name'
            value={newLink.name}
            onChange={handleLinkInput}
            />

          <input
            className='text-input'
            type='text'
            placeholder='Link URL'
            name='url'
            value={newLink.url}
            onChange={handleLinkInput}
            />    

            {!!formError.length && <p className='form-error'>{formError}</p>}

            <button className='s-button btn' onClick={submitLink}>Add Link!</button>
        </form>
      }
      
    </section>
  )
}

export default ProjectLinks