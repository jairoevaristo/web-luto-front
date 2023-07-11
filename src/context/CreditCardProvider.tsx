import React, { useEffect, useMemo, useState } from "react";
import { CardProps } from "../components/CreditCard/CreditCard";
import { CreditCardContext } from "./CreditCardContext";

export const useCreditCard = () => {
  return React.useContext(CreditCardContext);
};

export const CreditCardProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [card, setCard] = useState<CardProps>({
    number: localStorage.getItem('numberCard') || '',
    expiry: localStorage.getItem('expiryCard') || '',
    cvc: localStorage.getItem('cvcCard') || '',
    name: localStorage.getItem('nameCard') || '',
    focus: '',
  });
  const [isCardRegistered, setIsCardRegistered] = useState(localStorage.getItem('cardRegistered') === 'true' ? true : false);

  const values = useMemo(
    () => ({
      card,
      setCard,
      isCardRegistered,
      setIsCardRegistered
    }), [
      card,
      setCard,
      isCardRegistered,
      setIsCardRegistered
    ]
  );

  return (
    <CreditCardContext.Provider value={values}>
      {children}
    </CreditCardContext.Provider>
  );
};