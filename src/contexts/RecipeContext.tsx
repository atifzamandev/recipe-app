import React, { createContext, Dispatch, SetStateAction, useContext, useState } from 'react'
import { useRecipesData } from '../api/recipes'
import { RecipeData } from '../types/recipe'

interface SearchApiParamsProps {
  search: string
  query: string
  diet: string
  health: string
  cuisine: string
  to: number
}

export interface RecipeContextProps {
  data: RecipeData[] | undefined
  isLoading: boolean
  error: Error | null
  refetch: () => void
  searchApiParams: SearchApiParamsProps
  setSearchApiParams: Dispatch<SetStateAction<SearchApiParamsProps>>
}

const RecipeContext = createContext<RecipeContextProps | undefined>(undefined)

const RecipeContextProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [searchApiParams, setSearchApiParams] = useState({
    search: '',
    query: 'chicken',
    diet: 'balanced',
    health: 'alcohol-free',
    cuisine: 'indian',
    to: 10,
  })

  const { data, isLoading, error, refetch } = useRecipesData({
    ...searchApiParams,
  })

  const value = {
    data: data?.hits,
    isLoading,
    error: error instanceof Error ? error : null,
    refetch,
    searchApiParams,
    setSearchApiParams,
  }

  return <RecipeContext.Provider value={value}>{children}</RecipeContext.Provider>
}

const useRecipesContext = () => {
  const recipeContext = useContext(RecipeContext)

  if (!recipeContext) {
    throw new Error('There is some error in Reciepes Context...')
  }

  return recipeContext
}

export { RecipeContextProvider, useRecipesContext }
