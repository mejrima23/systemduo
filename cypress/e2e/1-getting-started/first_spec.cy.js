/// <reference types="cypress" />

describe("Example tests", () => {
  beforeEach(() => {
    cy.visit("https://automationexercise.com/")
  })
  it("Navigate to login page", () => {
    cy.get('a[href="/login"]').should("be.visible").click()
    cy.url().should("contain", "login")
    cy.get('[data-qa="login-email"]')
      .should("be.visible")
      .and("not.be.disabled")
    cy.get('[data-qa="signup-name"]')
      .should("be.visible")
      .and("not.be.disabled")
  })

  //HOME WORK

  it.only("Navigate to Contact Us page", () => {
    cy.get('a[href="/contact_us"]').should("be.visible").click()
    cy.url().should("contain", "contact_us")
    cy.get("#contact-page").should("contain", "Contact")
  })
})
