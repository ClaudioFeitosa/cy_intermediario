const accessToken = `Bearer ${Cypress.env('gitlab_access_token')}` //gitlab_access_token é a variavel de token que colocamos no arquivo env

Cypress.Commands.add('api_createProject', project => {
  cy.request({
    method: 'POST',
    url: `/api/v4/projects/`,
    body: {
      name: project.name,
      description: project.description,
      initialize_with_readme: true
    },
    headers: {Authorization: accessToken },
  })
})

Cypress.Commands.add('api_getAllProjects', () =>{
  cy.request({
    match: 'GET',
    url: '/api/v4/projects/',
    headers:{Authorization:accessToken},
  })
})

Cypress.Commands.add('api_getAllProjects', () => {
  cy.request({
    method: 'GET',
    url: '/api/v4/projects/',
    headers: { Authorization: accessToken },
  })
})

Cypress.Commands.add('api_deleteProjects', () =>{
  cy.api_getAllProjects().then(res =>
    res.body.forEach(project => cy.request({
      method: 'delete',
     url: `/api/v4/projects/${project.id}`,
     headers: {Authorization: accessToken},     
    }))
  )
})


// Criando issue com API
Cypress.Commands.add('api_createIssue', objeto_issue => {
  cy.api_createProject(objeto_issue.project)
    .then(response => {
      cy.request({
        method: 'POST',
        url: `/api/v4/projects/${response.body.id}/issues`,
        body: {
          title: objeto_issue.title,
          description: objeto_issue.description
        },
        headers: { Authorization: accessToken },
      })
  })
})


Cypress.Commands.add('api_createLabel', (projectId, label) => {
  cy.request({
    method: 'POST',
    url: `/api/v4/projects/${projectId}/labels`,
    body: {
      name: label.name,
      color: label.color
    },
    headers: { Authorization: accessToken },
  })
})


Cypress.Commands.add('api_createMilestone',(projectId, milestone)=> {
  cy.request({
  method: 'POST',  
  url: `/api/v4/projects/${projectId}/milestones`,
  body:{
    title: milestone.title,
    //description: milestone.description
    },
  headers: { Authorization: accessToken },
  })
})