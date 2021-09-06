import React from 'react';
import './Project.css'


const Project = ({project, viewingModNumber}) => {


  return (
    <div>
      <article className="s-card s-card-profile" key={project.id}>
        <div className="project s-card">
          <div className="s-card-header">
            <h2 className="s-card-title title">{project.name}</h2>
            <h3 className="s-card-subtitle subtitle">Module {project.modNumber}</h3>
          </div> 
          <div className="s-card-content body-text">
            <p>{project.summary}</p>
            <div className="s-card-content body-text">
              Collaborators <p>{project.collaborators.map(collaborator => `${collaborator.name} `)}</p>
            </div>
              <p> Updated {project.updated_at} </p>
              <p> Created {project.created_at} </p>
          </div>
          <div className="s-card-footer footer">
            <button className="s-button s-button-secondary view-project-button">View Project</button>
          </div>
        </div>
      </article>
      {/* {projectsByCurrentMod()} */}
    </div>
  )
}

export default Project;