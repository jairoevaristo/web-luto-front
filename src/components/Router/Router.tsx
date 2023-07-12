import React from "react";
import { Routes, BrowserRouter, Route, useNavigate } from "react-router-dom";
import { ListProducts, MyShopping, PagesRoutes, ProductDetails, Profile, RegistrationCard, SignIn, SignUp, SucessPayment } from "../../views";
import { Cart } from "../Cart";
import { PrivateRouter } from "../PrivateRouter";

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
          <Route path={PagesRoutes.sucessPayment} element={
              //<PrivateRouter>
                <SucessPayment />
              //</PrivateRouter>
            } 
          />
          <Route path={PagesRoutes.profile} element={
              //<PrivateRouter>
                <Profile />
              //</PrivateRouter>
            } 
          />
          <Route path={PagesRoutes.myShopping} element={
              //<PrivateRouter>
                <MyShopping />
              //</PrivateRouter>
            } 
          />
        </Routes>
        <Cart/>
      </BrowserRouter>
   </>
  );
};