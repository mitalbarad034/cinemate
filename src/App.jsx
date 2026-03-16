import './App.css'
import AllRoutes from './routes/AllRoutes'
import { Header, Footer } from './components'

function App() {
  return (
    <div className="min-h-screen bg-brand dark:bg-brand text-black dark:text-white  ">
      <Header />
      <AllRoutes />
      <Footer />
    </div >
  )
}

export default App
