

export interface RecipeProps {
  hits: RecipeData[]
}

 export interface RecipeData {
    recipe: Recipe;
    _links: Links;
  }

 export interface Recipe {
  label: string
  image: string
  source: string
  url: string
  dietLabels: string[]
  healthLabels: string[]
  cautions: string[]
  ingredientLines: Ingredients[]
  calories: number
  cuisineType: string[]
  mealType: string[]
  dishType: string[]
  links: Links
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


interface Links {
  self: SelfLink
}

interface SelfLink {
  href: string
  title: string
}
