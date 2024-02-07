import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import SignIn from "../Pages/signIn/SignIn";
import SignUp from "../Pages/signUp/SignUp";
import Books from "../Pages/Home/Books/Books";
import BookDetails from "../Pages/Home/BookDetails/BookDetails";
import ChildrenAllBook from "../Pages/Home/ChildrenBook/ChildrenAllBook";
import SuperStoreCategory from "../Pages/Home/SuperStore/SuperStoreCategory";
import ElectroDetails from "../Pages/Home/SuperStore/ElectricDetails/ElectroDetails";
import PlaceOrder from "../Pages/PlaceOrder/PlaceOrder";
import Order from "../Pages/Order/Order";
import KidsZones from "../Pages/Home/KidsZones/KidsZones";
import KidsDetails from "../Pages/Home/KidsDetails/KidsDetails";
import Payment from "../Pages/Home/Payment/Payment";
import PaymentHistory from "../Pages/Home/PaymentHistory/PaymentHistory";
import Dashboard from "../Layout/Dashboard";
import OrderHistory from "../Pages/dashboard/OrderHisory/OrderHistory";
import ManageUser from "../Pages/dashboard/ManageUser/ManageUser";
import ManageOrder from "../Pages/dashboard/ManageOrder/ManageOrder";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/signIn",
        element: <SignIn></SignIn>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "/allBooks/:category",
        element: <Books></Books>,
      },
      {
        path: "/superstore/:category",
        element: <SuperStoreCategory></SuperStoreCategory>,
      },
      {
        path: "/electricdetails/:id",
        element: <ElectroDetails></ElectroDetails>,
      },
      {
        path: "/bookDetails/:id",
        element: <BookDetails></BookDetails>,
      },

      {
        path: "/childrenAllBooks/:ageRange",
        element: <ChildrenAllBook></ChildrenAllBook>,
      },
      {
        path: "/allkids/:category",
        element: <KidsZones></KidsZones>,
      },
      {
        path: "/kidsDetails/:id",
        element: <KidsDetails></KidsDetails>,
      },
      {
        path: "/placeOrder",
        element: <PlaceOrder></PlaceOrder>,
      },
      {
        path: "/order",
        element: <Order></Order>,
      },
      {
        path: "/payment",
        element: <Payment></Payment>,
      },
    ],
  },
  {
    path: "dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "order-history",
        element: <OrderHistory />,
      },
      {
        path: "paymentHistory",
        element: <PaymentHistory></PaymentHistory>,
      },
      {
        path: "manage-order",
        element: <ManageOrder />,
      },
      {
        path: "manage-user",
        element: <ManageUser />,
      },
    ],
  },
]);

export default router;
