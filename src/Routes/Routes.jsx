import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import SignIn from "../Pages/signIn/SignIn";
import SignUp from "../Pages/signUp/SignUp";
import Books from "../Pages/Home/Books/Books";
import BookDetails from "../Pages/Home/BookDetails/BookDetails";
import ChildrenAllBook from "../Pages/Home/ChildrenBook/ChildrenAllBook";
import PlaceOrder from "../Pages/PlaceOrder/PlaceOrder";
import Order from "../Pages/Order/Order";





const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/signIn',
                element: <SignIn></SignIn>
            },
            {
                path: '/signUp',
                element: <SignUp></SignUp>
            },
            {
                path: "/allBooks/:category",
                element: <Books></Books>
            },
            {
                path: "/bookDetails/:id",
                element: <BookDetails></BookDetails>
            },
            {
                path: "/childrenAllBooks/:ageRange",
                element: <ChildrenAllBook></ChildrenAllBook>,
            },
            {
                path: '/placeOrder',
                element: <PlaceOrder></PlaceOrder>
            },
            {
                path: '/order',
                element: <Order></Order>
            },
        ]
    },
]);


export default router