import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Dashboard from './pages/Dashboard/Dashboard'
import Transaction from './pages/Transaction/Transaction'
import Support from './pages/Support/Support'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/support",
    element: <Support />,
  },
  {
    path: "/transaction",
    element: <Transaction />,
  },
]);

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <RouterProvider router={router} />
     
    </>
  )
}

export default App
