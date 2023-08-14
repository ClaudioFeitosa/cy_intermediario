describe('logoutc', () =>{
    beforeEach(() => {
        cy.loginc()
        cy.visit('/')
    })

    it('logout sucessfully', ()=>{
        cy.Logoutc()
        cy.url().should('be.equal',`${Cypress.config('baseUrl')}/users/sign_in`)
        //cy.url().should('be.equal','http://localhost/users/sign_in')
    })
})