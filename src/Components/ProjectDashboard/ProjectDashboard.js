import React, { useEffect, useState } from 'react'
import { useQuery } from '@apollo/client'
import ProjectNav from '../ProjectNav/ProjectNav'
import Collaborators from '../Collaborators/Collaborators'
import ProjectResources from '../ProjectResources/ProjectResources'
import Templates from '../Templates/Templates'
import { GET_PROJECT } from '../..'

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
      <ProjectNav githubHandle={project.owner.githubHandle} projectId={project.id} />
      <main className='project-dashboard'>
      {!!currentProject.data ? 
        <section className='project-header'>
          <h2 id='proj-title' className='s-h2 s-text-center'>{currentProject.data.project.name}</h2>
          <p  id='proj-summary' className='s-text-center s-font-lg s-m-3 project-summary'>{currentProject.data.project.summary}</p>
        </section> :
        <h2 className='s-h2 s-text-center'>Project Loading...</h2>
        }
        {!!currentProject.data ? <Collaborators project={currentProject}/> : 'Nothing yet'}
        {!!currentProject.data ? <ProjectResources project={currentProject} /> : 'Nothing yet'}
        <Templates />
      </main>
    </>
  )

}

export default ProjectDashboard