import perfil from "../fixtures/perfil.json"
import enderecoPage from "../support/page-objects/endereco.page"
import dadosEndereco from "../fixtures/endereco.json"

describe('Funcionalidade Endereço: Faturamento e Entrega', () => {
    
    beforeEach(() => {
        cy.login()
    });

    context('Endereço de faturamento', () => {
        it('Completar endereço de faturamento', () => {
           enderecoPage.editarEnderecoFaturamento(dadosEndereco[1])

           cy.get('.woocommerce-message').should('contain','Endereço alterado com sucesso.')
        });
    })

    context('Endereço de entregra', () => {
        it('Completar endereço de entrega', () => {
           enderecoPage.editarEnderecoEntrega(dadosEndereco[0])            
            cy.get('.woocommerce-message').should('contain','Endereço alterado com sucesso.')
        });
    })
});