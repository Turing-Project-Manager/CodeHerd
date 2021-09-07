import { aliasUserQuery, aliasProjectsQuery } from '../utils/graphql_test_utils'


describe('User Landing Page', () => {

  beforeEach(() => {
      cy.intercept('POST', 'https://codeherdapi.herokuapp.com/graphql', 
        (req) => 
        aliasUserQuery(req, 'user'),
        )
      cy.intercept('POST', 'https://codeherdapi.herokuapp.com/graphql', 
        (req) => 
        aliasProjectsQuery(req, 'projects')
       
        )
        // cy.visit('http://localhost:3000/ashton-huxtable')
      cy.visit('http://localhost:3000/ashton-huxtable?info={%22id%22:5,%22name%22:%22Ashton%20Huxtable%22,%22email%22:%22aehuxtable@gmail.com%22,%22image%22:%22https://avatars.githubusercontent.com/u/78318468?v=4%22}')

    })
    
    it('Should have a user name and profile', () => {
      // cy.wait('@gqlUserQuery')
      // .its('response.body.data.user')
      // .should('have.property', 'id')
      // .and('have.property', 'name')
      cy.get('h2').contains('Ashton Huxtable')
    })
    
  })
