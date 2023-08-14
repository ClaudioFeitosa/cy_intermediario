
describe('Profile - update status', () =>{
    beforeEach(() => {
        cy.login()
        cy.visit('/')
        //cy.Set_StatusC()
        //cy.Set_StatusC()    
    })

it('deleteStatus', () => {
    cy.deleteStatus()  
    cy.get('.qa-user-avatar').click()
    cy.contains("Set status").should('be.visible')      
    })
})