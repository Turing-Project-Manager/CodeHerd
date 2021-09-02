import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Nav from '../Nav/Nav';
import Landing from '../Landing/Landing';
import UserLanding from '../UserLanding/UserLanding';
import ProjectDashboard from '../ProjectDashboard/ProjectDashboard';
import './App.css';

import NewProject from '../NewProject/NewProject';
import './App.css'

const App = () => {



  return (
    <section className="app">
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route path='/userLanding' component={UserLanding} />

   
      </Switch>
      {/* <ProjectDashboard /> */}
    </section>
  )
};

export default App;


