import { login } from './/registration.spec.cy.js'
let email

describe('Login tests', () => {
  it('Successfull login with valid credentials', () => {
    //When
    email = `mejrima${Date.now()}@example.com`
    login('Mejrima', email)
    //Then
    cy.get('[data-qa="continue-button"]').should('be.visible').click()
    cy.get('a[href*="logout"]').should('be.visible').click()
    //When
    cy.get('[data-qa="login-email"]').clear().type(email)
    cy.get('[data-qa="login-password"]').clear().type('Test123')
    cy.get('[data-qa="login-button"]').should('be.visible').click()
    //Then
    cy.get('a[href*="logout"]').should('be.visible')
  })
  it('Unsuccessfully login with invalid credentials', () => {
    //When
    email = `mejrima${Date.now()}@example.com`
    login('Mejrima', email)
    //Then
    cy.get('[data-qa="continue-button"]').should('be.visible').click()
    cy.get('a[href*="logout"]').should('be.visible').click()
    //When
    cy.get('[data-qa="login-email"]').clear().type(email)
    cy.get('[data-qa="login-password"]').clear().type('Test1234')
    cy.get('[data-qa="login-button"]').should('be.visible').click()
    //Then
    cy.get('.login-form').should(
      'contain',
      'Your email or password is incorrect!'
    )
  })
})
