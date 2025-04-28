import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './Pages/HomePage/HomePage.jsx';
import Details from './Pages/DetailsPage/DetailPage.jsx';
import Info from './Pages/InfoPage/InfoPage.jsx';
import App from './App.jsx';
import Login from './routes/Login.jsx';
import Signup from './routes/Signup.jsx';
import ProtectedRoute from './routes/ProtectedRoute.jsx';
import { AuthProvider } from './Auth/AuthProvider.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },
  {
    path: '/app',
    element: <ProtectedRoute />,
    children: [
      {
        element: <App />, // Aquí empieza a aparecer el Navbar y el Footer
        children: [

          {
            index: true, // /app
            element: <Home />,
          },
          {
            path: 'info', // /app/info
            element: <Info />,
          },
          {
            path: 'Details/:id', // /app/home
            element: <Details />,
          }
        ],
      },
    ],
  },

]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
