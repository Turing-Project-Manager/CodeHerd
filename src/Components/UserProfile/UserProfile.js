import React from 'react';
import emailIcon from '../../assets/email.svg';
import githubIcon from '../../assets/github-logo.png';
import slackIcon from '../../assets/slack-logo.png';
import profilePic from '../../assets/user-profile-pic-2.jpeg';
import './UserProfile.css';


const UserProfile = ({ user }) => {

  return (
      <section className="profile-container">
        <img src={profilePic} className="profile-pic" alt="imported from Github profile"/>
        <h2 className="s-h2">{user.name}</h2>
        <p className="s-text-body">Front-end Engineer</p>
        <p className="s-text-body">Cohort {user.cohort}</p>
        <section className="contact-info"> 
          <div className="info-box"> 
            <img src={emailIcon} className="contact-icon" alt="email icon" />
            <p className="contact s-text-body">{user.email}</p>
          </div>
          <div className="info-box"> 
            <img src={githubIcon} className="contact-icon" alt="Github icon" />
            <p className="contact s-text-body">{user.github_handle} </p>
          </div>
          <div className="info-box"> 
            <img src={slackIcon} className="contact-icon" alt="slack icon"/>
            <p className="contact s-text-body">{user.slack_handle}</p>
          </div>
        </section>
          <button className="edit-button s-button">Edit Profile </button>
      </section>
  )
}

export default UserProfile;