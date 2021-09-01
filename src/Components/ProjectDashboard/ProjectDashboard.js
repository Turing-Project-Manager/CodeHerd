import React, { useState } from 'react'
import ProjectNav from '../ProjectNav/ProjectNav'
import ProjectLinks from '../ProjectLinks/ProjectLinks'
import PropTypes from 'prop-types'

import plus from '../../assets/plus.png'
import'./ProjectDashboard.css'


const ProjectDashboard = ({project}) => {

  const [showAddLink, setShowAddLink] = useState(false)

  const showLinkForm = () => {
    setShowAddLink(true)
  }

  const closeLinkForm = () => {
    setShowAddLink(false)
  }

  return (
    <>
      <ProjectNav />
      <main className='project-dashboard'>
        <h2 className='s-h2 s-text-center'>Project Title</h2>
        <ProjectLinks showAddLink={showAddLink} closeLinkForm={closeLinkForm} />
        <div className='add-link-btn-text'>
          <button className='s-button-secondary s-border-radius-2 add-link-btn'onClick={showLinkForm}>
            <img className='plus' src={plus} alt='plus sign' /></button>
          <h4>Add Links</h4>
        </div>
        

      </main>
    </>
  )

}

export default ProjectDashboard