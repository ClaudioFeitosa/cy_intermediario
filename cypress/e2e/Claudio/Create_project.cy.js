import {faker} from '@faker-js/faker'
const options = {env: {snapshotOnly:true}}

describe('Create project - Claudio', options , () => {
    beforeEach (() => {
        cy.loginc()
        cy.visit('/dashboard/projects')
        cy.get('.page-title-controls > .btn').click()
        //cy.get('#blank-state blank-state-link').click
    })

    it('Create project - claudio', () => {
        const projetc ={ 
            Project_name: `claudio-${faker.datatype.uuid()}`,
            Project_slug: ` projeto slug - ${faker.random.words(3)}`,
            Project_description: `Descrição faker - ${faker.random.words(30)}`
        }

        cy.gui_createProjectC(projetc)

        cy.url().should('be.equal', `${Cypress.config('baseUrl')}/${Cypress.env('user_name')}/${projetc.Project_name}`)

        cy.contains(projetc.Project_name).should('be.visible')
    })
}) 