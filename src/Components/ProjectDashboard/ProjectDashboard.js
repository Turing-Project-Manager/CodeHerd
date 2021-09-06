import React, { useState } from 'react'
import ProjectNav from '../ProjectNav/ProjectNav'
import ProjectLinks from '../ProjectLinks/ProjectLinks'
import Collaborators from '../Collaborators/Collaborators'
import ProjectResources from '../ProjectResources/ProjectResources'
import Templates from '../Templates/Templates'
import PropTypes from 'prop-types'

import plus from '../../assets/plus.png'
import'./ProjectDashboard.css'


const ProjectDashboard = ({project}) => {


  return (
    <>
      <ProjectNav />
      <main className='project-dashboard'>
        <section className='project-header'>
          <h2 className='s-h2 s-text-center'>CodeHerd</h2>
          <p className='s-text-center s-font-lg s-m-3 project-summary'>A summary here about some project info and why it is important</p>
        </section>
        <ProjectLinks />
      
        <Collaborators />
       
        <ProjectResources />

        <Templates />
        

      </main>
    </>
  )

}

export default ProjectDashboard