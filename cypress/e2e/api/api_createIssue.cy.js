import { faker } from '@faker-js/faker'

describe('Create issue', () => {
  beforeEach(() => cy.api_deleteProjects())

  it('successfully', () => {
    const issue_criada_api = {
     title: `issue_api-${faker.datatype.uuid()}`,// titulo usando o faker
     //title:'teste', // titulo com texto fixo
     
      description: faker.random.words(3),
     // description: 'Descrição da issue',
      project: { 
        name: `project-${faker.datatype.uuid()}`,
        description: faker.random.words(5)
      }
    }

    cy.api_createIssue(issue_criada_api)
      .then(response => {
        expect(response.status).to.equal(201)
        expect(response.body.title).to.equal(issue_criada_api.title)
        expect(response.body.description).to.equal(issue_criada_api.description)
      })
  })
})