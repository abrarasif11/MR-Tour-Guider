import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './Layout/Main';
import AddService from './Pages/AddService/AddService';
import Blog from './Pages/Blog/Blog';
import ErrorPage from './Pages/ErrorPage/ErrorPage';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import MyReviews from './Pages/MyReviews/MyReviews';
import SeeDetails from './Pages/SeeDetails/SeeDetails';
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
       element : <Home></Home>,
       loader : () => fetch('https://server-assignment-11-teal.vercel.app/servicesforhome')
      },
      {
        path : '/services',
        element : <Service></Service>,
        loader : () => fetch('https://server-assignment-11-teal.vercel.app/services')
      },
      {
        path : '/services/:id',
        loader : ({ params }) =>
        fetch(`https://server-assignment-11-teal.vercel.app/services/${params.id}`),
        element : <SeeDetails></SeeDetails>
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
      },
      {
       path : '/myreviews',
       element : <MyReviews></MyReviews>
      },
      {
        path : 'addservice',
        element : <AddService></AddService>
      },
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
