import React from 'react';
import './Project.css';
import { Link } from 'react-router-dom';

const Project = ({ project, user }) => {

  const githubHandle = user.githubHandle;

  const handleViewProjectClick = () => {

  }

  return (
    <article className="project-preview">
        <div key={project.id}>
          <article className="s-card s-card-profile">
            <div className="project s-card">
              <div className="s-card-header">
                <h2 className="s-card-title title">{project.name}</h2>
                <h3 className="s-card-subtitle subtitle">Module {project.modNumber}</h3>
              </div> 
              <div className="s-card-content body-text">
                <p>{project.summary}</p>
                <div className="s-card-content body-text ">
                  Collaborators <p className='collaborator-list'>{project.collaborators.map(collaborator => {
                    return (
                      <span className='collaborator'>
                        {collaborator.user.name}
                        </span>
                      )
                    })}</p>
                </div>
              </div>
              <div className="s-card-footer footer">
                <Link to={`/${githubHandle}/${project.id}`}> 
                  <button 
                    className="s-button s-button-secondary view-project-button"
                    onClick={handleViewProjectClick}
                    id="view-project"
                    >View Project</button>
                </Link>
              </div>
            </div>
          </article>
        </div>
    </article>
  )
}

export default Project;