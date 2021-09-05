import React, { useState, useEffect } from 'react';
import emailIcon from '../../assets/email.svg';
import githubIcon from '../../assets/github-logo.png';
import slackIcon from '../../assets/slack-logo.png';
import { GET_USER, EDIT_USER_INPUT } from '../..';
import { useMutation, userMutation } from '@apollo/client';
import './UserProfile.css';

const initialState = {
  cohort: '',
  email: '', 
  githubHandle: '',
  id: '', 
  name: '', 
  pronouns: '',
  slackHandle: '', 
  workingStyles: ''
}


const UserProfile = ({ user }) => {
  const [isEditingProfile, setEditingProfile] = useState(false);
  const [userInfo, setUserInfo] = useState(initialState);
  const [editUserInput] = useMutation(EDIT_USER_INPUT, {
    refetchQueries: [GET_USER]
  })
  const { cohort, email, githubHandle, id, name, pronouns, slackHandle, workingStyles} = userInfo
  // const [cohort, setCohort] = useState(user.cohort);
  // const [email, setEmail] = useState(user.email);
  // const [githubHandle, setGithubHandle] = useState(user.githubHandle);
  // const [program, setProgram] = useState('Back-end Program')
  // const [workingStyle, setWorkingStyle] = useState(user.working_styles);
  // const [name, setName] = useState(user.name);
  // const [slackHandle, setSlackHandle] = useState(user.slack_handle);
  // const [pronouns, setPronouns] = useState(user.pronouns);

  useEffect(() => {
    setUserInfo(user)
    console.log('hi', userInfo.githubHandle)
    console.log('userName', userInfo.name)
  }, []);

  const editProfile = () => {
    if (!isEditingProfile) {
      setEditingProfile(true)
    } else {
      editUserInput({
        variables: {
          input: {
            userId: 2,
            githubHandle: userInfo.githubHandle,
            name: userInfo.name,
            slackHandle: userInfo.slackHandle,
            workingStyles: userInfo.workingStyle,
            cohort: userInfo.cohort
          }
        }
      })
      setEditingProfile(false)
    }
  }

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUserInfo((prevState) => ({ ...prevState, [name]: value.trim() }));
  }

  

  // const handleProgramChange = (event) => {
  //   setProgram(event.target.value)
  //   // user.program = event.target.value
  // }

  // const handleWorkingStyleChange = (event) => {
  //   setWorkingStyle(event.target.value);
  //   // user.working_styles = event.target.value
  // }

  // const handleCohortChange = (event) => {
  //   setCohort(event.target.value);
  //   // user.cohort = event.target.value;
  // }

  // const handleNameChange = (event) => {
  //   setName(event.target.value);
  //   // user.name = event.target.value;
  // }

  // const handleSlackHandleChange = (event) => {
  //   setSlackHandle(event.target.value);
  //   // user.slack_handle = event.target.value;
  // }

  return (
      <section className="profile-container">
        <img src={user.url} className="profile-pic" alt="imported from Github profile"/>
        <h2 className="s-h2">      
          {!!isEditingProfile ? 
          <input 
            className="input"
            type="text" 
            placeholder={name} 
            name="name"
            value={userInfo.name}  
            onChange={handleInput} 
            required 
          /> : ` ${name}` }
        </h2>
        <p className="s-text-body"> {userInfo.pronouns} </p>
        <div>
          {!!isEditingProfile ? 
          <select 
            className="drop-down s-content s-text-body" name="program" 
            id="program" 
            value={userInfo.program} 
            onChange={handleInput}>
          <option value="Back-end-program">Back-end Program</option>
          <option value="Front-end-program">Front-end Program</option>
        </select> : <p className="s-text-body">{userInfo.program}</p> }
        </div>
        <p className="s-text-body"> Cohort  
          {!!isEditingProfile ? 
          <input 
            type="text" 
            className="cohort-input"
            maxLength="4" 
            placeholder={userInfo.cohort} 
            value={userInfo.cohort} 
            onChange={handleInput} 
            required 
          /> : ` ${userInfo.cohort}` }
        </p>
        <section className="contact-info"> 
          <div className="info-box"> 
            <img src={emailIcon} className="contact-icon" alt="email icon" />
            <p className="contact s-text-body">{userInfo.name}</p>
          </div>
          <div className="info-box"> 
            <img src={githubIcon} className="contact-icon" alt="Github icon" />
            <p className="contact s-text-body">{userInfo.githubHandle} </p>
          </div>
          <div className="info-box"> 
            <img src={slackIcon} className="contact-icon" alt="slack icon"/>
            <p className="contact s-text-body">
            {!!isEditingProfile ? 
            <input 
              type="text" 
              className="input" 
              placeholder={userInfo.slackHandle} 
              value={userInfo.slackHandle}  
              onChange={handleInput}
              required
            /> : ` ${userInfo.slackHandle}` }
            </p>
          </div>
        </section>
        <label className="label s-text-body">Preferred Working Style </label>
        {!!isEditingProfile ? 
          <select 
            className="drop-down s-content s-text-body" 
            name="working-style" 
            id="workingStyle" 
            value={userInfo.workingStyle} 
            onChange={handleInput}>
          <option value="Mostly Driver-Navigator">Mostly Driver-Navigator</option>
          <option value="Even Mix">Even Mix</option>
          <option value="Mostly Solo">Mostly Solo</option>
        </select> : <p className="s-text-body"> {userInfo.workingStyle} </p> }
        <button className="edit-button s-button" onClick={editProfile}>
        {!!isEditingProfile ? 
          "Save Profile" : "Edit Profile" } 
        </button>
      </section>
  )
}

export default UserProfile;