import { aliasQuery } from '../utils/graphql_test_utils'


describe.skip('Project Dashboard', () => {

  beforeEach(() => {
    cy.intercept('POST', 'https://codeherdapi.herokuapp.com/graphql', 
    (req) => {

      aliasQuery(req, 'user');
      aliasQuery(req, 'usersProjects');
      aliasQuery(req, 'project');

    })
    cy.visit('https://codeherd.herokuapp.com/ashton-huxtable?info={%22id%22:8,%22name%22:%22Ashton%20Huxtable%22,%22email%22:%22aehuxtable@gmail.com%22,%22image%22:%22https://avatars.githubusercontent.com/u/78318468?v=4%22}')
    cy.get('button[id="view-project"]').contains('View Project').click()
    // cy.wait(1000)
    // cy.url('https://codeherd.herokuapp.com/ashton-huxtable/4')
  })

  it('Should have a project title and summary', () => {
    cy.url('https://codeherd.herokuapp.com/ashton-huxtable/4')

    // cy.wait(1000)
    cy.get('h2[id="proj-title"]').contains('CodeHerd 4')
      .get('p[id="proj-summary"]').contains('An application created for Turing Students to hold all of their project resources in a single place. From project links to documentation, all of your needs can be met.')
  })

  it('Should have a navigation bar and clicking the elephant should take the user back to the user profile', () =>{
    cy.wait(1000)
    cy.get('img[class="logo"]').click()
      .url('https://codeherd.herokuapp.com/ashton-huxtable')
  })

  it('Should have a section for collaborators', () => {
    cy.wait(1000)
    cy.get('h3[id="h3-collab"]').contains('Project Collaborators')
      .get('div[class="collaborator-names"]').contains('Shawn McMahon')
  })

  it('Should be able to add a collaborator', () => {
    cy.wait(1000)
    cy.intercept('POST', 'https://codeherdapi.herokuapp.com/graphql', req => {
      if (req.body.operationName === 'createCollaboration') {
        req.alias = 'createCollaboration';
        req.reply({
          data: {
            createCollaboration:{
              collaborator:{
                project:{
                  collaborators: [
                    {user: {
                      name: 'Zachary Green',
                      image: 'https://avatars.githubusercontent.com/u/7896916?v=4',
                      githubHandle: 'zachjamesgreen',
                      __typename: 'User'
                    },
                    __typename:'Collaborator'
                  }
                  ]
                }
              } 
              }
            }
          })
        }
    })
    cy.get('button[id="add-collab"]').click()
      cy.wait(1000)
      .get('[type="text"]').type('zachjamesgreen@gmail.com')
      .get('button').contains('Add Collaborator!').click()
      .get('button').contains('X').click()
      .reload()
  })

  it('Should have a section for project templates', () => {
    cy.wait(1000)
    cy.get('h3').contains('Project Templates')
    .get('button').contains('Backend PR Template').click()
    .get('h1').contains('Backend PR Template')
    .get('h2').contains('Checklist')
    .get('h2').contains('Changes')
  })

  it('Should be able to get a different template', () => {
    cy.wait(1000)
    cy.get('h3').contains('Project Templates')
    .get('button').contains('Backend PR Template').click()
    .get('h1').contains('Backend PR Template')
    .get('button').contains('DTR Template').click()
    .get('h1').contains('DTR Template')

  })

})