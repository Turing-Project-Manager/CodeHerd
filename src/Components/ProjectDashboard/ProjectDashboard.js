import React, { useState } from 'react'
import ProjectNav from '../ProjectNav/ProjectNav'
import ProjectLinks from '../ProjectLinks/ProjectLinks'
import Collaborators from '../Collaborators/Collaborators'
import PropTypes from 'prop-types'

import plus from '../../assets/plus.png'
import'./ProjectDashboard.css'


const ProjectDashboard = ({project}) => {

  const [showAddLink, setShowAddLink] = useState(false)
  const [showAddCollab, setShowAddCollab] = useState(false)

  const showLinkForm = () => {
    setShowAddLink(true)
  }

  const closeLinkForm = () => {
    setShowAddLink(false)
  }

  const showCollabForm = () => {
    setShowAddCollab(true)
  }

  const closeCollabForm = () => {
    setShowAddCollab(false)
  }

  return (
    <>
      <ProjectNav />
      <main className='project-dashboard'>
        <section className='project-header'>
          <h2 className='s-h2 s-text-center'>CodeHerd</h2>
          <p className='s-text-center s-font-lg s-m-3 project-summary'>A summary here about some project info and why it is important</p>
        </section>
        <ProjectLinks showAddLink={showAddLink} closeLinkForm={closeLinkForm} />
        <div className='add-link-btn-text'>
          <button className='s-button-secondary s-border-radius-2 add-link-btn'onClick={showLinkForm}>
            <img className='plus' src={plus} alt='plus sign' /></button>
          <h4>Add Links</h4>
        </div>
        <Collaborators showAddCollab={showAddCollab} closeCollabForm={closeCollabForm} />
        <div className='add-collab-btn-text'>
          <button className='s-button-secondary s-border-radius-2 add-collab-btn'onClick={showCollabForm}>
            <img className='plus' src={plus} alt='plus sign' /></button>
          <h4>Add Collaborators</h4>
        </div>
        

      </main>
    </>
  )

}

export default ProjectDashboard