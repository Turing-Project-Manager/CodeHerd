import { aliasQuery, aliasMutation } from '../utils/graphql_test_utils'


describe('Project Dashboard', () => {

  beforeEach(() => {
    cy.intercept('POST', 'https://codeherdapi.herokuapp.com/graphql', 
    (req) => {

      aliasQuery(req, 'project');
      // aliasQuery(req, 'usersProjects');
    })
    cy.visit('http://localhost:3000//ashton-huxtable/4')
  })
})