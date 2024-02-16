export interface RecipeProps {
  hits: RecipeData[] | undefined
}
export interface RecipeData {
  recipe: Recipe
}
export interface Recipe {
  uri: string
  label: string
  image: string
  source: string
  url: string
  dietLabels: string[]
  healthLabels: string[]
  cautions: string[]
  ingredientLines: string[]
  ingredients: Ingredients[]
  calories: number
  cuisineType: string[]
  mealType: string[]
  dishType: string[]
}
interface Ingredients {
  text: string
  quantity: number
  measure: string
  food: string
  weight: number
  foodCategory: string
  foodId: string
  image: string
}
