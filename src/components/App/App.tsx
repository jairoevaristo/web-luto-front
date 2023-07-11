import React from "react";

import { Router } from "../Router";
import { FormStepsProvider } from "../../context/FormStepsProvider";
import { AuthProvider } from "../../context/AuthProvider";
import { CardProvider } from "../../context/CardProvider";
import { CreditCardProvider } from "../../context/CreditCardProvider";

export const App: React.FC = () => {
  return (
    <AuthProvider>
      <FormStepsProvider>
        <CardProvider>
          <CreditCardProvider>
            <Router />
          </CreditCardProvider>
        </CardProvider>
      </FormStepsProvider>
    </AuthProvider>
  );
};
