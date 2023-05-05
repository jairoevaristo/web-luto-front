import { createContext } from "react";

interface Address {
  addressLine: string;
  addressLineNumber: string;
  neighborhood: string;
}

export interface DataCreateUser {
  firstName: string;
  lastName: string;
  email: string;
  cpf: string;
  phone: string;
  birthDate: string;
  address: Address;
  password: string;
}

interface FormStepsContextData {
  data: DataCreateUser;
  currentStep: number;
  handleNextStep: () => void;
  handlePrevStep: () => void;
  handleOnChangeTextInput: (data: any) => void
}

export const formStepsContext = createContext({} as FormStepsContextData);
