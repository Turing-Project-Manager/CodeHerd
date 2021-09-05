import React, { useState } from 'react';
import './ProjectList.css';
import Project from '../Project/Project';



const ProjectList = ({ projects }) => {
  const [viewingModNumber, setViewingModNumber] = useState("1")
  
  const filterByMod = (event) => {
    setViewingModNumber(event.target.value)
  } 


    
  return (
    <section className="project-list">
      <section className="mod-selection"> 
        <button className="mod-button s-link" value="1" onClick={filterByMod}>Mod 1</button>
        <button className="mod-button s-link" value="2" onClick={filterByMod}>Mod 2</button>
        <button className="mod-button s-link" value="3" onClick={filterByMod}>Mod 3</button>
        <button className="mod-button s-link" value="4" onClick={filterByMod}>Mod 4</button>
      </section>
      <section className="project-section"> 
        <Project projects={projects} viewingModNumber={viewingModNumber} />
      </section>
    </section>
  )
};

export default ProjectList;
