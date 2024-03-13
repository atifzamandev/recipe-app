import Main from './Main'
import { LocalContextProvider } from './contexts/LocalContext'
import { RecipeContextProvider } from './contexts/RecipeContext'

const App = () => {
  return (
    <RecipeContextProvider>
      <LocalContextProvider>
        <Main />
      </LocalContextProvider>
    </RecipeContextProvider>
  )
}

export default App
