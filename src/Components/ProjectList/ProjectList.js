import React, { useState } from 'react';
import './ProjectList.css';
import Project from '../Project/Project';


const ProjectList = ({ user, projects }) => {
  const [viewingModNumber, setViewingModNumber] = useState("1")
  
  
  const filterByMod = (event) => {
    setViewingModNumber(event.target.value)
  } 

  const projectsByCurrentMod = () => {
    let filtered = projects.filter(project => project.modNumber === viewingModNumber)
    if (filtered.length === 0) {
      return <p>No projects found for Mod {viewingModNumber}</p>
    } else {
      return filtered.map(currentProject => {
        return (
          <article key={currentProject.id}>
            <Project 
                project={currentProject}
                user={user}
            />
          </article>
        )
      })
    }
  }
    
  return (
    <section className="project-list">
      <p>List of all projects by mod</p>
      <section className="mod-selection"> 
        <button className="mod-button s-link" value="1" onClick={filterByMod}>Mod 1</button>
        <button className="mod-button s-link" value="2" onClick={filterByMod}>Mod 2</button>
        <button className="mod-button s-link" value="3" onClick={filterByMod}>Mod 3</button>
        <button className="mod-button s-link" value="4" onClick={filterByMod}>Mod 4</button>
      </section>
      <section className="project-section">
      {!!projects && projects.length > 0 ?
        <article> 
          {projectsByCurrentMod()}
        </article> : "Loading"}
      </section>
    </section>
  )
};

export default ProjectList;
