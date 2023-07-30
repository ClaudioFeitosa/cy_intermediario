Cypress.Commands.add('login', (
    user = Cypress.env('user_name'),
    password = Cypress.env('user_password'),
  ) => {
    const login = () => {
      cy.visit('http://localhost/users/sign_in')
  
      cy.get("[data-qa-selector='login_field']").type(user)
      cy.get("[data-qa-selector='password_field']").type(password, { log: false })
      cy.get("[data-qa-selector='sign_in_button']").click()
    }
  
    login()
  })
  
  Cypress.Commands.add('login_f', (
    //user = Cypress.env('user_name'),
    //password = Cypress.env('user_password'),
  ) => {
    const login_f = () => {
      cy.visit('http://localhost/users/sign_in')
  
      cy.get("[data-qa-selector='login_field']").type('root')
      cy.get("[data-qa-selector='password_field']").type('123')
      cy.get("[data-qa-selector='sign_in_button']").click()
      //cy.get('.flash-alert').contains('text','Invalid Login or password.')
    }
  
    login_f()
  })

  Cypress.Commands.add('logout', () => {
    cy.get('.qa-user-avatar').click()
    cy.contains('Sign out').click()
  })
  

  Cypress.Commands.add('gui_createProject',project =>{
    cy.visit('/projects/new')

    //cy.get('.blank-state-row > [href="/projects/new"]').click()
    cy.get('#project_name').type(project.name)
    cy.get('#project_description').type(project.description)
    cy.get('.qa-initialize-with-readme-checkbox').check()

    cy.contains('Create project').click()

  })


  Cypress.Commands.add('gui_createProject_dashboard', projectd =>{

    cy.visit('/dashboard/projects')
    
    cy.get('.page-title-controls > .btn').click()
    cy.get('#project_name').type(projectd.name)
    cy.get('#project_description').type(projectd.description)
    cy.get('.qa-initialize-with-readme-checkbox').check()
    cy.contains('Create project').click()
  })

//  novo teste git