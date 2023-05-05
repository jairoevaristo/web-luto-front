import React from "react";
import { Routes, BrowserRouter, Route, Navigate } from "react-router-dom";
import { ListProducts, PagesRoutes, ProductDetails, SignIn, SignUp } from "../../views";
import { PrivateRouter } from "../PrivateRouter";

export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={PagesRoutes.signin} element={<SignIn />} />
        <Route path={PagesRoutes.signup} element={<SignUp />} />
        <Route path={PagesRoutes.allProducts} element={
            <PrivateRouter>
              <ListProducts />
            </PrivateRouter>
          } 
        />
        <Route path={PagesRoutes.productInformation} element={
            <PrivateRouter>
              <ProductDetails />
            </PrivateRouter>
          } 
        />
      </Routes>
    </BrowserRouter>
  );
};