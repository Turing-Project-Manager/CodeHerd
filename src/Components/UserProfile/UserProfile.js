import React, { useState, useEffect } from 'react';
import emailIcon from '../../assets/email.svg';
import githubIcon from '../../assets/github-logo.png';
import slackIcon from '../../assets/slack-logo.png';
import profilePic from '../../assets/user-profile-pic-2.jpeg';
import './UserProfile.css';


const UserProfile = ({ user }) => {
  const [isEditingProfile, setEditingProfile] = useState(false);
  const [program, setProgram] = useState('Back-end Program')
  const [workingStyle, setWorkingStyle] = useState(user.working_styles);
  const [cohort, setCohort] = useState(user.cohort);
  const [name, setName] = useState(user.name);
  const [slackHandle, setSlackHandle] = useState(user.slack_handle)
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    setUserInfo(user)
    console.log({user})
  }, []);

  const editProfile = () => {
    if (!isEditingProfile) {
      setEditingProfile(true)
    } else {
      setEditingProfile(false)
    }
  }

  const handleProgramChange = (event) => {
    setProgram(event.target.value)
    user.program = event.target.value
  }

  const handleWorkingStyleChange = (event) => {
    setWorkingStyle(event.target.value);
    user.working_styles = event.target.value
  }

  const handleCohortChange = (event) => {
    setCohort(event.target.value);
    user.cohort = event.target.value;
  }

  const handleNameChange = (event) => {
    setName(event.target.value);
    user.name = event.target.value;
  }

  const handleSlackHandleChange = (event) => {
    setSlackHandle(event.target.value);
    user.slack_handle = event.target.value;
  }

  return (
      <section className="profile-container">
        <img src={user.url} className="profile-pic" alt="imported from Github profile"/>
        <h2 className="s-h2">
          
          {!!isEditingProfile ? <input type="text" className="input" placeholder={user.name} value={name}  onChange={handleNameChange} required /> : ` ${user.name}` }
        </h2>
        <p className="s-text-body"> {user.pronouns} </p>
        <div>
          {!!isEditingProfile ? 
          <select className="drop-down s-content s-text-body" name="program" id="program" value={program} onChange={handleProgramChange}>
          <option value="Back-end-program">Back-end Program</option>
          <option value="Front-end-program">Front-end Program</option>
        </select> : <p className="s-text-body">{program}</p> }
        </div>
        <p className="s-text-body"> Cohort  
          {!!isEditingProfile ? <input type="text" className="cohort-input" maxlength="4" placeholder={user.cohort} value={cohort} onChange={handleCohortChange} required /> : ` ${user.cohort}` }
        </p>
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
            <p className="contact s-text-body">
            {!!isEditingProfile ? <input type="text" className="input" placeholder={user.slack_handle} value={slackHandle}  onChange={handleSlackHandleChange} required /> : ` ${user.slack_handle}` }
            </p>
          </div>
        </section>
        <label className="label s-text-body">Preferred Working Style </label>
        {!!isEditingProfile ? 
          <select className="drop-down s-content s-text-body" name="working-style" id="workingStyle" value={workingStyle} onChange={handleWorkingStyleChange}>
          <option value="Mostly Driver-Navigator">Mostly Driver-Navigator</option>
          <option value="Even Mix">Even Mix</option>
          <option value="Mostly Solo">Mostly Solo</option>
        </select> : <p className="s-text-body"> {workingStyle} </p> }

        

        <button className="edit-button s-button" onClick={editProfile}>
        {!!isEditingProfile ? 
          "Save Profile" : "Edit Profile" } 
        </button>
      </section>
  )
}

export default UserProfile;