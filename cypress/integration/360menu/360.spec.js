/* eslint-disable no-undef */
/// <reference types="Cypress" />

context('360 Menu', () => {
  before(() => {
    cy.visit('http://localhost:8000')
  })

  it('select products', () => {
    cy.get('[Card-module--Card]:contains(Greek Salad)').click({ force: true })
  })

  it('add orders', () => {
    cy.get('[type=button]:contains(add to order)').click({ force: true })
  })
})

