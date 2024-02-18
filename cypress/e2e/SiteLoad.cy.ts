describe('Site Load', () => {
  it('Site should load with main elments', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[data-cy-header=cy-header]').contains('Recipes Information')
    cy.get('[data-cy-bookmrk=cy-bookmark ]').should('have.text', 'Bookmark')
  })
  it('Type searh query and filter', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[data-cy-query="cy-query"]').should('exist').type('salad')
    cy.get('[data-cy-search=cy-search]').should('exist').click()
    cy.wait(2000)
    cy.get('[data-cy-diet=cy-diet]').click()
    cy.get('[data-cy-diet-option=cy-diet-option-low-fat]').click()
    cy.wait(2000)
    cy.get('[data-cy-health=cy-health]').click()
    cy.get('[data-cy-health-option=cy-health-option-fish-free]').click()
    cy.wait(2000)
    cy.get('[data-cy-cuisine=cy-cuisine]').click()
    cy.get('[data-cy-cuisine-option=cy-cuisine-option-italian]').click()
    cy.wait(2000)
    cy.get('[data-cy-load="cy-loadMore"]').should('exist').click()
    
  })
})
