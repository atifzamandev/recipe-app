

export interface RecipeProps {
  from?:number
  to?:number
  count?:number
  hits: RecipeData[] | undefined
  _links?:PageLinks
}

interface PageLinks {
  next: LinkInfo;
}

interface LinkInfo {
  href: string;
  title: string;
}

 export interface RecipeData {
    recipe: Recipe;
    _links: Links;
  }
 export interface Recipe 
 {
  uri: string
  label: string
  image: string
  images:Images
  source: string
  url: string
  dietLabels: string[]
  healthLabels: string[]
  cautions: string[]
  ingredientLines: string[]
  ingredients:Ingredients[]
  calories: number
  cuisineType: string[]
  mealType: string[]
  dishType: string[]
  links: Links
}
interface Images {
  THUMBNAIL: Image,
  SMALL:Image,
  REGULAR:Image
}
interface Image {
  url:string,
  width:number
  height:number

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
