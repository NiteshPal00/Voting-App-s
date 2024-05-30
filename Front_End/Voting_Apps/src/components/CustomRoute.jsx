import React from "react";
import { Navigate, useRoutes } from "react-router-dom";
import SignInComp from "./loginComp/SignInComp";
import SignUpComp from "./loginComp/SignUpComp";
import { VotingAppC } from "./pages/VotingAppC";

export const CustomRoute = () => {
  const isAuthenticated = !!localStorage.getItem("token");

  const routes = useRoutes([
    { path: "/", element: <SignInComp /> },
    { path: "/signUpComp", element: <SignUpComp /> },
    {
      path: "/votingApp",
      element: isAuthenticated ? <VotingAppC /> : <Navigate to="/" />,
    },
  ]);
  return routes;
};
