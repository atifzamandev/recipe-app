import React, { useState } from 'react'
import { Box, Button, CircularProgress, FormControl, Grid, InputLabel, MenuItem, Select, SelectChangeEvent, TextField } from '@mui/material'

const Search = () => {
    const [diet, setDiet] = useState<string>('balanced')
    const [health, setHealth] = useState<string>('alcohol-free')
    const [cuisine, setCuisine] = useState<string>('indian')
    const handleDiet = (e: SelectChangeEvent<string>) => {
        setDiet(e.target.value as string)
      }
    
      const handleHealth = (e: SelectChangeEvent<string>) => {
        setHealth(e.target.value as string)
      }
      const handleCuisine = (e: SelectChangeEvent<string>) => {
        setCuisine(e.target.value as string)
      }
  return (
    <div>

<Box component='form' mt={3}>
            <FormControl size='small' sx={{ ml: 2 }}>
              <InputLabel>Diet</InputLabel>
              <Select value={diet} label='Diet Labels' onChange={handleDiet}>
                <MenuItem value={'balanced'}>Balanced</MenuItem>
                <MenuItem value={'high-protein'}>High Protein</MenuItem>
                <MenuItem value={'high-fiber'}>High Fiber</MenuItem>
                <MenuItem value={'low-fat'}>Low Fat</MenuItem>
                <MenuItem value={'low-carb'}>Low Carb</MenuItem>
                <MenuItem value={'low-sodium'}>Low Sodium</MenuItem>
              </Select>
            </FormControl>
            <FormControl size='small' sx={{ ml: 2 }}>
              <InputLabel>Health</InputLabel>
              <Select value={health} label='Health Labels' onChange={handleHealth}>
                <MenuItem value={'alcohol-free'}>Alcohol Free</MenuItem>
                <MenuItem value={'vegan'}>Vegan</MenuItem>
                <MenuItem value={'vegetarian'}>Vegetarian</MenuItem>
                <MenuItem value={'paleo'}>Paleo</MenuItem>
                <MenuItem value={'dairy-free'}>Dairy Free</MenuItem>
                <MenuItem value={'gluten-free'}>Gluten Free</MenuItem>
                <MenuItem value={'wheat-free'}>Wheat Free</MenuItem>
                <MenuItem value={'fat-free'}>Fatat Free</MenuItem>
                <MenuItem value={'low-sugar'}>Low Sugar</MenuItem>
                <MenuItem value={'egg-free'}>Egg Free</MenuItem>
                <MenuItem value={'peanut-free'}>Peanut Free</MenuItem>
                <MenuItem value={'tree-nut-free'}>Tree Nut Free</MenuItem>
                <MenuItem value={'soy-free'}>Soy Free</MenuItem>
                <MenuItem value={'fish-free'}>Fish Free</MenuItem>
                <MenuItem value={'shellfish-free'}>Shellfish Free</MenuItem>
              </Select>
            </FormControl>
            <FormControl size='small' sx={{ ml: 2 }}>
              <InputLabel>Cuisine</InputLabel>
              <Select value={cuisine} label='Cuisine Type' onChange={handleCuisine}>
                <MenuItem value={'indian'}>Indian</MenuItem>
                <MenuItem value={'american'}>American</MenuItem>
                <MenuItem value={'asian'}>Asian</MenuItem>
                <MenuItem value={'british'}>British</MenuItem>
                <MenuItem value={'caribbean'}>Caribbean</MenuItem>
                <MenuItem value={'europe'}>Europen</MenuItem>
                <MenuItem value={'chinese'}>Chinese</MenuItem>
                <MenuItem value={'french'}>French</MenuItem>
                <MenuItem value={'indian'}>Indian</MenuItem>
                <MenuItem value={'italian'}>Italian</MenuItem>
                <MenuItem value={'japanese'}>Japanese</MenuItem>
                <MenuItem value={'kosher'}>Kosher</MenuItem>
                <MenuItem value={'mediterranean'}>Mediterranean</MenuItem>
                <MenuItem value={'mexican'}>Mexican</MenuItem>
                <MenuItem value={'eastern'}>Eastern</MenuItem>
                <MenuItem value={'nordic'}>Nordic</MenuItem>
              </Select>
            </FormControl>
          </Box>
    </div>
  )
}

export default Search