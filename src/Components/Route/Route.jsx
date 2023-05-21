import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import ErrorPage from "../ErrorPage/ErrorPage";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import Home from "../Pages/Home/Home";
import AddToy from "../Pages/AddToy/AddToy";
import AllToys from "../Pages/AllToys/AllToys";
import MyToys from "../Pages/MyToy/MyToys";
import SignalToyDetails from "../Pages/AllToys/SignalToyDetails/SignalToyDetails";
import UpdateToy from "../Pages/UpdateToy/UpdateToy";
import PrivetRoute from "./PrivetRoute";
import Blogs from "../Pages/Blogs/Blogs";
import TabToyDetails from "../Pages/Home/Tabs/TabToyDetails/TabToyDetails";

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
          path:'/allToys' ,
          element: <AllToys></AllToys> ,
        },
        {
          path: '/signalDetails/:id' ,
          element:<PrivetRoute> <SignalToyDetails></SignalToyDetails> </PrivetRoute>,
          loader:  ({params}) => fetch(`https://b7a11-toy-marketplace-server-side-bishawnath07.vercel.app/myAllToys/${params.id}`)
        },
        {
          path: '/myToys' ,
          element: <MyToys></MyToys>
        },
        {
          path: '/updateToy/:id' ,
          element: <UpdateToy></UpdateToy> ,
          loader: ({params}) => fetch(`https://b7a11-toy-marketplace-server-side-bishawnath07.vercel.app/myAllToys/${params.id}`)
          
        },
        {
          path: '/tabToyDetails/:id' ,
          element:<PrivetRoute><TabToyDetails></TabToyDetails></PrivetRoute> ,
          loader: ({params}) => fetch(`https://b7a11-toy-marketplace-server-side-bishawnath07.vercel.app/myAllToys/${params.id}`)
        },
        {
          path: '/addToy' ,
          element: <AddToy></AddToy>
        },
        {
          path: '/blog' ,
          element: <Blogs></Blogs>
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