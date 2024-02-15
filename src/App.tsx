import { ChangeEvent, useState } from 'react'
import styles from './App.module.css'
import RecipeCard from './components/RecipeCard/RecipeCard'
import { Box, CircularProgress, Grid, SelectChangeEvent } from '@mui/material'
import { useRecipesData } from './api/recipes'
import { red } from '@mui/material/colors'
import Header from './components/Header/Header'
import SearchRecipes from './components/Search/SearchRecipes'
import LoadMore from './components/LoadMore/LoadMore'

function App() {
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

  const handleLoadMore = () => {
    setTo(to + 10)
  }
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
        <RecipeCard hits={data?.hits} />
        <LoadMore handleLoadMore={handleLoadMore} />
      </Grid>
    </>
  )
}

export default App
