import React, { Dispatch, SetStateAction, createContext, useContext, useState } from 'react'
import { LocalStorageProps } from '../types/recipe'

interface LocalContextProps {
  bookmarkedRecipes: LocalStorageProps[]
  setBookmarkedRecipes: Dispatch<SetStateAction<LocalStorageProps[]>>
  isBookmarked: (uri: string) => boolean
  handleBookmarkRecipe: ({ uri, label, image }: LocalStorageProps) => void
  handleDeleteBookmark: (index: number) => void
  handleDeleteAll: () => void
}
const LocalContext = createContext<LocalContextProps>({
  bookmarkedRecipes: [],
  setBookmarkedRecipes: () => {},
  isBookmarked: () => false,
  handleBookmarkRecipe: () => {},
  handleDeleteBookmark: () => {},
  handleDeleteAll: () => {},
})

const useLocalContext = () => {
  return useContext(LocalContext)
}

const LocalContextProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [bookmarkedRecipes, setBookmarkedRecipes] = useState<Array<LocalStorageProps>>(() => {
    const storedRecipes = localStorage.getItem('bookmarkedRecipes')
    return storedRecipes ? JSON.parse(storedRecipes) : []
  })

  const isBookmarked = (uri: string) => {
    return bookmarkedRecipes.some((recipe) => recipe.uri === uri)
  }

  const updateBookmarkedRecipes = (updatedRecipes: LocalStorageProps[]) => {
    setBookmarkedRecipes(updatedRecipes)
    localStorage.setItem('bookmarkedRecipes', JSON.stringify(updatedRecipes))
  }

  const handleBookmarkRecipe = (recipe: LocalStorageProps) => {
    const isAlreadyBookmarked = isBookmarked(recipe.uri)
    if (isAlreadyBookmarked) {
      const updatedBookmarkedRecipes = bookmarkedRecipes.filter(
        (bookmarkRecipe) => bookmarkRecipe.uri !== recipe.uri
      )
      updateBookmarkedRecipes(updatedBookmarkedRecipes)
    } else {
      const updatedBookmarkedRecipes = [...bookmarkedRecipes, recipe]
      updateBookmarkedRecipes(updatedBookmarkedRecipes)
    }
  }

  const handleDeleteBookmark = (index: number) => {
    const updatedRecipesList = [...bookmarkedRecipes]
    updatedRecipesList.splice(index, 1)
    updateBookmarkedRecipes(updatedRecipesList)
  }

  const handleDeleteAll = () => {
    updateBookmarkedRecipes([])
  }

  const values = {
    bookmarkedRecipes,
    setBookmarkedRecipes,
    isBookmarked,
    handleBookmarkRecipe,
    handleDeleteBookmark,
    handleDeleteAll,
  }

  return <LocalContext.Provider value={values}>{children}</LocalContext.Provider>
}

export { LocalContextProvider, useLocalContext }
