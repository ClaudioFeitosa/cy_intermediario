describe('Login', () => {
  it.only('successfully', () => {
    cy.login()

    cy.get('.qa-user-avatar').should('be.visible')
  })

  it('erro de login', () => {
    cy.login_f()
    cy.get('.flash-alert').should('be.visible').contains('Invalid Login or password.')

    //cy.get('.qa-user-avatar').should('be.visible')
  })


})