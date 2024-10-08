import { createBrowserRouter } from "react-router-dom";
import HomeRoot from "./HomeRoot";
import Home from "../Components/Pages/HomePage/Home";
import LogIn from "../Authenication/LogIn/LogIn";
import Register from "../Authenication/Registation/Register";
import Shop from "../Components/Pages/Shop/Shop";
import DashboardAll from "../Components/Share/Dashboard/DashboardAll";
import AdminHome from "../Components/Pages/AdminDashboardPage/AdminHome/AdminHome";
import ManageUser from "../Components/Pages/AdminDashboardPage/Managuser/ManageUser";
import ManageCatagory from "../Components/Pages/AdminDashboardPage/ManageCatagory/ManageCatagory";
import Payment from "../Components/Pages/AdminDashboardPage/Payment/Payment";
import Advertise from "../Components/Pages/AdminDashboardPage/Advertise/Advertise";
import PrivetRout from "../Authenication/PrivetRout/PrivetRout";
import CartPage from "../Components/CartPage/CartPage";
import CheckOut from "../Components/CheckoutPage/CheckOut";
import Invoice from "../Components/InvoicePage/Invoice";
import Error from "../Components/ErrorPage/Error";
import SellerHome from "../Components/Pages/SellerDashbordPage/SellerHome/SellerHome";
import ManageMedicin from "../Components/Pages/SellerDashbordPage/ManageMedicines/ManageMedicin";
import SellerPayHistory from "../Components/Pages/SellerDashbordPage/SellerPaymentHistory/SellerPayHistory";
import SellerAdvertic from "../Components/Pages/SellerDashbordPage/SellerAdvertis/SellerAdvertic";
import UserPayment from "../Components/Pages/UserDashboard/UserPayment/UserPayment";
import UpdateMedicin from "../Components/Pages/AdminDashboardPage/ManageCatagory/UpdateMedicin/UpdateMedicin";
import SellerReport from "../Components/Pages/AdminDashboardPage/SalseReport/SellerReport";
import CategoryDetails from "../Components/Pages/HomePage/CardCategory/CategoryDetails/CategoryDetails";
import AdminRout from "../Authenication/AdminRout/AdminRout";



const Router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error></Error>,
    element: <HomeRoot></HomeRoot>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/category/:category_name",
        element: <CategoryDetails></CategoryDetails>
      },
      {
        path: "login",
        element: <LogIn></LogIn>
      },
      {
        path: "register",
        element: <Register></Register>
      },
      {
        path: "shop",
        element: <Shop></Shop>
      },
      {
        path: "cartpage",
        element: <PrivetRout><CartPage></CartPage></PrivetRout>
      },
      {
        path: "checkout",
        element: <PrivetRout><CheckOut></CheckOut></PrivetRout>
      },
      {
        path: "invoice",
        element: <PrivetRout><Invoice></Invoice></PrivetRout>
      }
    ]
  },

  {
    path: "deshoard",
    element: <PrivetRout><DashboardAll></DashboardAll></PrivetRout>,
    children: [

      // Admin Root Setion
      {
        path: "adminhome",
        element: <AdminRout><AdminHome></AdminHome></AdminRout>
      },
      {
        path: "manageuser",
        element: <AdminRout><ManageUser></ManageUser></AdminRout>
      },
      {
        path: "catagory",
        element: <AdminRout><ManageCatagory></ManageCatagory></AdminRout>
      },
      {
        path: "updatecatagory/:id",
        element: <AdminRout><UpdateMedicin></UpdateMedicin></AdminRout>,
        loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/medicin/${params.id}`)
      },
      {
        path: "payment",
        element: <AdminRout><Payment></Payment></AdminRout>
      },
      {
        path: "report",
        element: <AdminRout><SellerReport></SellerReport></AdminRout>
      },
      {
        path: "advertise",
        element: <Advertise></Advertise>
      },

      // Seller dashboard *******************************
      {
        path: "sellerhome",
        element: <PrivetRout><SellerHome></SellerHome></PrivetRout>
      },
      {
        path: "sellermedicin",
        element: <ManageMedicin></ManageMedicin>
      },
      {
        path: "sellerpay",
        element: <SellerPayHistory></SellerPayHistory>
      },
      {
        path: "selleradvertice",
        element: <SellerAdvertic></SellerAdvertic>
      },

      // User Dashboard *****************************************
      {
        path: "userpay",
        element: <PrivetRout><UserPayment></UserPayment></PrivetRout>
      },

    ]
  }
]);

export default Router;