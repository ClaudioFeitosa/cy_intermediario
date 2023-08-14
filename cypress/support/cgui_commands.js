Cypress.Commands.add('loginc', (
    userC = Cypress.env('user_name'),
    passwordC = Cypress.env('user_password'),
  ) => {
    const loginc = () => {
        cy.visit('/users/sign_in')
  
        cy.get("[data-qa-selector='login_field']").type(userC)
        cy.get("[data-qa-selector='password_field']").type(passwordC)
        cy.get("[data-qa-selector='sign_in_button']").click()
  
    }
    loginc()
  })
  

  Cypress.Commands.add('Logoutc', () => {
    const Logoutc = () => {
        cy.get('.qa-user-avatar').click()
        cy.contains('Sign out').click()
   }  

    Logoutc()
})


Cypress.Commands.add('Set_StatusC', () => {
    const Set_StatusC = () =>{
        cy.get('.qa-user-avatar').click() // pesquisar como transformar isso em uma constante
        cy.contains('Set status').click()
        cy.get('.input-group > .form-control').type('Stauts001')
        cy.get('.btn-success').click()
        //cy.get('button[class="Set status"]').click() // botão para criar 
        }
    Set_StatusC()
})


Cypress.Commands.add('Edit_status', () =>{
  const Edit_status = () => {
      cy.get('.qa-user-avatar').click()
      cy.contains('Edit status').click()
      cy.get('button[type="button"]').should('be.visible')
      cy.get('.input-group > .form-control').type('Novo status')
      cy.get('.btn-success').click() // botão quando altera
      //cy.get('button[class="Set status"]').click() /// exemplo de como pegar o botão usando o get
    }
    Edit_status()
})


Cypress.Commands.add('deleteStatus', () =>{
  const deleteStatus = () =>{

    cy.get('.qa-user-avatar').click()
    cy.contains('Edit status').click()
    cy.contains('Remove status').click()

  }
  deleteStatus()
})

Cypress.Commands.add('profile', () =>{
  const profile =() => {
    cy.get('.qa-user-avatar').click()
    cy.contains('Profile').click()
  }
  profile()
})




Cypress.Commands.add('gui_createProjectC', projectc => {
  cy.get('#project_name').type(projectc.Project_name)
  cy.get('#blank-project-name > :nth-child(4) > #project_path').type(projectc.Project_slug)
  cy.get('#project_description').type(projectc.Project_description)
  cy.get('.qa-initialize-with-readme-checkbox').check() 
  cy.contains('Create project').click()
})

