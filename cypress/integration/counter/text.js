/* eslint-disable no-undef */
/// <reference types="Cypress" />

describe('testing counter example', () => {
  before(() => {
    cy.visit('http://localhost:8000')
  })

  it('should have a button showing a plus symbol', () => {
    cy.get('[type=button]').should('contain', '+')
  })

  it('should have a button showing a minus symbol', () => {
    cy.get('[type=button]').should('contain', '-')
  })

  it('it should show a number area containing a number', () => {
    cy.get('[data-test-id=output]').then(element => {
      const elementText = element.text()
      expect(elementText).to.match(/^[0-9]*$/)
    })
  })

  it('should add numbers when clicking the plus button', () => {
    let text

    cy.get('[data-test-id="output"]').then(element => {
      text = parseInt(element.text(), 10)
    })

    cy.get('[data-test-id="button"]:contains(+)').click()

    cy.get('[data-test-id="output"]').then(element => {
      expect(parseInt(element.text(), 10)).to.greaterThan(text)
    })
  })

  it('should subtract numbers when clicking the minus button', () => {
    let text

    cy.get('[data-test-id="output"]').then(element => {
      text = parseInt(element.text(), 10)
    })

    cy.get('[data-test-id="button"]:contains(-)').click()

    cy.get('[data-test-id="output"]').then(element => {
      expect(parseInt(element.text(), 10)).to.lessThan(text)
    })
  })

  it('should disable button if range end is reached (10) ', () => {
    cy.get('[data-test-id="button"]:contains(+)')
      .click({ force: true })
      .click({ force: true })
      .click({ force: true })
      .click({ force: true })
      .click({ force: true })
      .click({ force: true })
      .click({ force: true })
      .click({ force: true })
      .should('be.disabled')
  })

  it('should disable button if range beginning is reached (0) ', () => {
    cy.wrap(new Array(10).map((item, index) => index)).each((num, i, array) => {
      cy.get('[data-test-id="button"]:contains(-)').then(element => {
        if (element.is(':disabled')) {
          cy.wrap(element).should('be.disabled')
        } else {
          cy.wrap(element).click()
        }
      })

      cy.get('[data-test-id="output"]').then(element => {
        if (parseInt(element.text(), 10) === 0) {
          cy.get('[data-test-id="button"]:contains(-)').should('be.disabled')
        }
      })
    })
  })
})
