describe('Funcionalidade Página de produtos', () => {
    

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    })

    it('Selecionar produto da lista', () => {
        cy.get('[class="product-block grid"]')
        //.first()
        //.last()
        //.eq(3)
        .contains('Aero Daily Fitness Tee')
        .click()
    });

    it.only('Adiciona produto ao carrinho', () => {
        let quantidade = 10
        cy.get('[class="product-block grid"]').contains('Ajax Full-Zip Sweatshirt').click()
        cy.get('.button-variable-item-XS').click()
        cy.get('.button-variable-item-Blue').click()
        cy.get('[name="quantity"]').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()

        cy.get('.woocommerce-message').should('contain', quantidade + ' × “Ajax Full-Zip Sweatshirt” foram adicionados no seu carrinho.')
        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
    });
});