import React from "react";
import ReactDOM from "react-dom/client";
import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Tournament from "./components/Tournament";
import Team from "./components/Team";
import Player from "./components/Player";
import Staff from "./components/Staff";
import Schedule from "./components/Schedule";
import Location from "./components/Location";
import Signup from "./components/Signup";
import Login from "./components/Login";

const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        children: [
            {
                path: "/",
                element: <Body/>,
            },
            {
                path: "/tournament",
                element: <Tournament/>,
            },
            {
                path: "/team",
                element: <Team/>,
            },
            {
                path: "/player",
                element: <Player/>,
            },
            {
                path: "/staff",
                element: <Staff/>,
            },
            {
                path: "/schedule",
                element: <Schedule/>,
            },
            {
                path: "/location",
                element: <Location/>,
            },
            {
                path: "/signup",
                element: <Signup/>,
            },
            {
                path: "/login",
                element: <Login/>,
            },
        ]
    },
    
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);