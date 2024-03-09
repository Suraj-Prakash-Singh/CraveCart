import React, { useState } from "react";
import ReactDom from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import ContactClass from "./components/ContactClass";
import Error from "./components/Error";
import Restraunt from "./components/Restraunt";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import userContext from "./utils/userContext";

const AppLayout = () => {
    return (<userContext.Provider value={{userName: "Akash"}}>
    <>
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
    </>
    </userContext.Provider>)
}

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
                element: <ContactClass/>
            },
            {
                path: "/restraunts/:resId",
                element: <Restraunt/>
            },
        ]
    },
    {
        path: "/signup",
        element: <SignUp/>
    },
    {
        path: "/login",
        element: <SignIn/>
    },
])
const root = ReactDom.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter}/>);