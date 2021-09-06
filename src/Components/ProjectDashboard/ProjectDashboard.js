import React, { useEffect, useState } from 'react'
import { useQuery } from '@apollo/client'
import ProjectNav from '../ProjectNav/ProjectNav'
import ProjectLinks from '../ProjectLinks/ProjectLinks'
import Collaborators from '../Collaborators/Collaborators'
import ProjectResources from '../ProjectResources/ProjectResources'
import Templates from '../Templates/Templates'
import PropTypes from 'prop-types'
import { CREATE_RESOURCE, GET_PROJECT } from '../..'

import plus from '../../assets/plus.png'
import'./ProjectDashboard.css'


const ProjectDashboard = ({project}) => {

  const currentProject = useQuery(GET_PROJECT, {
    variables: {id: project.id}
  })
  const [projectResources, setProjectResources] = useState([])
  

  useEffect(() => {

    if (!!currentProject.error) {
      console.log('error from ProjectDashboard', currentProject.error)
    }

    if (!currentProject.loading && currentProject.data) {
      setProjectResources(currentProject.data.project.resources)
    }


  }, [currentProject, projectResources])


  return (
    <>
      <ProjectNav />
      <main className='project-dashboard'>
        <section className='project-header'>
          <h2 className='s-h2 s-text-center'>CodeHerd</h2>
          <p className='s-text-center s-font-lg s-m-3 project-summary'>A summary here about some project info and why it is important</p>
        </section>
        {/* <ProjectLinks /> */}
      
        <Collaborators />
       
        <ProjectResources project={project} />

        <Templates />
        

      </main>
    </>
  )

}

export default ProjectDashboard