import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Main from './components/Main'
import Nav from './components/Nav'
import SideNav from './components/SideNav'

function App() {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <Nav/>
      <SideNav/>
      <Main/>
    </QueryClientProvider>
  )
}

export default App
