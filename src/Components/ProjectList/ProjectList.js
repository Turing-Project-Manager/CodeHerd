import React from 'react';
import './ProjectList.css';


const ProjectList = ({ projects }) => {

  const filterByMod = (event) => {
    console.log(projects)
    let projectsByMod = projects.map((currentProject) => {
      currentProject.mod_number === event.target.value
    })
    console.log(event.target.value)
    return projectsByMod;
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
        <article className="project"> 
          <h3 className="s-h3 project-name">Project Name</h3>
          <p className="s-text-body"> This a one sentence summary of the project </p>
          <p className="s-text-body">Mod 3</p>
          <p className="s-text-body">Created 9.25.21</p>
          <p className="s-text-body">Updated 9.25.21</p>
          <p className="s-text-body"> Morgan Turing, Ben Turing, Peanut Turing, Rutabaga Turing</p>
        </article>
        <article className="project"> 
          <h3 className="s-h3 project-name">Project Name</h3>
          <p className="s-text-body"> This a one sentence summary of the project </p>
          <p className="s-text-body">Mod 3</p>
          <p className="s-text-body">Created 9.25.21</p>
          <p className="s-text-body">Updated 9.25.21</p>
          <p className="s-text-body"> Morgan Turing, Ben Turing, Peanut Turing, Rutabaga Turing</p>
        </article>
        <article className="project"> 
          <h3 className="s-h3 project-name">Project Name</h3>
          <p className="s-text-body"> This a one sentence summary of the project </p>
          <p className="s-text-body">Mod 3</p>
          <p className="s-text-body">Created 9.25.21</p>
          <p className="s-text-body">Updated 9.25.21</p>
          <p className="s-text-body"> Morgan Turing, Ben Turing, Peanut Turing, Rutabaga Turing</p>
        </article>
        <article className="project"> 
          <h3 className="s-h3 project-name">Project Name</h3>
          <p className="s-text-body"> This a one sentence summary of the project </p>
          <p className="s-text-body">Mod 3</p>
          <p className="s-text-body">Created 9.25.21</p>
          <p className="s-text-body">Updated 9.25.21</p>
          <p className="s-text-body"> Morgan Turing, Ben Turing, Peanut Turing, Rutabaga Turing</p>
        </article>
      </section>
    </section>
  )
};

export default ProjectList;
