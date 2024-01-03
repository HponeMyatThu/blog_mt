import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layouts/LayOut';
import PageNotFound from '../pages/PageNotFound';
import ArticlesListPage from '../pages/ArticlesListPage';
import BlogListPage from '../pages/BlogListPage';
import SignInPage from '../pages/SignInPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '*',
        element: <PageNotFound />,
      },
      {
        path: '/blog-list',
        element: <BlogListPage />,
      },
      {
        path: '/articles/:id',
        element: <ArticlesListPage />,
      },
    ],
  },
  {
    path: '/sign-in',
    element: <SignInPage />,
  },
]);

export default router;
