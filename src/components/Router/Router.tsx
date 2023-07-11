import React from "react";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import { ListProducts, PagesRoutes, ProductDetails, SignIn, SignUp } from "../../views";
import { Cart } from "../Cart";
import { PrivateRouter } from "../PrivateRouter";
import { RegistrationCard } from "../../views/pages/RegistrationCard";

export const Router: React.FC = () => {
  return (
   <>
      <BrowserRouter>
        <Routes>
          <Route path={PagesRoutes.signin} element={<SignIn />} />
          <Route path={PagesRoutes.signup} element={<SignUp />} />
          <Route path={PagesRoutes.allProducts} element={
              //<PrivateRouter>
                <ListProducts />
            // </PrivateRouter>
            } 
          />
          <Route path={PagesRoutes.productInformation} element={
              //<PrivateRouter>
                <ProductDetails />
              //</PrivateRouter>
            } 
          />
          <Route path={PagesRoutes.registrationCard} element={
              //<PrivateRouter>
                <RegistrationCard />
              //</PrivateRouter>
            } 
          />
        </Routes>
      </BrowserRouter>
      <Cart />
   </>
  );
};