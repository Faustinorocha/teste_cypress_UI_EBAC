class EnderecoPage {

    editarEnderecoFaturamento(endereco) {
        cy.get('.woocommerce-MyAccount-navigation-link--edit-address').click()
        cy.get('.edit').eq(0).click()

        cy.get('#billing_first_name').clear().type(endereco.nome)
        cy.get('#billing_last_name').clear().type(endereco.sobrenome)
        cy.get('#billing_company').clear().type(endereco.nome + ' ' + endereco.sobrenome)
        cy.get('#select2-billing_country-container').type(endereco.pais + '{enter}')//.get('#select2-billing_country-results').click()
        //cy.get('#select2-billing_country-results').click()
        cy.get('#billing_address_1').clear().type(endereco.endereco)
        cy.get('#billing_address_2').clear().type(endereco.complemento)
        cy.get('#billing_city').clear().type(endereco.cidade)
        cy.get('#select2-billing_state-container').type(endereco.estado + '{enter}')//.get('#select2-billing_state-results').click()
        //cy.get('#select2-billing_state-results').click()
        cy.get('#billing_postcode').clear().type(endereco.cep)
        cy.get('#billing_phone').clear().type(endereco.telefone)
        cy.get('[name="save_address"]').click()
    } 

    editarEnderecoEntrega(endereco) {
        cy.get('.woocommerce-MyAccount-navigation-link--edit-address').click()
        cy.get('.edit').eq(1).click()
       
        cy.get('#shipping_first_name').clear().type(endereco.nome)
        cy.get('#shipping_last_name').clear().type(endereco.sobrenome)
        cy.get('#shipping_company').clear().type(endereco.nome + ' ' + endereco.sobrenome)
        cy.get('#select2-shipping_country-container').click().type(endereco.pais + '{enter}')//.get('#select2-shipping_country-results').click()
       // cy.get('#select2-shipping_country-results').click()
        cy.get('#shipping_address_1').clear().type(endereco.endereco)
        cy.get('#shipping_address_2').clear().type(endereco.complemento)
        cy.get('#shipping_city').clear().type(endereco.cidade)
        cy.get('#select2-shipping_state-container').type(endereco.estado + '{enter}')//.get('#select2-shipping_state-results').click()
        //cy.get('#select2-shipping_state-results').click()
        cy.get('#shipping_postcode').clear().type(endereco.cep)
        cy.get('[name="save_address"]').click()
    }

}

export default new EnderecoPage()