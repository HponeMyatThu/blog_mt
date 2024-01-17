import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './layouts/LayOut';
import PageNotFound from './pages/PageNotFound';
import BlogList from './pages/BlogListPage';
import ArticlesList from './pages/ArticlesListPage';
import router from './router/router';
import Test from 'src/components/Test';
import { useState } from 'react';
import { Provider, useSelector } from 'react-redux';
import store from 'src/features/store';

function App() {
  return <RouterProvider router={router} />;
}

export default App;
