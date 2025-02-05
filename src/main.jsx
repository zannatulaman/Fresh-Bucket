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
import Verification from './pages/Auth/Verification.jsx';
import ForgetPassword from './pages/AuthPassword/ForgetPassword.jsx';
import ResetPassword from './pages/AuthPassword/ResetPassword.jsx';
import { Toaster } from 'sonner';
import SingleProfile from './pages/AuthProfile/SingleProfile.jsx';
import PrivateRoute from './pages/AuthProfile/PrivateRoute.jsx';
import Home from './pages/Description/Home.jsx';
import Details from './pages/Description/Details.jsx';
import Product from './pages/Description/Product.jsx';
import ProductDetails from './pages/Description/ProductDetails.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
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

      {
        path: "/auth/verify",
        element: <Verification></Verification>,
      },
      {
        path: "/auth/forget-password",
        element: <ForgetPassword></ForgetPassword>,
      },

      {
        path: "/auth/reset-password",
        element: <ResetPassword></ResetPassword>,
      },

      {
        path: "/auth/profile",
        element: (
          <PrivateRoute>
            <SingleProfile></SingleProfile>
          </PrivateRoute>
        ),
      },
      {
        path: "/product/description/:id",
        element: <ProductDetails></ProductDetails>,
      },
     
    ],
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <Toaster position="top-center" richColors={true} toastOptions={{
    style: {
       fontSize: "15px",
       textAlign: "center"
    }
    
  }}></Toaster>
  </StrictMode>,
)
