import NavBar from './components/NavBar'
import Footer from './components/Footer'
import AppRoutes from './routes/Routes'


function App() {

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow">
        <AppRoutes />
      </main>
      <Footer />
    </div>
  )
}

export default App
