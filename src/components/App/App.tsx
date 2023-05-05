import React from "react";

import { Router } from "../Router";
import { FormStepsProvider } from "../../context/FormStepsProvider";
import { AuthProvider } from "../../context/AuthProvider";

export const App: React.FC = () => {
  return (
    <AuthProvider>
      <FormStepsProvider>
          <Router />
      </FormStepsProvider>
    </AuthProvider>
  );
};
