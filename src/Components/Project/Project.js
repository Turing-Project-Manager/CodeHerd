import React from 'react';
import './Project.css'


const Project = ({projects, viewingModNumber}) => {

  const projectsByCurrentMod = () => projects.filter(project => project.modNumber === viewingModNumber).map(currentProject => {
    return (
      <article className="s-card s-card-profile" key={currentProject.id}>
        <div className="project s-card">
          <div className="s-card-header">
            <h2 className="s-card-title title">{currentProject.name}</h2>
            <h3 className="s-card-subtitle subtitle">Module {currentProject.modNumber}</h3>
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
            <button className="s-button s-button-secondary view-project-button">View Project</button>
          </div>
        </div>
      </article>

      
    )
  })

  return (
    <div>
      {projectsByCurrentMod()}
    </div>
  )
}

export default Project;