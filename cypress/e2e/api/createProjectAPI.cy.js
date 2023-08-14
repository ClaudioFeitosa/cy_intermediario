import { faker } from '@faker-js/faker'

describe('Create Project-API', () => {
  beforeEach(() => cy.api_deleteProjects() )
    it('successfully-api', () => {
      const project = {
        name: `project_API-${faker.datatype.uuid()}`,
        description: faker.random.words(5)
      }
      cy.api_createProject(project)
      .then(response => {
        expect(response.status).to.equal(201)
        expect(response.body.name).to.equal(project.name)
        expect(response.body.description).to.equal(project.description)
      })
  })
})