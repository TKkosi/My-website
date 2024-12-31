import NavBar from './components/NavBar'
import Footer from './components/Footer'
import AppRoutes from './routes/Routes'
import Layout from './components/Layout'
import DashBoard from './pages/DashBoard'


function App() {

  return (
    <div className="min-h-screen flex flex-col">
      iam working
      <NavBar />
      <DashBoard />
      <main className="flex-grow">
        <Layout />
        <AppRoutes />
      </main>
      <Footer />
    </div>
  )
}

export default App
