import { ChangeEvent, useEffect, useState } from 'react'
import styles from './Main.module.css'
import RecipeCard from './components/RecipeCard/RecipeCard'
import { Box, CircularProgress, Grid, SelectChangeEvent } from '@mui/material'
import { useRecipesData } from './api/recipes'
import { red } from '@mui/material/colors'
import Header from './components/Header/Header'
import SearchRecipes from './components/Search/SearchRecipes'
import LoadMore from './components/LoadMore/LoadMore'
import { LocalStorageProps } from './types/recipe'

const Main = () => {
  const [bookmarkedRecipes, setBookmarkedRecipes] = useState<Array<LocalStorageProps>>(() => {
    const storedRecipes = localStorage.getItem('bookmarkedRecipes')
    return storedRecipes ? JSON.parse(storedRecipes) : []
  })
  const [search, setSearch] = useState<string>('')
  const [query, setQuery] = useState<string>('chicken')
  const [diet, setDiet] = useState<string>('balanced')
  const [health, setHealth] = useState<string>('alcohol-free')
  const [cuisine, setCuisine] = useState<string>('indian')
  const [to, setTo] = useState(10)

  const { data, isLoading, error, refetch } = useRecipesData({
    query,
    diet,
    health,
    cuisine,
    to,
  })

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }
  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault()
    setQuery(search)
    refetch()
  }
  const handleDiet = (e: SelectChangeEvent<string>) => {
    setDiet(e.target.value as string)
  }

  const handleHealth = (e: SelectChangeEvent<string>) => {
    setHealth(e.target.value as string)
  }
  const handleCuisine = (e: SelectChangeEvent<string>) => {
    setCuisine(e.target.value as string)
  }

  const handleLoadMore = () => {
    setTo(to + 10)
  }

  const isBookmarked = (uri: string) => {
    return bookmarkedRecipes.some((recipe) => recipe.uri === uri)
  }
  const handleBookmarkRecipe = (recipe: LocalStorageProps) => {
    const isAlreadyBookmarked = isBookmarked(recipe.uri)

    if (isAlreadyBookmarked) {
      const updatedBookmarkedRecipes = bookmarkedRecipes.filter(
        (bookmarkRecipe) => bookmarkRecipe.uri !== recipe.uri
      )
      setBookmarkedRecipes(updatedBookmarkedRecipes)
      localStorage.setItem('bookmarkedRecipes', JSON.stringify(updatedBookmarkedRecipes))
    } else {
      const updatedBookmarkedRecipes = [...bookmarkedRecipes, recipe]
      setBookmarkedRecipes(updatedBookmarkedRecipes)
      localStorage.setItem('bookmarkedRecipes', JSON.stringify(updatedBookmarkedRecipes))
    }
  }

  const handleDeleteBookmark = (index: number) => {
    const updatedRecipesList = [...bookmarkedRecipes]
    updatedRecipesList.splice(index, 1)
    setBookmarkedRecipes(updatedRecipesList)
    localStorage.setItem('bookmarkedRecipes', JSON.stringify(updatedRecipesList))
  }
  const handleDeleteAll = () => {
    setBookmarkedRecipes([])
    localStorage.setItem('bookmarkedRecipes', JSON.stringify([]))
  }

  useEffect(() => {
    const storedRecipe = localStorage.getItem('bookmarkedRecipes')
    if (storedRecipe) {
      const parsedRecipes: Array<LocalStorageProps> = JSON.parse(storedRecipe)
      setBookmarkedRecipes(parsedRecipes)
    }
  }, [bookmarkedRecipes])

  if (isLoading) {
    return (
      <div className={styles.loader}>
        <Box sx={{ display: 'flex' }}>
          <CircularProgress sx={{ color: red[500] }} />
        </Box>
      </div>
    )
  }

  if (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error'
    return <div>Error: {errorMessage}</div>
  }

  return (
    <>
      <Header
        recipesList={bookmarkedRecipes}
        handleDeleteBookmark={handleDeleteBookmark}
        handleDeleteAll={handleDeleteAll}
      />
      <Grid container direction='row' justifyContent='center' alignItems='center' my={5}>
        <Grid item mb={5}>
          <SearchRecipes
            search={search}
            diet={diet}
            health={health}
            cuisine={cuisine}
            handleSearch={handleSearch}
            handleSubmit={handleSubmit}
            handleDiet={handleDiet}
            handleHealth={handleHealth}
            handleCuisine={handleCuisine}
          />
        </Grid>
        <Grid item xs={12}>
          <RecipeCard
            hits={data?.hits}
            isBookmarked={isBookmarked}
            handleBookmarkRecipe={handleBookmarkRecipe}
          />
        </Grid>
        <Grid item xs={3}>
          {data?.hits && data.hits.length > 0 && <LoadMore handleLoadMore={handleLoadMore} />}
        </Grid>
      </Grid>
    </>
  )
}

export default Main
