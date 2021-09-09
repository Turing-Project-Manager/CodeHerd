describe('User Landing', () => {


  beforeEach(() => {
      cy.visit('https://codeherd.herokuapp.com/')
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
    cy.get('button').contains('Continue with Github')
      .get('a').should('have.attr', 'href', 'https://codeherdapi.herokuapp.com/auth/github')
    })
  
})