import React from 'react';
import Nav from '../Nav/Nav.js'
import email from '../../assets/email.svg';
import github from '../../assets/github-logo.png';
import slack from '../../assets/slack-logo.png';
import profilePic from '../../assets/user-profile-pic-2.jpeg';
import './UserProfile.css';


const UserProfile = () => {

  return (
    <div className="page-container">
      <Nav />
      <section className="profile-container">
        <img src={profilePic} className="profile-pic" />
        <h2 className="s-h2">Morgan Turing</h2>
        <p className="s-text-body">Front-end Engineer</p>
        <p className="s-text-body">Cohort: 2013</p>
        <section className="contact-info"> 
          <div className="info-box"> 
            <img src={email} className="contact-icon" />
            <p className="contact s-text-body">morgan@email.com</p>
          </div>
          <div className="info-box"> 
            <img src={github} className="contact-icon" />
            <p className="contact s-text-body">@morganturing</p>
          </div>
          <div className="info-box"> 
            <img src={slack} className="contact-icon" />
            <p className="contact s-text-body">@morganTuring</p>
          </div>
        </section>
          <button className="edit-button s-button">Edit Profile </button>
      </section>
    </div>
  )
}

export default UserProfile;