import React, {useReducer, useState} from 'react'

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
    setLinks(allLinks => [...allLinks, newLink])
    clearInputs();
  }

  const linksToDisplay = links.map(link => {
    return(
      <a href={link.url} key={link.url}>{link.name}</a>
    )
  })

  const clearInputs = () => {
    setNewLink({...initialState})
  }

  return(
    <section className='project-links'>
      {!links.length ?
        <h3>No project links yet! Click below to add one.</h3> :
        <h3>{linksToDisplay}</h3>
      }
      {showAddLink && 
        <form>
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

            <button onClick={submitLink}>Add Link!</button>
        </form>
      }
      
    </section>
  )
}

export default ProjectLinks