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
          data-cy-query='cy-query'
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
          data-cy-search='cy-search'
          sx={{ pt: 1 }}
          onClick={handleSubmit}>
          Search
        </Button>
      </Box>
      <Box component='form' mt={3}>
        <FormControl size='small' sx={{ ml: 2 }}>
          <InputLabel>Diet</InputLabel>
          <Select data-cy-diet='cy-diet' value={diet} label='Diet Labels' onChange={handleDiet}>
            {dietLabels.map((diet) => (
              <MenuItem
                data-cy-diet-option={`cy-diet-option-${diet.value}`}
                key={diet.value}
                value={diet.value}>
                {diet.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl size='small' sx={{ ml: 2 }}>
          <InputLabel>Health</InputLabel>
          <Select
            data-cy-health='cy-health'
            value={health}
            label='Health Labels'
            onChange={handleHealth}>
            {healthLabels.map((health) => (
              <MenuItem
                data-cy-health-option={`cy-health-option-${health.value}`}
                key={health.value}
                value={health.value}>
                {health.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl size='small' sx={{ ml: 2 }}>
          <InputLabel>Cuisine</InputLabel>
          <Select
            data-cy-cuisine='cy-cuisine'
            value={cuisine}
            label='Cuisine Type'
            onChange={handleCuisine}>
            {cuisineType.map((cuisine) => (
              <MenuItem
                data-cy-cuisine-option={`cy-cuisine-option-${cuisine.value}`}
                key={cuisine.value}
                value={cuisine.value}>
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
