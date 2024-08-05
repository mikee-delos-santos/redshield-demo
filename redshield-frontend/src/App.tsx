import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Main from './components/Main'
import Nav from './components/Nav'
import SideNav from './components/SideNav'

function App() {
  const queryClient = new QueryClient()
  console.log(import.meta.env.VITE_API_URL)
  return (
    <QueryClientProvider client={queryClient}>
      <Nav/>
      <SideNav/>
      <Main/>
    </QueryClientProvider>
  )
}

export default App
