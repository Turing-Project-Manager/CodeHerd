import React from 'react';
import './Project.css'


const Project = ({projects, viewingModNumber}) => {




  const projectsByCurrentMod = projects.filter(project => project.mod_number === viewingModNumber).map(currentProject => {
    return (
      <div className="project s-card" key={currentProject.id}>
        <div className="s-card-header">
          <h2 className="s-card-title title">{currentProject.name}</h2>
          <h3 className="s-card-subtitle subtitle">Module {currentProject.mod_number}</h3>
        </div> 
        <div className="s-card-content body-text">
          <p>{currentProject.summary}</p>
          <div className="s-card-content body-text">
            Collaborators <p>{currentProject.collaborators.map(collaborator => `${collaborator.name} `)}</p>
          </div>
            <p> Updated {currentProject.updated_at} </p>
            <p> Created {currentProject.created_at} </p>
        </div>
        <div className="s-card-footer footer">
          <button class="s-button s-button-secondary view-project-button">View Project</button>
        </div>
      </div>
      
    )
  })

  return (
    <div>
      {projectsByCurrentMod}
    </div>
  )
}

export default Project;