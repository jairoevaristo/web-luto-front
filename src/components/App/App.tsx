import React from "react";

import { Router } from "../Router";
import { FormStepsProvider } from "../../context/FormStepsProvider";

export const App: React.FC = () => {
  return (
    <FormStepsProvider>
        <Router />
    </FormStepsProvider>
  );
};
