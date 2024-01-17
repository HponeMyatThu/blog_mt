import { createBrowserRouter } from 'react-router-dom';
import Layout from 'src/layouts/LayOut';
import PageNotFound from 'src/pages/PageNotFound';
import ArticlesListPage from 'src/pages/ArticlesListPage';
import BlogListPage from 'src/pages/BlogListPage';
import SignInPage from 'src/pages/SignInPage';
import SignUpPage from 'src/pages/SignUpPage';
import AdminDashBoardPage from 'src/pages/AdminDashBoardPage';
import AdminLayout from 'src/layouts/AdminLayout';

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
    path: '/admin',
    element: <AdminLayout />,
    children:[
      {
        path: '*',
        element: <PageNotFound />,
      },
      {
        path: 'dashboard',
        element: <AdminDashBoardPage />,
      }
    ]
  },
  {
    path: '/sign-in',
    element: <SignInPage />,
  },
  {
    path: '/sign-up',
    element: <SignUpPage />,
  },
]);

export default router;
