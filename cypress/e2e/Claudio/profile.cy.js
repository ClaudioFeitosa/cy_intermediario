describe('profile', () =>{
    beforeEach(() => {
        cy.login()
        cy.visit('/')

    })
    
it('profile', () => {
    cy.profile()
    cy.get('.cover-title').should('be.equal','Administrator')
    cy.get('overview').click()
    cy.contains('Activity').should('be.visible')
    
    })
})