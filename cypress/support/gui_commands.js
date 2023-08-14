Cypress.Commands.add('login', (
    user = Cypress.env('user_name'),
    password = Cypress.env('user_password'),
    {cacheSession = true} = {},


  ) => {
    // passo a passo para fazer o login e armazenar em login 
    const login = () => {
      cy.visit('/users/sign_in')
  
      cy.get("[data-qa-selector='login_field']").type(user)
      cy.get("[data-qa-selector='password_field']").type(password, { log: false })
      cy.get("[data-qa-selector='sign_in_button']").click()
    }
    
    // aqui estanmos criando uma costante Validate, para verificar se o usuario esta logodo
    // caso o valor seja igiual a (/users/sign_in) significa que não estamos logado
    const validate = () => {
      cy.visit('/')
      cy.location('pathname', {timeout: 1000})
        .should('not.eq', '/users/sign_in')     

    }

    // aqui estamos compartilhando a setion, e verificando o valor de "validate"
    // a função do validate aqui é para ser usando para validar se a sesão ainda e valdia
    // caso o validade seja falso ou seja ('/users/sign_in) ai o cypressa
    // executa novamente a função de login
    // verifica se a sesao ainda e valida!!!

    const options = {
      cacheAcrossSpecs: true,
      validate,      
    }

    // note que aqui estou passando, o user a função login e a options 
    // nesse momento se a optios for igua '/users/sign_in então a 
    //função de login sera chamanda
    // e se não passarmos o chace cacheSession(caso do ct de Login)
    if (cacheSession){
      cy.session(user,login,options)
    } else{
      login()
    }
  
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

  Cypress.Commands.add('gui_createIssue', issue => {
    cy.visit(`/${Cypress.env('user_name')}/${issue.project.name}/issues/new`)
  
    cy.get('.qa-issuable-form-title').type(issue.title)
    cy.get('.qa-issuable-form-description').type(issue.description)
    cy.contains('Submit issue').click()
  })

  Cypress.Commands.add('gui_createIssue_Cl', issue => {
    //cy.visit(`/${Cypress.env('user_name')}/${issue.project.name}/issues/new`)
    cy.get('#new_issue_link').click()
    cy.get('.qa-issuable-form-title').type(issue.title)
    cy.get('.qa-issuable-form-description').type(issue.description)
    cy.contains('Submit issue').click()
  })

  Cypress.Commands.add('gui_setLabelOnIssue', label => {
    cy.get('.qa-edit-link-labels').click()
    cy.contains(label.name).click()
    cy.get('body').click()
  })

  Cypress.Commands.add('gui_setMilestoneOnIssue', milestone =>{
    cy.get('.block.milestone .edit-link').click()
    cy.contains(milestone.title).click()
  })



  //// claudio recriando os comandos

  
