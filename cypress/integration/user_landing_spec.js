import { is } from 'cypress/types/bluebird'
import { aliasUserQuery, aliasProjectsQuery, aliasProfileMutation, hasOperationName } from '../utils/graphql_test_utils'


describe('User Landing Page', () => {

  beforeEach(() => {
    cy.intercept('POST', 'https://codeherdapi.herokuapp.com/graphql', 
      (req) => 
        aliasUserQuery(req, 'user')
      )
      
    cy.intercept('POST', 'https://codeherdapi.herokuapp.com/graphql', 
      (req) => 
        aliasProjectsQuery(req, 'usersProjects')
      )

    cy.intercept('POST', 'https://codeherdapi.herokuapp.com/graphql', 
    (req) => 
      // hasOperationName(req, 'editUser')
      aliasProfileMutation(req, 'editUser')
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

   it('Should be able to click on the new project button and see a form', () => {
     cy.get('button').contains('New Project').click()
   })
    
  })
