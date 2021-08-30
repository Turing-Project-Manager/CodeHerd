import React, { useReducer } from 'react';
import Nav from '../Nav/Nav.js'
import emailIcon from '../../assets/email.svg';
import githubIcon from '../../assets/github-logo.png';
import slackIcon from '../../assets/slack-logo.png';
import profilePic from '../../assets/user-profile-pic-2.jpeg';
import './UserProfile.css';


const UserProfile = ({ user }) => {

  // console.log({name})

  return (
    <div className="page-container">
      <Nav />
      <section className="profile-container">
        <img src={profilePic} className="profile-pic" />
        <h2 className="s-h2">{user.name}</h2>
        <p className="s-text-body">Front-end Engineer</p>
        <p className="s-text-body">Cohort {user.cohort}</p>
        <section className="contact-info"> 
          <div className="info-box"> 
            <img src={emailIcon} className="contact-icon" />
            <p className="contact s-text-body">{user.email}</p>
          </div>
          <div className="info-box"> 
            <img src={githubIcon} className="contact-icon" />
            <p className="contact s-text-body">{user.github_handle} </p>
          </div>
          <div className="info-box"> 
            <img src={slackIcon} className="contact-icon" />
            <p className="contact s-text-body">{user.slack_handle}</p>
          </div>
        </section>
          <button className="edit-button s-button">Edit Profile </button>
      </section>
    </div>
  )
}

export default UserProfile;