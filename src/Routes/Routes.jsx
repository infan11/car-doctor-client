import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import BookServices from "../Pages/BoookServices/BookServices";
import Bookings from "../Pages/Bookings/Bookings";
import PriveateRoute from "./PriveateRoute";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path:'/login',
          element: <Login></Login>
        },
        {
          path: '/Signup',
          element: <SignUp></SignUp>
        },
        {
          path: "book/:id",
          element: <BookServices></BookServices>,
          loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
          path: '/bookings',
          element: <PriveateRoute><Bookings></Bookings></PriveateRoute>
        }
      ]
      
    },
 
  ]);

export default  router