import { faker } from '@faker-js/faker'

describe('gui_createIssue_Cl', () => {
  const issue = {
    title: `Titulo da issue`,
    description: `Descrição da issue` 
  }

  beforeEach(() => {
    cy.login()
    cy.visit('/root/project-a9c3b073-fab3-4a25-9df8-9e85d4b5809a/issues')
  })

  it('successfully', () => {
    cy.gui_createIssue_Cl(issue)

    cy.get('.issue-details')
      .should('contain', issue.title)
      .and('contain', issue.description)
  })
})
