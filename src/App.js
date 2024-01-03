import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './layouts/LayOut';
import PageNotFound from './pages/PageNotFound';
import BlogList from './pages/BlogListPage';
import ArticlesList from './pages/ArticlesListPage';
import router from './router/router';

// import Articles from "src/components/Articles/Articles";
// import SingleArticles from "./components/Articles/SingleArticles";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,

//     children: [
//       {
//         path: "*",
//         element: <PageNotFound/>,
//       },
//       {
//         path: "/blog-list",
//         element: <BlogList/>,
//       },
//       {
//         path: "/articles/:id",
//         element: <ArticlesList />
//       }
//     ],
//   },
// ]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
