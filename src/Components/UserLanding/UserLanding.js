import React from 'react';
import PropTypes from 'prop-types';
import './UserLanding.css'
import topImage from '../../assets/user-landing-group-at-computers.svg'


const UserLanding = () => {

  return (
    <section className="userLanding">
      <div className="top-image-container">
        <section className="text-box"> 
          <h1>CodeHerd</h1>
          <p className="app-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lacinia dui libero, nec semper libero sagittis id. </p>
          <button className="continue-with-github">Continue with Github</button>
        </section>
        <img src={topImage} />
        </div>
        <div className="border-container">
          <section className="blue-border"> 
          </section>
          <section className="yellow-border"> 
          </section>
          <section className="red-border"> 
          </section>
      </div>
      
    </section>
  )
}

export default UserLanding;