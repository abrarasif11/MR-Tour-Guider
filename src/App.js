import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './Layout/Main';
import Blog from './Pages/Blog/Blog';
import ErrorPage from './Pages/ErrorPage/ErrorPage';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Service from './Pages/Service/Service';
import Signup from './Pages/Signup/Signup';



function App() {
  const router = createBrowserRouter([
    {
    path: '/',
    element: <Main></Main>,
    children : [
      {
       path : '/',
       element : <Home></Home>
      },
      {
        path : '/services',
        element : <Service></Service>,
        loader : () => fetch('http://localhost:5000/services')
      },
      {
        path : '/blog',
        element : <Blog></Blog>
      },
      {
        path : '/login',
        element : <Login></Login>
      },
      {
        path : '/signup',
        element : <Signup></Signup>
      }
    ]
    },
   {
    path : '*',
    element : <ErrorPage></ErrorPage>
   }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
