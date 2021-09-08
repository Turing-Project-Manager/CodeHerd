import React, { useState, useEffect } from 'react';
import emailIcon from '../../assets/email.svg';
import githubIcon from '../../assets/github-logo.png';
import slackIcon from '../../assets/slack-logo.png';
import { GET_USER, EDIT_USER_INPUT } from '../..';
import { useMutation } from '@apollo/client';
import './UserProfile.css';
import { useLocation } from 'react-router-dom'
import queryString from 'query-string'


// const initialState = {
//   cohort: '',
//   email: '', 
//   githubHandle: '',
//   id: '', 
//   name: '', 
//   pronouns: '',
//   slackHandle: '', 
//   workingStyles: ''
// }


const UserProfile = ({ user, query }) => {
  const [isEditingProfile, setEditingProfile] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  const [editUserInput, { loading, error, data }] = useMutation(EDIT_USER_INPUT, {
    refetchQueries: [GET_USER]
  })

  // const { cohort, email, githubHandle, id, name, pronouns, slackHandle, workingStyles} = userInfo
  // const [cohort, setCohort] = useState(user.cohort);
  // const [email, setEmail] = useState(user.email);
  // const [githubHandle, setGithubHandle] = useState(user.githubHandle);
  // const [program, setProgram] = useState('Back-end Program')
  // const [workingStyle, setWorkingStyle] = useState(user.working_styles);
  // const [name, setName] = useState(user.name);
  // const [slackHandle, setSlackHandle] = useState(user.slack_handle);
  // const [pronouns, setPronouns] = useState(user.pronouns);
  
  if ( data ) {
    // console.log('data from mutation', data)
  }

  if ( error ) {
    console.log('error', error);
  }

  if ( loading) {
    console.log("One monument please. Loading: ", loading)
  }
  
  useEffect(() => {
    setUserInfo(user)
  }, [user]);
  
  
  const editProfile = () => {
    if (!isEditingProfile) {
      setEditingProfile(true)
    } else {
      console.log(userInfo.workingStyles);
      
      editUserInput({
        variables: {
            userId: userInfo.id,
            githubHandle: userInfo.githubHandle,
            name: userInfo.name,
            slackHandle: userInfo.slackHandle,
            workingStyles: [userInfo.workingStyle],
            cohort: userInfo.cohort,
            pronouns: userInfo.pronouns
          }
      })
      setEditingProfile(false)
    }
  }
  
  const handleInput = (e) => {
    const { name, value } = e.target;
    setUserInfo((prevState) => ({ ...prevState, [name]: value }));
  }

  return (
      <section className="profile-container">
        <img src={userInfo.image} className="profile-pic" alt="imported from Github profile"/>
        <h2 className="s-h2">      
          {!!isEditingProfile ? 
          <input 
            className="input"
            type="text" 
            placeholder={userInfo.name}
            name="name"
            value={userInfo.name}
            onChange={handleInput}
            required
          /> : ` ${user.name}` }
        </h2>
        <p className="s-text-body"> Pronouns
          {!!isEditingProfile ?
          <input
            type="text"
            className="input"
            placeholder={userInfo.pronouns}
            name="pronouns"
            value={userInfo.pronouns}
            onChange={handleInput}
            required
          /> : ` ${userInfo.pronouns || ''}` }
        </p>
        <p className="s-text-body"> Cohort 
          {!!isEditingProfile ?
          <input 
            type="text" 
            className="cohort-input"
            maxLength="4"
            placeholder={userInfo.cohort}
            name="cohort"
            value={userInfo.cohort}
            onChange={handleInput}
            required 
          /> : ` ${userInfo.cohort || ''}` }
        </p>
        <section className="contact-info"> 
          <div className="info-box"> 
            <img src={emailIcon} className="contact-icon" alt="email icon" />
            <p className="contact s-text-body">{user.email}</p>
          </div>
          <div className="info-box"> 
            <img src={githubIcon} className="contact-icon" alt="Github icon" />
            <p className="contact s-text-body">{user.githubHandle} </p>
          </div>
          <div className="info-box"> 
            <img src={slackIcon} className="contact-icon" alt="slack icon"/>
            <p className="contact s-text-body">
            {!!isEditingProfile ? 
            <input 
              type="text" 
              className="input" 
              placeholder={userInfo.slackHandle} 
              name="slackHandle"
              value={userInfo.slackHandle}  
              onChange={handleInput}
              required
            /> : ` ${user.slackHandle || ''}` }
            </p>
          </div>
        </section>
        <label className="label s-text-body">Preferred Working Style </label>
        {!!isEditingProfile ? 
          <select 
            className="drop-down s-content s-text-body" 
            name="workingStyles" 
            id="workingStyle"
            multiple={true}
            value={userInfo.workingStyles || ''}
            onChange={handleInput}>
          <option value="Mostly Driver-Navigator">Mostly Driver-Navigator</option>
          <option value="Even Mix">Even Mix</option>
          <option value="Mostly Solo">Mostly Solo</option>
        </select> : <p className="s-text-body"> {userInfo.workingStyles} </p> }
        <button className="edit-button s-button" onClick={editProfile}>
        {!!isEditingProfile ? 
          "Save Profile" : "Edit Profile" } 
        </button>
      </section>
  )
}

export default UserProfile;