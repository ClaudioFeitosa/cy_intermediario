describe('logout', () => {
    beforeEach(() =>{
        cy.login()
        cy.visit('/')
    })
  
  
    it('identify each element', () =>{
        cy.get('.qa-user-avatar').click()
        cy.contains('Administrator').should('be.visible')
        cy.contains('Set status').should('be.visible')
        cy.contains('Profile').should('be.visible')
        })
  
  
    it.only('sucessfully', () =>{
        cy.logout()

        cy.url().should('be.equal', `${Cypress.config('baseUrl')}/users/sign_in`)
    })

  

})