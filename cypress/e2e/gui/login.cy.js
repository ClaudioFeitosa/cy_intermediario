describe('Login', () => {
  it.only('successfully', () => {
    const user = Cypress.env('user_name')
    const password = Cypress.env('user_password')
    const options = {cacheSession : false}
    cy.login(user, password,options)

    cy.get('.qa-user-avatar').should('be.visible')
  })

  it('erro de login', () => {
    cy.login_f()
    cy.get('.flash-alert').should('be.visible').contains('Invalid Login or password.')

    //cy.get('.qa-user-avatar').should('be.visible')
  })


})