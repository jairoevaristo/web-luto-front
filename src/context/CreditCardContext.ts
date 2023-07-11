import { createContext } from "react";
import { CardProps } from "../components/CreditCard/CreditCard";

interface CreditCardContextData {
  card: CardProps;
  setCard: React.Dispatch<React.SetStateAction<CardProps>>;
  isCardRegistered: boolean;
  setIsCardRegistered: React.Dispatch<React.SetStateAction<boolean>>;
};

export const CreditCardContext = createContext({} as CreditCardContextData);