import React from 'react'
import Header from '../../src/components/Header/Header'

describe('<Header />', () => {
  it('renders', () => {
    cy.mount(
      <Header
        recipesList={[]}
        handleDeleteBookmark={function (index: number): void {
          throw new Error('Function not implemented.')
        }}
        handleDeleteAll={function (): void {
          throw new Error('Function not implemented.')
        }}
      />
    )
    cy.get('[data-cy-header=cy-header]').contains('Recipes Information')
    cy.get('[data-cy-bookmrk=cy-bookmark ]').should('have.text', 'Bookmark')
    cy.get('[data-cy-bookmrk=cy-bookmark ]').should('exist').click()
    cy.wait(3000)
    cy.get('[data-cy-bookmrk-close=cy-bookmark-close]').should('exist').click()
  })
})
