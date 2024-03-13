import { useQuery } from 'react-query'
import axios from 'axios'
import { RecipeProps } from '../types/recipe'

interface ApiParamsProps {
  query: string
  diet: string
  health: string
  cuisine: string
  to: number
}

const fetchRecipesData = async ({
  query,
  diet,
  health,
  cuisine,
  to,
}: ApiParamsProps): Promise<RecipeProps> => {
  //As a good practice. These values should come from .env file but lets have them for test purpose.
  const REACT_APP_API_BASE_URL = 'https://api.edamam.com/search'
  const REACT_APP_API_ID = 'de45abea'
  const REACT_APP_API_KEY = '3661e79c36c22ffac791a5bac5a31532'
  try {
    const { data } = await axios.get(
      `${REACT_APP_API_BASE_URL}?&q=${query}&app_id=${REACT_APP_API_ID}&app_key=${REACT_APP_API_KEY}&from=0&to=${to}&health=${health}&diet=${diet}&cuisineType=${cuisine}`
    )

    return data
  } catch (error) {
    throw new Error('Failed to fetch recipes data')
  }
}

export const useRecipesData = ({ query, diet, health, cuisine, to }: ApiParamsProps) => {
  return useQuery(
    ['apiRecipe', query, diet, health, cuisine, to],
    () => fetchRecipesData({ query, diet, health, cuisine, to }),
    {
      staleTime: 30000,
      keepPreviousData: true,
      refetchOnWindowFocus: false,
    }
  )
}
