import React from 'react';
import './Project.css';
import { Route, Switch, Link } from 'react-router-dom';
import ProjectDashboard from '../ProjectDashboard/ProjectDashboard';


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
                <div className="s-card-content body-text">
                  Collaborators <p>{project.collaborators.map(collaborator => `${collaborator.name} `)}</p>
                </div>
                  <p> Updated {project.updated_at} </p>
                  <p> Created {project.created_at} </p>
              </div>
              <div className="s-card-footer footer">
                <Link to={`/${githubHandle}/${project.id}`}> 
                  <button 
                    className="s-button s-button-secondary view-project-button"
                    onClick={handleViewProjectClick}
                    >View Project
                    </button>
                </Link>
              </div>
            </div>
          </article>
        </div>
      {/* <Switch>
          <Route path='/:githubName/:projectId' render={({match}) => {
            console.log(match)
            return <ProjectDashboard project={project}/>}} 
            />
      </Switch> */}
    </article>
  )
}

export default Project;