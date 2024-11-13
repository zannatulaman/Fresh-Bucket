import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


import './index.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './pages/Auth/Register.jsx';
import Login from './pages/Auth/Login.Jsx';
import MainLayout from './layout/MainLayout.jsx';


const router = createBrowserRouter([
 {
  path: "/",
  element: <MainLayout></MainLayout>,
  children: [ {
    path: "/",
    element: <App />,
  },

  {
    path: "/auth/register",
    element: <Register></Register>,
  },

  {
    path: "/auth/login",
    element: <Login></Login>,
  },
  ]
 }
  

]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
