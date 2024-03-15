
import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuthenticate } from "./UseAuthenticate.ts";
import Layout from "../components/Layout.tsx"

export const PrivateRoute = (): React.ReactElement => {
    return useAuthenticate() ? <Layout><Outlet /></Layout> : <Navigate to="/" />;
};