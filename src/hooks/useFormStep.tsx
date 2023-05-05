import { useContext } from "react";

import { formStepsContext } from "../context/FormStepsContext";

export const useFormStep = () => {
  if (!formStepsContext) {
    throw new Error("Not found FormStepContext");
  }

  return useContext(formStepsContext);
};
