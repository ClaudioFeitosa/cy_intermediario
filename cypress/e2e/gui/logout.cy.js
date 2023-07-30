describe('logout', () => {
    beforeEach(() =>{
        cy.login()
        cy.visit('/')
    })
    it('sucessfully', () =>{
        cy.logout()

        cy.url().should('be.equal', `${Cypress.config('baseUrl')}/users/sign_in`)
    })

    it.only('identify each element', () =>{
        cy.get('.qa-user-avatar').click()
        cy.contains('Administrator').should('be.visible')
        cy.contains('Set status').should('be.visible')
        cy.contains('Profile').should('be.visible')
        })

})