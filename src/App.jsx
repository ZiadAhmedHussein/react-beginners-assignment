import React from 'react';
import Style from './App.module.css';
import Layout from './components/layout/Layout';
import Home from './components/home/Home';
import About from './components/about/About';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import ErrorPage from './components/errorPage/ErrorPage';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';

let router = createBrowserRouter([
  {path: '', element: <Layout />, children: [
    {index: true, element:<Home />},
    {path: 'about', element:<About />},
    {path: 'portfolio', element:<Portfolio />},
    {path: 'contact', element:<Contact />},
    {path: '*', element: <ErrorPage />}

  ]}
])

function App() {
  return (
    <div className={Style.App}>
      <RouterProvider router={ router } />
      
    </div>
  );
}

export default App;
