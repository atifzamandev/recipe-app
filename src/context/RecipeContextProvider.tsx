import React, { ReactNode } from 'react'

import RecipeContext from './RecipeContext'
import { useRecipesData } from '../api/recipes'


type RecipeProp = {
  children: ReactNode
}
const RecipeContextProvider = ({ children }: RecipeProp) => {
  const { data, isLoading, error } = useRecipesData()

  if (isLoading) {
    return <div>Loading.....</div>
  }

  if (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error'

    return <div>Error: {errorMessage}</div>
  }

  return <RecipeContext.Provider value={data}>{children}</RecipeContext.Provider>
}

export default RecipeContextProvider
