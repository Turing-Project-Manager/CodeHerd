describe('User Landing', () => {


  beforeEach(() => {
      cy.visit('http://localhost:3000/')
      Cypress.Cookies.debug(true)
      Cypress.Cookies.preserveOnce('session_id', 'remember_token')
  })
  
  it('Should have a title and subtitle', () => {
    cy.get('h1').contains('CodeHerd')
      .get('p').contains('Search Less, Code More')
  })

  it('Should show three sections that describe the app', () => {
    cy.get('h2').contains('CREATE A PROJECT')
      .get('h2').contains('ADD YOUR TEAM')
      .get('h2').contains('EVERYTHING IN ONE PLACE')
  })

  it('Should have a button to continue with GitHub', () => {
    cy.get('button').contains('Continue with Github').click()
    .get('input[id="login_field"]').type('aehuxtable@gmail.com')
    .should('have.value', 'aehuxtable@gmail.com')
    .get('input[id="password"]').type('password')
    .should('have.value', 'password')
    })
  
})