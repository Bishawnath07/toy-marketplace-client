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
          element: <SignalToyDetails></SignalToyDetails> ,
          loader:  ({params}) => fetch(`http://localhost:5000/myToys/${params.id}`)
        },
        {
          path: '/myToys' ,
          element: <MyToys></MyToys>
        },
        {
          path: '/updateToy/:id' ,
          element: <UpdateToy></UpdateToy> ,
          loader:  ({params}) => fetch(`http://localhost:5000/myToys/${params._id}`)
        },
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