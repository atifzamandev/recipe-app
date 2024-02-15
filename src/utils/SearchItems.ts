export interface SearchOptions {
  value: string
  label: string
}

export const dietLabels: SearchOptions[] = [
  { value: 'balanced', label: 'Balanced' },
  { value: 'high-protein', label: 'High Protein' },
  { value: 'high-fiber', label: 'High Fiber' },
  { value: 'low-fat', label: 'Low Fat' },
  { value: 'low-carb', label: 'Low Carb' },
  { value: 'low-sodium', label: 'Low Sodium' },
]

export const healthLabels: SearchOptions[] = [
  { value: 'alcohol-free', label: 'Alcohol Free' },
  { value: 'vegan', label: 'Vegan' },
  { value: 'vegetarian', label: 'Vegetarian' },
  { value: 'paleo', label: 'Paleo' },
  { value: 'dairy-free', label: 'Dairy Free' },
  { value: 'gluten-free', label: 'Gluten Free' },
  { value: 'wheat-free', label: 'Wheat Free' },
  { value: 'fat-free', label: 'Fat Free' },
  { value: 'low-sugar', label: 'Low Sugar' },
  { value: 'egg-free', label: 'Egg Free' },
  { value: 'peanut-free', label: 'Peanut Free' },
  { value: 'tree-nut-free', label: 'Tree Nut Free' },
  { value: 'soy-free', label: 'Soy Free' },
  { value: 'fish-free', label: 'Fish Free' },
  { value: 'shellfish-free', label: 'Shellfish Free' },
]

export const cuisineType: SearchOptions[] = [
  { value: 'indian', label: 'Indian' },
  { value: 'american', label: 'American' },
  { value: 'asian', label: 'Asian' },
  { value: 'british', label: 'British' },
  { value: 'caribbean', label: 'Caribbean' },
  { value: 'europe', label: 'European' },
  { value: 'chinese', label: 'Chinese' },
  { value: 'french', label: 'French' },
  { value: 'italian', label: 'Italian' },
  { value: 'japanese', label: 'Japanese' },
  { value: 'kosher', label: 'Kosher' },
  { value: 'mediterranean', label: 'Mediterranean' },
  { value: 'mexican', label: 'Mexican' },
  { value: 'eastern', label: 'Eastern' },
  { value: 'nordic', label: 'Nordic' },
]
