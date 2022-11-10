import Login from "../../components/Page/Login/Login";
import Register from "../../components/Page/Register/Register";
import Home from "../../components/Page/Home/Home";
import Main from "../../Layout/Main";
import Details from "../../components/Page/Home/Details/Details";
import ServicesPage from "../../components/Page/Services/ServicesPage/ServicesPage";
import Blog from "../../components/Page/Blog/Blog";
import AddService from "../../components/Page/AddService/AddService";
import MyReview from "../../components/Page/MyReview/MyReview";
import PrivateRoute from "../../components/PrivateRoute/PrivateRoute";
import Newservices from "../../components/Page/Newservices/Newservices";
import MYAllReviews from "../../components/Page/MYAllReviews/MYAllReviews";
import Edit from "../../components/Page/Edit/Edit";

const { createBrowserRouter } = require("react-router-dom");

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/details/:id",
        element: <Details></Details>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
      },
      {
        path: "/servicespage",
        element: <ServicesPage></ServicesPage>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/addservices",
        element: (
          <PrivateRoute>
            <AddService></AddService>
          </PrivateRoute>
        ),
      },
      {
        path: "/myreviews",
        element: (
          <PrivateRoute>
            <MyReview></MyReview>
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:5000/servicespage"),
      },
      {
        path: "/newservices",
        element: (
          <PrivateRoute>
            <Newservices></Newservices>
          </PrivateRoute>
        ),
      },
      {
        path: "/myallreviews",
        element: (
          <PrivateRoute>
            <MYAllReviews></MYAllReviews>
          </PrivateRoute>
        ),
      },
      {
        path: "/edit/:id",
        element: <Edit></Edit>,
      },
    ],
  },
]);
