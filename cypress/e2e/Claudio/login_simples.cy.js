describe("teste de login", () =>{
    it("Login com sucesso", () =>{
     cy.visit('/users/sign_in')
     cy.get("[data-qa-selector='login_field']").type('root')
     cy.get("[data-qa-selector='password_field']").type('Wxd132vx@')
     cy.get("[data-qa-selector='sign_in_button']").click()
     cy.get('.qa-user-avatar').should('be.visible')
                
    })
})