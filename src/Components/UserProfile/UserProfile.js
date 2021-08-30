import React from 'react';
import email from '../../assets/email.svg';
import github from '../../assets/github-logo.png';
import slack from '../../assets/slack-logo.png';
import profilePic from '../../assets/user-profile-pic-2.jpeg';
import './UserProfile.css';


const UserProfile = () => {

  return (
    <div className="page-container">
      <section className="nav-bar"> 
        Nav
      </section>
      <section className="profile-container">
        <img src={profilePic} className="profile-pic" />
        <h2>Morgan Turing</h2>
        <p>Front-end Engineer</p>
        <p>Cohort: 2013</p>
        <section className="contact-info"> 
          <div className="info-box"> 
            <img src={email} className="contact-icon" />
            <p className="contact">morgan@email.com</p>
          </div>
          <div className="info-box"> 
            <img src={github} className="contact-icon" />
            <p className="contact">@morganturing</p>
          </div>
          <div className="info-box"> 
            <img src={slack} className="contact-icon" />
            <p className="contact">@morganTuring</p>
          </div>
        </section>
          <button>Edit Profile </button>
      </section>
    </div>
  )
}

export default UserProfile;