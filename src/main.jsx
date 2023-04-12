import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import Main from './components/Layout/Main';
import Statistics from './components/Statistics/Statistics';
import AppliedJobs from './components/AppliedJobs/AppliedJobs';
import Blog from './components/Blog/Blog';
import ErrorPage from './components/ErrorPage/ErrorPage';
import ViewDetails from './components/ViewDetails/ViewDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,

    errorElement: <ErrorPage></ErrorPage>,

    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('/jobCategories.json')            
      },
      {
        path: 'job/:id',
        element: <ViewDetails></ViewDetails>,
        loader: ({params}) => fetch('/jobsData.json')
      },
      {
        path: 'statistics',
        element: <Statistics></Statistics>
      },
      {
        path: 'applied',
        element: <AppliedJobs></AppliedJobs>
      },
      {
        path: 'blog',
        element: <Blog></Blog>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
