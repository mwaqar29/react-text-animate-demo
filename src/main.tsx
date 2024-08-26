import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.tsx'
import './index.css'
import { ReactLenis } from 'lenis/react'
import Preview from './views/Preview'
import TEOneDemo from './views/TEOneDemo'
import TETwoDemo from './views/TETwoDemo'
import TEThreeDemo from './views/TEThreeDemo'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Preview />,
      },
      {
        path: '1',
        element: <TEOneDemo />,
      },
      {
        path: '2',
        element: <TETwoDemo />,
      },
      {
        path: '3',
        element: <TEThreeDemo />,
      },
    ],
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ReactLenis root>
      <RouterProvider router={router} />
    </ReactLenis>
  </StrictMode>
)
