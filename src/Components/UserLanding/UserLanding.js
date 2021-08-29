import React from 'react';
import './UserLanding.css'
import topImage from '../../assets/user-landing-group-at-computers.svg'


const UserLanding = () => {

  return (
    <section className="userLanding">
      <div className="top-image-container">
        <section className="text-box"> 
          <h1>CodeHerd</h1>
          <p className="create-page-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lacinia dui libero, nec semper libero sagittis id. </p>
          <button className="continue-with-github">Continue with Github</button>
        </section>
        <img src={topImage} alt="students around a table coding on laptops" />
      </div>
      <div className="border-container">
        <section className="blue-border"> 
        </section>
        <section className="yellow-border"> 
        </section>
        <section className="red-border"> 
        </section>
      </div>
      <div className="links-container"> 
        <section className="blue-section"> 
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lacinia dui libero, nec semper libero sagittis id. </p>
        </section>
        <section className="yellow-section"> 
        </section>
        <section className="red-section"> 
        </section>
      </div>
    </section>
  )
}

export default UserLanding;