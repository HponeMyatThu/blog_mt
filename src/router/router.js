import { createBrowserRouter } from 'react-router-dom';
import Layout from 'src/layouts/LayOut';
import PageNotFound from 'src/pages/PageNotFound';
import ArticlesListPage from 'src/pages/ArticlesListPage';
import BlogListPage from 'src/pages/BlogListPage';
import SignInPage from 'src/pages/SignInPage';
import SignUpPage from 'src/pages/SignUpPage';
import AdminDashBoardPage from 'src/pages/AdminDashBoardPage';
import AdminLayout from 'src/layouts/AdminLayout';
import AdminBlogList from 'src/pages/AdminBlogList';
import AdminUserList from 'src/pages/AdminUserList';
import ProfilePage from 'src/pages/ProfilePage';
import CreateBlogPage from 'src/pages/CreateBlogPage';
import BlogDetailPage from 'src/pages/BlogDetailPage';

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
      {
        path: '/profile',
        element: <ProfilePage />,
      },
      {
        path: '/create-blog',
        element: <CreateBlogPage />,
      },
      {
        path: '/detail-blog',
        element: <BlogDetailPage />,
      },
    ],
  },
  {
    path: '/admin',
    element: <AdminLayout />,
    children: [
      {
        path: '*',
        element: <PageNotFound />,
      },
      {
        path: 'dashboard',
        element: <AdminDashBoardPage />,
      },
      {
        path: 'blog-list',
        element: <AdminBlogList />,
      },
      {
        path: 'user-list',
        element: <AdminUserList />,
      },
    ],
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
