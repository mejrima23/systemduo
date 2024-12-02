describe('Contact us tests', () => {
  beforeEach('Visit page', () => {
    cy.visit('https://automationexercise.com/')
  })

  it('Find product on page', () => {
    cy.get('.single-products').first().should('be.visible')
    cy.get('.single-products')
      .first()
      .find('.productinfo')
      .find('h2')
      .should('be.visible')
    cy.get('.single-products .productinfo h2')
      .first()
      .should('be.visible')
      .and('contain.text', 'Rs. 500')
    cy.contains('Winter Top')
      .parents('.single-products')
      .find('.productinfo')
      .as('wantedProduct')
    cy.get('@wantedProduct').should('be.visible')
    cy.get('@wantedProduct').find('h2').should('contain', 'Rs. 600')

    cy.get('@wantedProduct').parents('.product-image-wrapper').find('.choose a')
    cy.get('@wantedProduct').trigger('mouseenter')
  })
  it.only('Add product to cart', () => {
    cy.get('.single-products')
      .should('be.visible')
      .find('img[src*="product_picture/1"]')
      .should('be.visible')
    // .find('h2')
    // .should('contain', 'Rs. 500')
    cy.get('a[href*="/product_details/1"]').should('be.visible').click()
  })
  // it.only('Add product to cart', () => {
  //   cy.contains('Blue Top')
  //   .parents('.single-products')
  //   .find('.productinfo')
  //   .as('wantedProduct')
  // cy.get('@wantedProduct').should('be.visible')

  // })
})
