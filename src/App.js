import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./layouts/LayOut";
import PageNotFound from "./pages/PageNotFound";
import BlogList from "./pages/BlogList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,

    children: [
      {
        path: "*",
        element: <PageNotFound/>,
      },
      {
        path: "/",
        element: <BlogList/>,
      }
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
