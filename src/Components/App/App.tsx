import React from 'react'
import { AppRouter } from '../../Router/AppRouter'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AppRouter />
    </QueryClientProvider>
  )
}

export default App
