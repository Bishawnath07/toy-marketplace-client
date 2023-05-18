import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import ErrorPage from "../ErrorPage/ErrorPage";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import Home from "../Pages/Home/Home";
import AddToy from "../Pages/AddToy/AddToy";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main> ,
      errorElement: <ErrorPage></ErrorPage> ,
      children: [
        {
          path: '/' ,
          element: <Home></Home>
        } ,
        {
          path: '/addToy' ,
          element: <AddToy></AddToy>
        },
        {
          path: '/register' ,
          element: <Register></Register>
        } ,
        {
          path: '/login' ,
          element: <Login></Login>
        }

      ]
    },
   
    
  ]);

  export default router;