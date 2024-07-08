import React from "react";
import { Outlet } from "react-router-dom";
import { useAuth } from "./AuthContext";
import Header from "./Header";
import Footer from "./Footer";
import Login from "./Login";

const AppLayout = () => {
    const { isAuthenticated } = useAuth();

    return (
        <div className="app">
            {isAuthenticated ? (
                <>
                    <Header />
                    <Outlet />
                    <Footer />
                </>
            ) : (
                <Login />
            )}
        </div>
    );
};

export default AppLayout;
