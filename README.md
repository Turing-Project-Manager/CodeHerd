<div align="center">
  <a href=https://github.com/Turing-Project-Manager/CodeHerdAPI/graphs/contributors><img src="https://img.shields.io/github/contributors/Turing-Project-Manager/CodeHerd.svg?style=for-the-badge" /></a>
  <a href=https://github.com/Turing-Project-Manager/CodeHerdAPI/network/members><img src="https://img.shields.io/github/forks/Turing-Project-Manager/CodeHerd.svg?style=for-the-badge" /></a>
  <a href=https://github.com/Turing-Project-Manager/CodeHerdAPI/stargazers><img src="https://img.shields.io/github/stars/Turing-Project-Manager/CodeHerd.svg?style=for-the-badge" /></a>
  <a href=https://github.com/Turing-Project-Manager/CodeHerdAPI/issues><img src="https://img.shields.io/github/issues/Turing-Project-Manager/CodeHerd.svg?style=for-the-badge" /></a>
  <img src=https://circleci.com/gh/Turing-Project-Manager/CodeHerd.svg?style=svg />
</div>


# CodeHerd

### Table of Contents
- [Overview](#overview)
- [Learning Goals](#learning-goals)
- [Instructions for Viewing](#instructions-for-viewing)
- [Walkthrough](#walkthrough)
- [Tech Stack](#tech-stack)
- [Libraries & Other Technology](#libraries-&-other-technology)
- [Future Features](#future-features)
- [Contributors](#contributors)


## Overview

Turing students obtain a lot of knowledge about coding and the world of software development during their time here. As we have brought on more knowledge and the projects become more complicated, we've noticed one thing: we don't have a single resource at our finger tips to keep track of all things project related. We spend hours sorting through tabs, looking back into Slack message history, all to find the links and documents necessary for our project. CodeHerd is our solution. CodeHerd is a project management app where Turing students can store all the links to their projects. They can keep track of project collaborators and resources they may use for each individual project. And they can go back in time to view resources they have collected for previous projects. While this original version of CodeHerd is simple in its execution, it holds the promise of becoming a robust application that is the answer to many Turing student needs. 

# Learning Goals
  * Demonstrate working knowledge of functional components with hooks
  * Work in conjunction with a backend team to build a full project from the ground up
  * Build upon the foundational skills of React  
  * Utilizes React Router for url navigation
  * Utilize graphQL to query and mutate data on the backend
  * Testing performed with Cypress to better understand asynch JS
  
# Instructions for Viewing

 View the deployed application via Heroku [here](https://codeherd.herokuapp.com/)
  


# Walkthrough
   **This app is currently desktop only. It is built with Turing students - who are rarely away from their computers - in mind. **
  
- A user can authorize GitHub to log in.
 
 #### Home Page

![Home](https://user-images.githubusercontent.com/78318468/132722476-28cabd93-a4ca-4e2d-9c76-7130b7d30cc5.gif)


 
- A user has a landing page for their profile and projects. Here they can edit their profile information, view past projects, and create a new project.
 #### User Profile
  

![UserProfile](https://user-images.githubusercontent.com/78318468/132723581-27de1db2-8cc2-4704-a137-42299e5cbebd.gif)
 
 
 #### New Project Form 
 
 
![NewProjects](https://user-images.githubusercontent.com/78318468/132724507-7478f2db-5bc0-424d-9250-bf9339f25218.gif)


  
- When a user clicks on the 'View Project' button, they are taken to a project dashboard. This dashboard will always start out empty. Here they can add project collaborators and resources, as well as view some pre-made templates that can be used for PRs and DTRs.

 #### Project Dashboard
 
 
 ![Project Dashboard](https://user-images.githubusercontent.com/78318468/132725971-3067c8b8-b135-4351-8867-f6470f395325.gif)

 
 
 #### Add Collaborators
  
 
![AddCollaborator](https://user-images.githubusercontent.com/78318468/132726010-5b176f39-11c0-4576-aaa0-f7352ee9fff3.gif)

 
 
 
 #### Project Templates

 
 ![ProjectTemplates](https://user-images.githubusercontent.com/78318468/132726074-25131f67-e7e2-4ad3-aa01-e3372fae9ca0.gif)

 
  
# Tech Stack
<table>
  <tr>
    <td>React w/ Hooks</td>
    <td>React Router</td>
    <td>graphQL</td>
    <td>Cypress</td>
    <td>JavaScript</td>
  </tr>
  <tr>
    <td><img width="55" src="https://raw.githubusercontent.com/gilbarbara/logos/master/logos/react.svg"/></td>
    <td><img width="55" src="https://raw.githubusercontent.com/gilbarbara/logos/master/logos/react-router.svg"/></td>
    <td><img width="55" src="https://raw.githubusercontent.com/gilbarbara/logos/master/logos/graphql.svg"/></td>
    <td><img width="55" src="https://raw.githubusercontent.com/gilbarbara/logos/master/logos/cypress.svg"/></td>
    <td><img width="55" src="https://raw.githubusercontent.com/gilbarbara/logos/master/logos/javascript.svg"/></td>
  </tr>
</table>
  
 # Libraries & Other Technology
  * [Query String](https://github.com/sindresorhus/query-string)
  * [Apollo Client for graphQL](https://www.apollographql.com/docs/)
  
  
# Future Features 
 
  - User ability to go to collaborator profile pages
  - Additional error handling and redirects 
  - User ability to upload files
  - User ability to create a DTR document within the application that lives in the dashboard
  - User ability to edit and delete resources/collaborators
  
# Contributors
 <table>
  <tr>
    <td><a href="https://github.com/ashton-huxtable">Ashton Huxtable</td>
    <td><a href="https://github.com/shawnmcmahon">Shawn McMahon</td>
  </tr>
  <tr>
    <td><img width="150" height="auto" src="https://avatars.githubusercontent.com/u/78318468?v=4" alt="Ashton Huxtable avatar"/></td>
    <td><img width="150" height="auto" src="https://avatars.githubusercontent.com/u/73731359?v=4" alt="Shawn McMahon avatar"/></td>
  </tr>
  <tr>
    <td><a href="https://github.com/lcpulzone">Leigh Cepriano Pulzone</td>
    <td><a href="https://github.com/twarbelow">Taija Warbelow</td>
    <td><a href="https://github.com/zachjamesgreen">Zach Green</td>
  </tr>
  <tr>
    <td><img width="150" height="auto" src="https://avatars.githubusercontent.com/u/73005101?v=4" alt="Leigh Cepriano Pulzone avatar"/></td>
    <td><img width="150" height="auto" src="https://avatars.githubusercontent.com/u/10294841?v=4" alt="Taija Warbelow avatar"/></td>
    <td><img width="150" height="auto" src="https://avatars.githubusercontent.com/u/7896916?v=4" alt="Zach Green avatar"/></td>
  </tr>
</table>

Project Manager:  
  [Brian Zanti](https://github.com/BrianZanti)
  
  
A Mod 4 Capstone Project with Turing School of Software & Design 
  
