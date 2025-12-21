import faker from 'faker';

describe('Funcionalidade de Pré cadastro', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });

    it('Completar o pré cadastro com sucesso', () => {
        
        let fistName = faker.name.firstName()
        let lastName = faker.name.lastName()
        let emailFaker = faker.internet.email(fistName)
        let password = 'Teste123@'
        cy.get('#reg_email').should('be.visible').type(emailFaker)
        cy.get('#reg_password').type(password)
        cy.get('[name="register"]').click()

        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(fistName)
        cy.get('#account_last_name').type(lastName)
        cy.get('#account_display_name').clear().type(fistName + ' ' + lastName)
        cy.get('.button').click()

        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')
    })
});