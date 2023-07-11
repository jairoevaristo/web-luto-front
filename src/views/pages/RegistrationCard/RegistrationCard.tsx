import React, { ChangeEvent, FocusEvent, useEffect, useState } from "react";
import { Header } from "../../../components/Header";
import { PageLoader, TextInput } from "../../../components";
import Cards, { Focused } from "react-credit-cards-2";
import 'react-credit-cards-2/dist/es/styles-compiled.css';
import { CreditCard } from "../../../components/CreditCard";

export const RegistrationCard: React.FC = () => {
  const [loading, setLoaging] = useState(false);

  useEffect(() => {
    setLoaging(true);
  }, []);
  
  return (
    <PageLoader condition={loading}>
      <Header />
      <CreditCard/>
    </PageLoader>
  );
};
