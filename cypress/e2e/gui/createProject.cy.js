import { faker } from '@faker-js/faker'

describe('Crate Project', () => {
    beforeEach(() =>{
        cy.login()
    })
    it('Create Project successfully', () => {
        const project ={
            name: `project_do_claudio-${faker.datatype.uuid()}`, //template literals  java script MDM template literasls -> expressão javaScript(faker.datatype.uuid())
            description: `descrição do Claudio -${faker.random.words(6)}`
        }
        cy.gui_createProject(project) // comando customizado

        cy.url().should('be.equal', `${Cypress.config('baseUrl')}/${Cypress.env('user_name')}/${project.name}`)
       // cy.url().should('be.equal', `${Cypress.config('baseUrl')}/${Cypress.env('user_name')}/${project.name}`)

        cy.contains(project.name).should('be.visible')
        cy.contains(project.description).should('be.visible')
    })

it('Create project from dashboard', () =>{
        const project_do_claudio ={
            name: `project_do_dashboard-${faker.datatype.uuid()}`, //template literals  java script MDM template literasls -> expressão javaScript(faker.datatype.uuid())
            description: `descrição do projeto criando apartir do Dashboard -${faker.random.words(6)}`
        }

        cy.gui_createProject_dashboard(project_do_claudio) // comando customizado

        cy.url().should('be.equal', `${Cypress.config('baseUrl')}/${Cypress.env('user_name')}/${project_do_claudio.name}`)
       // cy.url().should('be.equal', `${Cypress.config('baseUrl')}/${Cypress.env('user_name')}/${project.name}`)

        cy.contains(project_do_claudio.name).should('be.visible')
        cy.contains(project_do_claudio.description).should('be.visible')



    })


})