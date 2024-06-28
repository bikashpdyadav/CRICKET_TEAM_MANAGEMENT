import React from "react";
import ReactDOM from "react-dom/client";
import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Tournament from "./components/Tournament";
import Team from "./components/Team";
import RegisterPlayer from "./components/RegisterPlayer";
import Staff from "./components/Staff";
import Schedule from "./components/Schedule";
import Location from "./components/Location";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Player from "./components/Player";
import RegisterTeam from "./components/RegisterTeam";
import RegisterTournament from "./components/RegisterTournament";
import PlayerCard from "./components/PlayerCard";

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
                path: "/registerplayer",
                element: <RegisterPlayer/>,
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
            {
                path: "/player",
                element: <Player/>,
            },
            {
                path: "/registerteam",
                element: <RegisterTeam/>,
            },
            {
                path: "/registertournament",
                element: <RegisterTournament/>,
            },
            {
                path: "/playercard",
                element: <PlayerCard/>,
            },
        ]
    },
    
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);