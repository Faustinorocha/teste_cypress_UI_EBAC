import { faker } from '@faker-js/faker'

describe('Funcionalidade de Pré cadastro', () => {

    beforeEach(() => {
        cy.visit('minha-conta/')
    });

    it('Completar o pré cadastro com sucesso', () => {
        
        let firstName = faker.person.firstName();
        let lastName = faker.person.lastName();
        let emailFaker = faker.internet.email(firstName);
        let password = faker.internet.password();
        
        cy.get('#reg_email').should('be.visible').type(emailFaker);
        cy.get('#reg_password').type(password);
        cy.get('[name="register"]').click();

        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click();
        cy.get('#account_first_name').type(firstName);
        cy.get('#account_last_name').type(lastName);
        cy.get('#account_display_name').clear().type(firstName + ' ' + lastName);
        cy.get('.button').click();

        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.');
    })

    it.only('Completar o pré cadastro com sucesso usando o commands', () => {
        
        let firstName = faker.person.firstName();
        let lastName = faker.person.lastName();
        let emailFaker = faker.internet.email();
        let password = faker.internet.password();

        cy.preCadastro(emailFaker, password, firstName, lastName);
        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.');
    });
});