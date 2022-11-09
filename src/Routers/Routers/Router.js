import Login from "../../components/Page/Login/Login";
import Register from "../../components/Page/Register/Register";
import Home from "../../components/Page/Home/Home";
import Main from "../../Layout/Main";
import Details from "../../components/Page/Home/Details/Details";
import ServicesPage from "../../components/Page/Services/ServicesPage/ServicesPage";

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
    ],
  },
]);
