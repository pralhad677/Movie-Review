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
import Contact from './layout/contact/Contact';
import Layout from './layout/layout/Layout';
import About from './layout/about/About';
import NotFound from './layout/Error/Error';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const router = createBrowserRouter([
  {
    path: "/",
    element:  <App />,
  },
  {
path:"/about",
element:<Layout><About /></Layout>
  },
  {
    path:"/contact",
    element:<Layout><Contact /></Layout>
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
