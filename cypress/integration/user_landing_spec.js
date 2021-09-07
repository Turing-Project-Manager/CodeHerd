import { aliasUserQuery, aliasProjectsQuery, aliasProfileMutation, aliasNewProjectMutation } from '../utils/graphql_test_utils'


describe('User Landing Page', () => {

  beforeEach(() => {
    cy.intercept('POST', 'https://codeherdapi.herokuapp.com/graphql', 
      (req) => {

        aliasUserQuery(req, 'user');
        aliasProjectsQuery(req, 'usersProjects');
        aliasProfileMutation(req, 'editUser');
        // aliasNewProjectMutation(req, 'createProject');
      }
    )
   
    cy.visit('http://localhost:3000/ashton-huxtable?info={%22id%22:5,%22name%22:%22Ashton%20Huxtable%22,%22email%22:%22aehuxtable@gmail.com%22,%22image%22:%22https://avatars.githubusercontent.com/u/78318468?v=4%22}')

  })
    
    it('Should have a user name and profile', () => {
      cy.get('h2').contains('Ashton Huxtable')
        .get('p').contains('Pronouns she/her')
        .get('p').contains('Cohort 2103')
        .get('button').contains('Edit Profile')
    })

   it('Should be able to edit the user profile', () => {
      cy.wait(1000)
      cy.get('button').contains('Edit Profile').click()
        .get('input[name="cohort"]').type('{selectall}{backspace}').type('2105')
        .should('have.value', '2105')
        .get('button').contains('Save Profile').click()
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
      cy.get('button').contains('New Project').click()
        .get('input[name="title"]').type('Rock Paper Scissors')
        .should('have.value', 'Rock Paper Scissors')
        .get('input[name="description"]').type('A game of chance. Who will win? You or the computer?')
        .should('have.value', 'A game of chance. Who will win? You or the computer?')
        .get('button').contains('Create Project').click()
   })

   
    
  })
