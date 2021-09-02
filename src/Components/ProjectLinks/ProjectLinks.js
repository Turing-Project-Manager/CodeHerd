import React, {useReducer, useState} from 'react'

import './ProjectLinks.css'

const initialState = {
  name: '',
  url: ''
}


const ProjectLinks = ({showAddLink, closeLinkForm}) => {

  const [newLink, setNewLink] = useState(initialState)
  const [links, setLinks] = useState([])

  const handleLinkInput = (e) => {
    const { name, value } = e.target;
    setNewLink((prevState) => ({ ...prevState, [name]: value }));
  }

  const submitLink = (e) => {
    e.preventDefault();
    {newLink.name.length && newLink.url.length &&
      setLinks(allLinks => [...allLinks, newLink])
    }
    clearInputs();
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

  return(
    <section className='project-links'>
      <article className='s-h3 s-shadow-md links-to-display'>
        <h3 className='s-text-center s-m-3'>Project Links</h3>
        {!links.length ?
          <p className='s-font-lg s-text-center .s-m-3'>No project links yet! Click below to add one.</p> :
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

            <button className='s-button btn' onClick={submitLink}>Add Link!</button>
        </form>
      }
      
    </section>
  )
}

export default ProjectLinks