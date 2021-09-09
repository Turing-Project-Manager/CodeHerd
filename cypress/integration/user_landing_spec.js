import { aliasQuery } from '../utils/graphql_test_utils'


describe('User Landing Page', () => {

  beforeEach(() => {
    cy.intercept('POST', 'https://codeherdapi.herokuapp.com/graphql', 
      (req) => {

        aliasQuery(req, 'user');
        aliasQuery(req, 'usersProjects');

      }
    )
   
    cy.visit('http://localhost:3000/ashton-huxtable?info={%22id%22:5,%22name%22:%22Ashton%20Huxtable%22,%22email%22:%22aehuxtable@gmail.com%22,%22image%22:%22https://avatars.githubusercontent.com/u/78318468?v=4%22}')

  })
    
    it('Should have a user name and profile', () => {
      cy.wait(1000)
      cy.get('h2').contains('Ashton Huxtable')
        .get('p').contains('Pronouns she/her')
        .get('p').contains('Cohort 2103')
        .get('button').contains('Edit Profile')
    })

   it('Should be able to edit the user profile', () => {
    cy.intercept('POST', 'https://codeherdapi.herokuapp.com/graphql', req => {
      if (req.body.operationName === 'editUser') {
        req.alias = 'editUser';
        req.reply({
          data: {
            editUser:{
              user: {
                cohort: '2105',
                __typename: 'User'
              }
            }
          }
        })
      }
    });
      cy.get('button').contains('Edit Profile').click()
        .get('input[name="cohort"]').type('{selectall}{backspace}').type('2105')
        .should('have.value', '2105')
        .get('button').contains('Save Profile').click()
        .get('p').contains('Cohort 2105')
   })

   it('Should bea able to see projects by modules', () => {
      cy.wait(1000)
        .get('h3').contains('Module 1')
        .get('button').contains('Mod 2').click()
        .get('h3').contains('Module 2')
   })

   it('Should be able to see project details including collaborators and summary', () => {
      cy.wait(1000)
        .get('p').contains('An application created for Turing Students to hold all of their project resources in a single place. From project links to documentation, all of your needs can be met.')
        .get('p').contains('Shawn McMahon')
   })

   it('Should be able to click on the new project button and see a form', () => {
    cy.intercept('POST', 'https://codeherdapi.herokuapp.com/graphql', req => {
      if (req.body.operationName === 'createProject') {
        req.alias = 'createProject';
        req.reply({
          data: {
            createProject:{
              modNumber: '3',
              name: 'Paint by (Hex) Numbers',
              summary: 'An opportunity to create your own collection by choosing art based on a palette color.',
              __typename: 'Project'
              }
            }
          })
        }
    })

       cy.get('button').contains('New Project').click()
        .get('input[name="title"]').type('Paint by (Hex) Numbers')
        .should('have.value', 'Paint by (Hex) Numbers')
        .get('input[name="description"]').type('An opportunity to create your own collection by choosing art based on a palette color.')
        .should('have.value', 'An opportunity to create your own collection by choosing art based on a palette color.')
        .get('select').select('2')
        .get('button').contains('Create Project').click()
   })

   it('Should be able to exit out of the project', () => {
     cy.get('button').contains('New Project').click()
      .get('button').contains('X').click()
   })

   it('Should be able to click on View Project and be taken to a Project Dashboard', () => {
     cy.get('button[id="view-project"]').contains('View Project').click()
     cy.url('http://localhost:3000/ashton-huxtable/4')
   })

   it('Should be able to logout and be taken to the main landing page', () => {
     cy.get('button').contains('Logout').click()
     cy.url('http://localhost:3000')
   })

   
    
  })
