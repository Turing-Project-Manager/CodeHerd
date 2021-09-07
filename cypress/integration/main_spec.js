describe('User Landing', () => {


  beforeEach(() => {

  })
  
  it('Should have a title and subtitle', () => {
    cy.get('h1').contains('CodeHerd')
      .get('p[class="app-description]').contains('Search Less, Code More')
  })

  it('Should show three sections that describe the app', () => {
    cy.get()
  })

  it('Should have a button to continue with GitHub', () => {
    cy.get('button').contains('Continue with Github').click()
  })
})