import React from "react";
import { Router } from "../Router";
import { ValueProvider } from "../../context";

export const App: React.FC = () => {

  return (
    <ValueProvider>
      <Router/>
    </ValueProvider>
  );
};