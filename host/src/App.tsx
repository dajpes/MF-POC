import Header from './components/Header/Header'
import SellTickets from './components/SellTickets/SellTickets'
import { AuthProvider } from './hooks/useAuth'

function App() {
  return (
    <AuthProvider>
      <Header />
      <SellTickets />
    </AuthProvider>
  )
}

export default App
