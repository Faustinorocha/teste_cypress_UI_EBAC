describe('Funcionalidade Página de produtos', () => {
    

    beforeEach(() => {
        cy.visit('produtos/')
    })

    it('Selecionar produto da lista', () => {
        cy.get('[class="product-block grid"]')
        //.first()
        //.last()
        //.eq(3)
        .contains('Aero Daily Fitness Tee')
        .click()
    });

    it('Adiciona produto ao carrinho', () => {
        let quantidade = 10
        cy.get('[class="product-block grid"]').contains('Ajax Full-Zip Sweatshirt').click()
        cy.get('.button-variable-item-XS').click()
        cy.get('.button-variable-item-Blue').click()
        cy.get('[name="quantity"]').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()

        cy.get('.woocommerce-message').should('contain', quantidade + ' × “Ajax Full-Zip Sweatshirt” foram adicionados no seu carrinho.')
        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
    });

    it.only('Adiciona produto ao carrinho - usando commands', () => {
        let produto = 'Aether Gym Pant'
        let quantidade = 5;
        let tamanho = 32;
        let cor = 'Brown'
        cy.addProdutoCarrinho(produto, quantidade, tamanho, cor);
        cy.get('.woocommerce-message').should('contain', quantidade + ' × “' + produto + '” foram adicionados no seu carrinho.')
        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
    });
});