import { ChangeEvent, useState } from 'react'
import styles from './App.module.css'
import RecipeCard from './components/RecipeCard/RecipeCard'
import { Box, Button, CircularProgress, FormControl, Grid, InputLabel, MenuItem, Select, SelectChangeEvent, TextField } from '@mui/material'
import { useRecipesData } from './api/recipes'
import { red } from '@mui/material/colors'
import Header from './components/Header/Header'
import { dietLabels, healthLabels, cuisineType } from './utils/SearchItems'

function App() {
  const [search, setSearch] = useState<string>('')
  const [query, setQuery] = useState<string>('chicken')
  const [diet, setDiet] = useState<string>('balanced')
  const [health, setHealth] = useState<string>('alcohol-free')
  const [cuisine, setCuisine] = useState<string>('indian')
  const { data, isLoading, error, refetch } = useRecipesData({ query, diet, health, cuisine })

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

  return (
    <>
      <Header />
      <Grid container direction='row' justifyContent='center' alignItems='center' my={5}>
        <Grid item mb={5}>
          <Box component='form' sx={{ display: 'flex', justifyContent: 'center' }}>
            <TextField variant='outlined' label='Search Recipe' size='small' sx={{ mr: 2 }} value={search} onChange={handleSearch} placeholder='Enter search query' />
            <Button type='submit' color='error' variant='contained' sx={{ pt: 1 }} onClick={handleSubmit}>
              Search
            </Button>
          </Box>
          <Box component='form' mt={3}>
            <FormControl size='small' sx={{ ml: 2 }}>
              <InputLabel>Diet</InputLabel>
              <Select value={diet} label='Diet Labels' onChange={handleDiet}>
                {dietLabels.map((label) => (
                  <MenuItem key={label.value} value={label.value}>
                    {label.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl size='small' sx={{ ml: 2 }}>
              <InputLabel>Health</InputLabel>
              <Select value={health} label='Health Labels' onChange={handleHealth}>
                {healthLabels.map((health) => (
                  <MenuItem key={health.value} value={health.value}>
                    {health.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl size='small' sx={{ ml: 2 }}>
              <InputLabel>Cuisine</InputLabel>
              <Select value={cuisine} label='Cuisine Type' onChange={handleCuisine}>
                {cuisineType.map((cuisine) => (
                  <MenuItem key={cuisine.value} value={cuisine.value}>
                    {cuisine.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        </Grid>

        <Grid item xs={12}>
          <RecipeCard hits={data?.hits} />
        </Grid>
      </Grid>
    </>
  )
}

export default App
