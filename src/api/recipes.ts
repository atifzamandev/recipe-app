import { useQuery } from 'react-query'
import axios from 'axios'
import {RecipeProps} from '../types/recipe'

const fetchRecipesData = async (): Promise<RecipeProps> => {
  try {
    //https://api.edamam.com/api/recipes/v2?type=public&q=potato&app_id=df53c267&app_key=bd80595496a524a833554462aa41a04c
    
    const query = "chicken"
    const { data } = await axios.get(`${process.env.REACT_APP_API_BASE_URL}?type=public&q=${query}&app_id=${process.env.REACT_APP_API_ID}&app_key=${process.env.REACT_APP_API_KEY}`)

    return data
  } catch (error) {
    throw new Error('Failed to fetch recipes data')
  }
}

export const useRecipesData = () => {
  return useQuery('apiRecipe', fetchRecipesData)
}
