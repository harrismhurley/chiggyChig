import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from './App.tsx'
import './index.scss'
import Home from './pages/home/index.tsx';
import Register from './pages/register/index.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <h1>Oops! Page not found.</h1>,
    children: [
      { path: '/', element: <Home/> },
      { path: '/register', element: <Register/>},
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
