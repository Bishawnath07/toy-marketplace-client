import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import ErrorPage from "../ErrorPage/ErrorPage";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import Banner from "../Pages/Banner/Banner";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main> ,
      errorElement: <ErrorPage></ErrorPage> ,
      children: [
        {
          path: '/' ,
          element: <Banner></Banner>
        } ,
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