import { Box, CircularProgress, Grid, SelectChangeEvent } from '@mui/material'
import { red } from '@mui/material/colors'
import { ChangeEvent } from 'react'
import styles from './Main.module.css'
import Header from './components/Header/Header'
import LoadMore from './components/LoadMore/LoadMore'
import RecipeCard from './components/RecipeCard/RecipeCard'
import SearchRecipes from './components/Search/SearchRecipes'
import { useRecipesContext } from './contexts/RecipeContext'

const Main = () => {
  const { searchApiParams, setSearchApiParams, data, isLoading, refetch, error } =
    useRecipesContext()
  const { search, diet, health, cuisine } = searchApiParams

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchApiParams({ ...searchApiParams, search: e.target.value })
  }
  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault()
    setSearchApiParams({ ...searchApiParams, query: search })
    refetch()
  }
  const handleDiet = (e: SelectChangeEvent<string>) => {
    setSearchApiParams({ ...searchApiParams, diet: e.target.value as string })
  }

  const handleHealth = (e: SelectChangeEvent<string>) => {
    setSearchApiParams({ ...searchApiParams, health: e.target.value as string })
  }
  const handleCuisine = (e: SelectChangeEvent<string>) => {
    setSearchApiParams({ ...searchApiParams, cuisine: e.target.value as string })
  }

  const handleLoadMore = () => {
    setSearchApiParams((prevParams) => ({ ...prevParams, to: prevParams.to + 10 }))
  }

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
      <Header />
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
          <RecipeCard />
        </Grid>
        <Grid item xs={3}>
          {data && data.length > 0 && <LoadMore handleLoadMore={handleLoadMore} />}
        </Grid>
      </Grid>
    </>
  )
}

export default Main
