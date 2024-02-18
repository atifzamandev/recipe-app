import React from 'react'
import { SelectChangeEvent } from '@mui/material'
import SearchRecipes from '../../src/components/Search/SearchRecipes'

describe('<SearchRecipes />', () => {
  it('renders', () => {
    cy.mount(
      <SearchRecipes
        search={''}
        diet={''}
        health={''}
        cuisine={''}
        handleSearch={function (event: React.ChangeEvent<HTMLInputElement>): void {
          throw new Error('Function not implemented.')
        }}
        handleSubmit={function (event: React.MouseEvent<Element, MouseEvent>): void {
          throw new Error('Function not implemented.')
        }}
        handleDiet={function (event: SelectChangeEvent<string>): void {
          throw new Error('Function not implemented.')
        }}
        handleHealth={function (event: SelectChangeEvent<string>): void {
          throw new Error('Function not implemented.')
        }}
        handleCuisine={function (event: SelectChangeEvent<string>): void {
          throw new Error('Function not implemented.')
        }}
      />
    )
    cy.get('[data-cy-query="cy-query"]').should('exist')
    cy.get('[data-cy-search=cy-search]').should('have.text', 'Search')
  })
})
