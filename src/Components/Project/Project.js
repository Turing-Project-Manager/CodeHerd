import React, { useEffect, useState } from 'react';
import './Project.css'


const Project = ({projects, viewingModNumber}) => {

  const projectsByCurrentMod = projects.filter(project => project.mod_number === viewingModNumber).map(currentProject => {
    return (
      <div className="project s-card">
        <div className="s-card-header">
          <h2 className="s-card-title">{currentProject.name}</h2>
          <h3 className="s-card-subtitle">Module {currentProject.mod_number}</h3>
        </div> 
        <div className="s-card-content">
          <p>{currentProject.summary}</p>
        </div>
        <div className="s-card-footer">
          Updated {currentProject.updated_at} <br/>
          Created {currentProject.created_at}
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