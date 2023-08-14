describe('Login', () => {
  it('Novo login com successfully', () => {
    //const user = Cypress.env('user_name')
    //const password = Cypress.env('user_password')
    //const options = {cacheSession : false}
    cy.loginc()

    cy.get('.qa-user-avatar').should('be.visible')
  })
})