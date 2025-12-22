import perfil from "../fixtures/perfil.json"

describe('Funcionalidade Endereço: Faturamento e Entrega', () => {
    
    beforeEach(() => {
        cy.visit('minha-conta');
        cy.login(perfil.usuarioEmailCorreto, perfil.senhaCorreta);
    });

    context('Preenche endereço de faturamento', () => {
        it('Endereço de faturamento válido', () => {
            cy.get('.woocommerce-MyAccount-navigation-link--edit-address').click()
        });
    })
});