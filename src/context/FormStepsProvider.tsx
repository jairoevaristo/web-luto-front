import { ReactNode, useCallback, useMemo, useState } from "react";

import { DataCreateUser, formStepsContext } from "./FormStepsContext";

import { steps } from "../components/MultiStepForm/SidebarSteps/SidebarSteps";

const { Provider } = formStepsContext;

export const FormStepsProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [createUserData, setCreateUserData] = useState<DataCreateUser>(
    {} as DataCreateUser
  );

  const [currentStep, setCurrentStep] = useState(0);

  const handleOnChangeTextInput = (data: any) => {
    setCreateUserData((prevState) => {
      return {
        ...prevState,
        ...data,
      };
    });
  };

  const handlePrevStep = useCallback(() => {
    if (currentStep === 0) {
      return;
    }

    setCurrentStep((prevState) => prevState - 1);
  }, [currentStep]);

  const handleNextStep = useCallback(() => {
    if (currentStep > steps.length) {
      return;
    }

    setCurrentStep((prevState) => prevState + 1);
  }, [currentStep]);

  const values = useMemo(
    () => ({
      data: createUserData,
      currentStep,
      handleOnChangeTextInput,
      handlePrevStep,
      handleNextStep,
    }),
    [
      currentStep,
      createUserData,
      handleOnChangeTextInput,
      handlePrevStep,
      handleNextStep,
    ]
  );

  return <Provider value={values}>{children}</Provider>;
};
