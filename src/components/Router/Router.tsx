import React from "react";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import { PagesRoutes, SignIn, SignUp } from "../../views";

export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={PagesRoutes.signin}
          element={<SignIn/>}
        />
        <Route
          path={PagesRoutes.signup}
          element={<SignUp/>}
        />
      </Routes>
    </BrowserRouter>
  );
};