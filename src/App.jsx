import { 
  createBrowserRouter, 
  createRoutesFromElements, 
  Route, 
  RouterProvider 
} from 'react-router-dom';


// layouts and pages
import RootLayout from './layouts/RootLayout'
import Dashboard from './pages/Dashboard'
import Create from './pages/Create'
import Profile from './pages/Profile'
import NFTCollected from './pages/NFTCollected';
import NFTCollections from './pages/NFTCollections';

// router and routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Dashboard />}  />
      <Route path="create" element={<Create />} />
      <Route path="profile" element={<Profile />} />
      <Route path="collected" element={<NFTCollected />} />
      <Route path="nfts" element={<NFTCollections />} />
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
