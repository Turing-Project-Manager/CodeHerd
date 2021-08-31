import React from 'react';
import NewProject from '../NewProject/NewProject';
import './ProjectList.css';


const ProjectList = ({ projects, user, showProjectForm, closeProjectForm }) => {

  const filterByMod = (event) => {
    const projectsByMod = projects.filter(project => project.mod_number === event.target.value)
      .map(currentProject => {
      return (
        <div class="s-card">
          <div class="s-card-header">
            <h2 class="s-card-title">{currentProject.name}</h2>
            <h3 class="s-card-subtitle">Card Subtitle</h3>
          </div> 
          <div class="s-card-content">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum risus odio quis sit mattis in luctus. Dignissim auctor aliquam suspendisse non in ac, purus. Aliquam arcu justo quam lorem at id proin morbi. A arcu accumsan, eu id fringilla non.</p>
          </div>
          <div class="s-card-footer">Footer content
          </div>
        </div>
      )
    })
    return projectsByMod
  } 

  const projectsByCurrentMod = projects.filter(project => project.mod_number === 4)
      .map(currentProject => {
      return (
        <div class="s-card">
          <div class="s-card-header">
            <h2 class="s-card-title">{currentProject.name}</h2>
            <h3 class="s-card-subtitle">Card Subtitle</h3>
          </div> 
          <div class="s-card-content">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum risus odio quis sit mattis in luctus. Dignissim auctor aliquam suspendisse non in ac, purus. Aliquam arcu justo quam lorem at id proin morbi. A arcu accumsan, eu id fringilla non.</p>
          </div>
          <div class="s-card-footer">Footer content
          </div>
        </div>
      )
    })
  



  // const filterByMod = (event) => {
  //   console.log(projects)
  //   let projectsByMod = projects.filter((currentProject) => {
  //     //console.log({currentProject})
  //     // currentProject.mod_number === event.target.value
  //   }).map((project, index) => {
  //     return (
  //       <div class="s-card">
  //         <div class="s-card-header">
  //           <h2 class="s-card-title">Card Title</h2>
  //           <h3 class="s-card-subtitle">Card Subtitle</h3>
  //         </div> 
  //         <div class="s-card-content">
  //           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum risus odio quis sit mattis in luctus. Dignissim auctor aliquam suspendisse non in ac, purus. Aliquam arcu justo quam lorem at id proin morbi. A arcu accumsan, eu id fringilla non.</p>
  //         </div>
  //         <div class="s-card-footer">
  //           Footer content
  //         </div>
  //       </div>
  //     )
  //   })
    
  //   return projectsByMod;
  // }

  return (
    <section className="project-list">
      {/* <NewProject showProjectForm={showProjectForm} closeProjectForm={closeProjectForm} />
      <button className='s-button-primary new-proj-btn' onClick={showProjectForm}>New Project</button> */}
      <section className="mod-selection"> 
        <button className="mod-button s-link" value="1" onClick={filterByMod}>Mod 1</button>
        <button className="mod-button s-link" value="2" onClick={filterByMod}>Mod 2</button>
        <button className="mod-button s-link" value="3" onClick={filterByMod}>Mod 3</button>
        <button className="mod-button s-link" value="4" onClick={filterByMod}>Mod 4</button>
      </section>
      <section className="project-section"> 
        {projectsByCurrentMod}
      </section>
    </section>
  )
};

export default ProjectList;
