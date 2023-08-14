describe('Profile - set status', () =>{
    beforeEach(() => {
        cy.login()
        cy.visit('/')

    })
    
    it('set a status popup', () => {
       cy.Set_StatusC()
       cy.get('.qa-user-avatar').click() // pesquisar como transformar isso em uma constante
       cy.contains('Edit status').click()
       cy.get('.input-group > .form-control').should('be.visible')
    })
})


