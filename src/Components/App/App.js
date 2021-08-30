import React from 'react';
import Nav from '../Nav/Nav';
// import Landing from '../Landing/Landing';
import UserLanding from '../UserLanding/UserLanding';
import './App.css';

import NewProject from '../NewProject/NewProject';
import './App.css'

const App = () => {



  return (
    <section className="app">
      <Nav />
      <UserLanding />
      <NewProject />
    </section>
  )
};

export default App;


