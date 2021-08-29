import React from 'react';
import './UserLanding.css';
import topImage  from '../../assets/user-landing-group-at-computers.svg';
import createProject from '../../assets/create-project.svg';
import addCollaborators from '../../assets/add-collaborators.svg';
import folder from '../../assets/folder.svg';

const UserLanding = () => {

  return (
    <section className="userLanding">
      <div className="top-image-container">
        <section className="text-box"> 
          <h1>CodeHerd</h1>
          <p className="app-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lacinia dui libero,<br/>
          nec semper libero sagittis id. </p>
          
          <button className="continue-with-github">Continue with Github
          </button>
        </section>
        <img src={topImage} alt="students around a table coding on laptops" className="top-image"/>
      </div>
      <div className="border-container">
        <section className="border blue"> 
        </section>
        <section className="border yellow"> 
        </section>
        <section className="border red"> 
        </section>
      </div>
      <div className="links-container"> 
        <section className="link"> 
          <img src={createProject} alt="add a project" className="create-project-image" /> 
          <h2>CREATE A PROJECT</h2>
          <div className="mini-border blue"> 
          </div>
          <p className="link-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lacinia dui libero, nec semper libero sagittis id. </p>
        </section>
        <section className="link"> 
          <img src={addCollaborators} alt="add project collaborators" className="add-collaborators"  />
          <h2> ADD YOUR TEAM </h2>
          <div className="mini-border yellow"> 
          </div>
          <p className="link-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lacinia dui libero, nec semper libero sagittis id. </p>
        </section>
        <section className="link"> 
          <img src={folder} alt="keep everything for your project in one place" className="folder" />
          <h2>EVERYTHING <br/>
          IN ONE PLACE </h2>
          <div className="mini-border red"></div> 
          <p className="link-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lacinia dui libero, nec semper libero sagittis id. </p>    
        </section>
      </div>
    </section>
  )
}

export default UserLanding;