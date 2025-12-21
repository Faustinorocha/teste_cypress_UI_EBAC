
describe('Funcionalidade de Login', () => {
  

    beforeEach(() => {
      cy.clearCookies()
      cy.clearLocalStorage()
      cy.visit('http://lojaebac.ebaconline.art.br/')
      
    });

    afterEach(() => {
      cy.screenshot()
    });

   context('Quando o usuário informar credenciais válidas', () => { 
    it('Efetuar login com sucesso', () => {
      cy.get('.icon-user-unfollow').should('be.visible').click()
      cy.get('[name="username"]').type('a@sa.com')
      cy.get('#password').type('Oeste1313@')
      cy.get('[name="login"]').click()

      cy.get('a > .hidden-xs').should('contain', 'Welcome a-2866 !')
      cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, a-2866 (não é a-2866? Sair)')

    });
  });
  
  context('Quando o usuário informar e-mail inválido', () => {
    it('Exibir mensagem de erro do e-mail', () => {
      cy.visit('http://lojaebac.ebaconline.art.br/')
      cy.get('.icon-user-unfollow').should('be.visible').click()
      cy.get('[name="username"]').type('112a@sa.com')
      cy.get('#password').type('Oeste1313@')
      cy.get('[name="login"]').click()

      cy.get('.woocommerce-error').should('contain', 'Endereço de e-mail desconhecido. Verifique novamente ou tente seu nome de usuário.')
      cy.get(':nth-child(2) > h2').should('contain', 'Register')


    });
 });
 context('Quando o usuário informar password inválido', () => {
    it('Exibir mensagem de erro do password', () => {
      cy.get('.icon-user-unfollow').should('be.visible').click()
      cy.get('[name="username"]').type('a@sa.com')
      cy.get('#password').type('Oeste1313@123')
      cy.get('[name="login"]').click()

      cy.get('.woocommerce-error').should('contain', 'Erro: A senha fornecida para o e-mail a@sa.com está incorreta. Perdeu a senha?')
      cy.get(':nth-child(2) > h2').should('contain', 'Register')

    });
  });

})
