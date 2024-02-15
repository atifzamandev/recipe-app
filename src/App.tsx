import { ChangeEvent, useState } from 'react'
import styles from './App.module.css'
import RecipeCard from './components/RecipeCard/RecipeCard'
import { Box, Button, CircularProgress, Grid, TextField } from '@mui/material'
import { useRecipesData } from './api/recipes'
import { red } from '@mui/material/colors'
import Header from './components/Header/Header'

function App() {
  const [search, setSearch] = useState<string>('')
  const [query, setQuery] = useState<string>('chicken')
  const { data, isLoading, error, refetch } = useRecipesData(query)

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }
  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault()
    setQuery(search)
    refetch()
  }

  if (isLoading) {
    return (
      <div className={styles.loader}>
        {' '}
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

  //console.log(data?.hits)

  return (
    <>
      <Header hits={data?.hits} />
      <Grid container justifyContent='center' alignItems='center' my={5}>
        <Grid item mb={5}>
          <Box component='form'>
            <TextField variant='outlined' label='Search Recipe' size='small' sx={{ mr: 2 }} value={search} onChange={handleSearch} placeholder='Enter search query' />
            <Button type='submit' color='error' variant='contained' sx={{ pt: 1 }} onClick={handleSubmit}>
              Search
            </Button>
          </Box>
        </Grid>

        <Grid item>
          <RecipeCard hits={data?.hits} />
        </Grid>
      </Grid>
    </>
  )
}

export default App
