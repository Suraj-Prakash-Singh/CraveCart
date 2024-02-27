import React from "react";
import ReactDom from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Restraunt from "./components/Restraunt";

const AppLayout = () => (
    <>
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
    </>
)

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        errorElement: <Error/>,
        children: [
            {
                path: "/",
                element: <Body/>
            },
            {
                path: "/about",
                element: <About/>
            },
            {
                path: "/contact",
                element: <Contact/>
            },
            {
                path: "/restraunts/:resId",
                element: <Restraunt/>
            },
        ]
    }
])
const root = ReactDom.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter}/>);