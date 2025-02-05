
/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";
// import { ExampleContext } from "../../App";
// import { useContext, useState } from "react";

const PrivateRoute = ({ children }) => {

   const token = Cookies.get("auth_token");

  // Get token from context properly
  // const { token } = useContext(ExampleContext); // ✅ Destructure token correctly

  // console.log("Token:", token);



  return token ? children : <Navigate to="/auth/login" />;
};

export default PrivateRoute;
