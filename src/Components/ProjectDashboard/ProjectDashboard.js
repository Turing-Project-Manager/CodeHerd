import React, { useState } from 'react'
import ProjectNav from '../ProjectNav/ProjectNav'
import ProjectLinks from '../ProjectLinks/ProjectLinks'
import PropTypes from 'prop-types'


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
      <main>
        <h2>Project Title</h2>
        <ProjectLinks showAddLink={showAddLink} closeLinkForm={closeLinkForm} />
        <button onClick={showLinkForm}>Add Project Links!</button>
        

      </main>
    </>
  )

}

export default ProjectDashboard