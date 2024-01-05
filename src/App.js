import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './layouts/LayOut';
import PageNotFound from './pages/PageNotFound';
import BlogList from './pages/BlogListPage';
import ArticlesList from './pages/ArticlesListPage';
import router from './router/router';
import Test from 'src/components/Test';
import { useState } from 'react';

function App() {
  // const [increase, setIncrease] = useState(1);

  // const handleIncrement = () => {
  //   setIncrease(increase + 1);
  // };
  // return (
  //   <>
  //     <button onClick={handleIncrement}>+</button>
  //     <br />
  //     {[...Array(increase)].map((_, index) => (
  //       <div>
  //         <div key={index}>
  //           <Test />
  //         </div>
  //         <br />
  //       </div>
  //     ))}
  //   </>
  // );
  return <RouterProvider router={router} />;
}

export default App;
