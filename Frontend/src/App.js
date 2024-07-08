import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthProvider } from "./components/AuthContext";
import MainApp from "./components/MainApp";
import AppLayout from "./components/AppLayout";
import Body from "./components/Body";
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

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <MainApp />,
        children: [
            {
                path: "/",
                element: <AppLayout />,
                children: [
                    { path: "/", element: <Body /> },
                    { path: "/tournament", element: <Tournament /> },
                    { path: "/team", element: <Team /> },
                    { path: "/registerplayer", element: <RegisterPlayer /> },
                    { path: "/staff", element: <Staff /> },
                    { path: "/schedule", element: <Schedule /> },
                    { path: "/location", element: <Location /> },
                    { path: "/player", element: <Player /> },
                    { path: "/registerteam", element: <RegisterTeam /> },
                    { path: "/registertournament", element: <RegisterTournament /> },
                    { path: "/playercard", element: <PlayerCard /> },
                ],
            },
        ],
    },
    { path: "/login", element: <Login /> },
    { path: "/signup", element: <Signup /> },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <AuthProvider>
        <RouterProvider router={appRouter} />
    </AuthProvider>
);

