import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Contact from './layout/Category/Category';
import Layout from './layout/layout/Layout';
 
import NotFound from './layout/Error/Error';
import Category from './layout/Category/Category';
import Recommended from './layout/Recommended/Recommended';
import News from './layout/News/News';
import NewsLetter from './layout/NewsLetter/NewsLetter';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const router = createBrowserRouter([
  {
    path: "/",
    element:  <App />,
  },
  {
path:"/category",
element:<Layout><Category /></Layout>
  },
  {
    path:"/recommended",
    element:<Layout><Recommended /></Layout>
      },
      {
        path:"/news",
        element:<Layout><News /></Layout>
          },
          {
            path:"/newsLetter",
            element:<Layout><NewsLetter /></Layout>
              },
  {
    path:"*",
    element:<NotFound />
  }
]);
root.render(
  <React.StrictMode>
    <ErrorBoundary>

    <RouterProvider router={router} />
    </ErrorBoundary>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
