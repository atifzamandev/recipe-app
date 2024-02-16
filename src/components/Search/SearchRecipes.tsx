import React, { ChangeEvent } from 'react'
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from '@mui/material'
import { dietLabels, healthLabels, cuisineType } from '../../utils/SearchItems'

interface SearchProp {
  search: string
  diet: string
  health: string
  cuisine: string
  handleSearch: (event: ChangeEvent<HTMLInputElement>) => void
  handleSubmit: (event: React.MouseEvent) => void
  handleDiet: (event: SelectChangeEvent<string>) => void
  handleHealth: (event: SelectChangeEvent<string>) => void
  handleCuisine: (event: SelectChangeEvent<string>) => void
}

const SearchRecipes = ({
  search,
  diet,
  health,
  cuisine,
  handleSearch,
  handleSubmit,
  handleDiet,
  handleHealth,
  handleCuisine,
}: SearchProp) => {
  return (
    <>
      <Box component='form' sx={{ display: 'flex', justifyContent: 'center' }}>
        <TextField
          variant='outlined'
          label='Search Recipe'
          size='small'
          sx={{ mr: 2 }}
          value={search}
          onChange={handleSearch}
          placeholder='Enter search query'
        />
        <Button
          type='submit'
          color='error'
          variant='contained'
          sx={{ pt: 1 }}
          onClick={handleSubmit}>
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
    </>
  )
}

export default SearchRecipes
