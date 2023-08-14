import { faker } from '@faker-js/faker'

const options = {env: {snapshotOnly: true}}

///5- CTRL + "k" + "c" e CTRL + "k" + "u": Comenta o texto selecionado (opção "c") e descomenta o texto selecionado (opção "u").

describe('create label on issue', options, () => {
  const issue = {
    title: `issue-${faker.datatype.uuid()}`,
    description: faker.random.words(3),
    project: {
      name: `project-${faker.datatype.uuid()}`,
      description: faker.random.words(5)
    }
  }

beforeEach(() => {
    cy.api_deleteProjects()
    cy.login()
    cy.api_createIssue(issue)
      .then(response => {
        cy.api_createLabel(response.body.project_id, issue)
        cy.visit(`${Cypress.env('user_name')}/${issue.project.name}/label/${response.body.iid}`)
      })
  })

  it ('Create label'), () => {
    cy.api_createIssue()
    cy.get('qa-labels-link').click()
    cy.get('btn btn-success qa-label-create-new').click
    cy.get('form-control js-label-title qa-label-title').type('Titulo da etiqueta')
    cy.get('.qa-label-description').type('descrição da etiqueta')
    cy.get(',qa-label-color').type('#333333')
  })
})
