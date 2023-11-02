import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from './Components/Header/Header';
import App from './App';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [ 
      {
          path: '/',
          element:<Header></Header>
      }
  ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
