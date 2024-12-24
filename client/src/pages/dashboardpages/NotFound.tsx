import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-4xl font-bold text-gray-800">404</h1>
      <p className="text-gray-600">Page Not Found</p>
      <Link to="/" className="mt-4 text-emerald-500 hover:underline">
        Go back to Home
      </Link>
    </div>
  )
}

export default NotFound