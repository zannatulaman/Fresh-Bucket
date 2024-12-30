/* eslint-disable react/prop-types */
import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("auth_token");

  console.log("Token", token);

  return token? (
        children
  ): (
      <Navigate to="/auth/login"></Navigate>
  )
 
};

export default PrivateRoute;
