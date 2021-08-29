import React from 'react';
import PropTypes from 'prop-types';
import './UserLanding.css'
import topImage from '../../assets/user-landing-group-at-computers.svg'


const UserLanding = () => {

  return (
    <section className="userLanding">
      <div className="top-image-container">
        <img src={topImage} />
        <div className="border-container">
          <section className="blue-border"> 
          </section>
          <section className="yellow-border"> 
          </section>
          <section className="red-border"> 
          </section>
        </div>
      </div>
      
    </section>
  )
}

export default UserLanding;