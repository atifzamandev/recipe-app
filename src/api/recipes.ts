import { useQuery } from 'react-query'
import axios from 'axios'
import { RecipeProps } from '../types/recipe'

const fetchRecipesData = async (query:string): Promise<RecipeProps> => {
  try {
 
    const { data } = await axios.get(`${process.env.REACT_APP_API_BASE_URL}?type=public&q=${query}&app_id=${process.env.REACT_APP_API_ID}&app_key=${process.env.REACT_APP_API_KEY}`)

    return data
  } catch (error) {
    throw new Error('Failed to fetch recipes data')
  }
}


export const useRecipesData = (query: string) => {
  return useQuery(['apiRecipe', query], () => fetchRecipesData(query), {
 
  })
}