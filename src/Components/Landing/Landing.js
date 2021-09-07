import React from 'react';
import './Landing.css';
import topImage  from '../../assets/user-landing-group-at-computers.svg';
import createProject from '../../assets/create-project.svg';
import addCollaborators from '../../assets/add-collaborators.svg';
import folder from '../../assets/folder.svg';

const Landing = () => {

  return (
    <section className="userLanding">
      <div className="top-image-container">
        <section className="text-box"> 
          <h1 className="s-h1">CodeHerd</h1>
          <p className="app-description s-text-body"> Search Less, Code More<br/>
          </p>
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
      <div className="button-container"> 
        <a href="https://codeherdapi.herokuapp.com/auth/github">
          <button className="continue-with-github s-text-body">Continue with Github
          </button>
        </a>
      </div>
      <div className="links-container"> 
        <section className="link"> 
          <img src={createProject} alt="add a project" className="create-project-image" /> 
          <h2 className="s-h2">CREATE A PROJECT</h2>
          <div className="mini-border blue"> 
          </div>
          <p className="link-description s-text-body"> Link your Github Repository. Add project resources and critical documents. View open issues and pull requests. </p>
        </section>
        <section className="link"> 
          <img src={addCollaborators} alt="add project collaborators" className="add-collaborators"  />
          <h2 className="s-h2"> ADD YOUR TEAM </h2>
          <div className="mini-border yellow extra-top-margin"> 
          </div>
          <p className="link-description s-text-body"> Invite your team to view project resources. </p>
        </section>
        <section className="link"> 
          <img src={folder} alt="keep everything for your project in one place" className="folder" />
          <h2 className="s-h2">EVERYTHING <br/>
          IN ONE PLACE </h2>
          <div className="mini-border red"></div> 
          <p className="link-description s-text-body"> Codeherd keeps everything for your project in one place. Spend less looking for what you need and more time coding. </p>    
        </section>
      </div>
    </section>
  )
}

export default Landing;