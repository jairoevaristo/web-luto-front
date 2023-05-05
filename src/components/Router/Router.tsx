import React from "react";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import { ListProducts, PagesRoutes, SignIn, SignUp } from "../../views";

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
        <Route
          path={PagesRoutes.listProducts}
          element={<ListProducts/>}
        />
      </Routes>
    </BrowserRouter>
  );
};