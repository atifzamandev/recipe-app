import React from 'react'
import LoadMore from '../../src/components/LoadMore/LoadMore'

describe('<LoadMore />', () => {
  it('renders', () => {
    cy.mount(<LoadMore handleLoadMore={function (): void {
      throw new Error('Function not implemented.')
    } } />)
    cy.get('[data-cy-load="cy-loadMore"]').should('have.text', 'Load More' )
  })
})