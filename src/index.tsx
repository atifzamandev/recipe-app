import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { QueryClient, QueryClientProvider } from 'react-query'
import RecipeContextProvider from './context/RecipeContextProvider'

const queryClient = new QueryClient()

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RecipeContextProvider>
        <App />
      </RecipeContextProvider>
    </QueryClientProvider>
  </React.StrictMode>
)
