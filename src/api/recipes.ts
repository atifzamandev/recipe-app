import axios from 'axios'
import { useQuery } from 'react-query'
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
  try {
    const { data } = await axios.get(
      `${process.env.REACT_APP_API_BASE_URL}?&q=${query}&app_id=${process.env.REACT_APP_API_ID}&app_key=${process.env.REACT_APP_API_KEY}&from=0&to=${to}&health=${health}&diet=${diet}&cuisineType=${cuisine}`
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
