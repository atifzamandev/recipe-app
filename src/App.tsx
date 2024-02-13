import { useContext } from 'react'

import './App.css'
import RecipeContext from './context/RecipeContext'

function App() {
  const recipeData = useContext(RecipeContext)

  console.log(recipeData?.hits?.map((res) => res.recipe.calories))

  console.log(process.env)

  return (
    <div className='App'>
      <h1>Recipe Assignment</h1>
      <div>
        {recipeData?.hits?.map((recipe) => (
          <p key={recipe['recipe']['label']}>{recipe['recipe']['label']}</p>
        ))}
      </div>
    </div>
  )
}

export default App
