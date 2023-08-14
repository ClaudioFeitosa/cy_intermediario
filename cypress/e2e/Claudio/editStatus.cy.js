
describe('Profile - update status', () =>{
    beforeEach(() => {
        cy.login()
        cy.visit('/')
        //cy.Set_StatusC()    
    })

it.only('edit status', () => {
    cy.Edit_status()         
})


    
    it('set a status popup', () => {
       cy.Set_StatusC()
       //cy.get('modal-title').should('be.visible')
       cy.get('#set-user-status-modal___BV_modal_title_')
       .should('be.visible')
       .contains('Set a status')
       cy.contains('Set status').should('be.visible')
       //cy.get('set-user-status-modal___BV_modal_title_').should('be.visible')  

    })
})