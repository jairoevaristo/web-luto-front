import React, { ChangeEvent, FocusEvent, useState } from "react";
import Cards, { Focused } from "react-credit-cards-2";
import "react-credit-cards-2/dist/es/styles-compiled.css";
import { TextInput } from "../TextInput";
import { useCreditCard } from "../../context/CreditCardProvider";
import { useToast } from "../../hooks/useToast";
import {
  TrashIcon,
  CreditCardIcon
} from "@heroicons/react/24/outline";

export interface CardProps {
  number: string | number;
  expiry: string | number;
  cvc: string | number;
  name: string;
  focus: Focused;
}

export const CreditCard: React.FC = () => {
  const { card, setCard, isCardRegistered, setIsCardRegistered } =
    useCreditCard();
  const [state, setState] = useState<CardProps>(card);
  const { toastError, toastSuccess } = useToast();

  const handleInputNumberChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    let formattedValue = value.replace(/\D/g, "");

    if (formattedValue.length > 2) {
      formattedValue = formattedValue.replace(/\d{4}(?=\d)/g, "$& ");
    }

    setState((prev) => ({ ...prev, [name]: formattedValue }));
  };

  const handleInputDateChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    let formattedValue = value.replace(/\D/g, "");

    if (formattedValue.length > 2) {
      formattedValue = `${formattedValue.slice(0, 2)}/${formattedValue.slice(
        2,
      )}`;
    }

    setState((prev) => ({ ...prev, [name]: formattedValue }));
  };

  const handleInputCVCChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    let formattedValue = value.replace(/\D/g, "");

    setState((prev) => ({ ...prev, [name]: formattedValue }));
  };

  const handleInputNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setState((prev) => ({ ...prev, [name]: value }));
  };

  const onClickAddCardButton = () => {
    const isNumberValid = state.number.toString().length === 19;
    const isCVCValid = state.cvc.toString().length === 3;
    const isExpiryValid = state.expiry.toString().length === 5;
    const areAllFieldsFilled =
      state.number && state.name && state.expiry && state.cvc;
    const isNameValid = /^[A-Za-z\s]+$/.test(state.name);

    if (!isNumberValid) {
      toastError("Número do cartão inválido.");
      return;
    }
    if (!isNameValid) {
      toastError("Nome do cartão inválido.");
      return;
    }
    if (!isExpiryValid) {
      toastError("Validade do cartão inválido.");
      return;
    }
    if (!isCVCValid) {
      toastError("CVC do cartão inválido.");
      return;
    }
    if (!areAllFieldsFilled) {
      toastError("Nenhum campo vazio.");
      return;
    }

    setCard(state);
    setIsCardRegistered(true);
    localStorage.setItem("numberCard", state.number.toString());
    localStorage.setItem("nameCard", state.name);
    localStorage.setItem("expiryCard", state.expiry.toString());
    localStorage.setItem("cvcCard", state.cvc.toString());
    localStorage.setItem("cardRegistered", "true");
    toastSuccess("Cartão cadastrado com sucesso!");
  };

  const onClickPopCardButton = () => {
    setCard({
      number: "",
      expiry: "",
      cvc: "",
      name: "",
      focus: "",
    });
    setIsCardRegistered(false);
    localStorage.setItem("numberCard", "");
    localStorage.setItem("nameCard", "");
    localStorage.setItem("expiryCard", "");
    localStorage.setItem("cvcCard", "");
    localStorage.setItem("cardRegistered", "false");
    toastSuccess("Cartão apagado com sucesso!");
  };

  return (
    <div className="bg-white p-10 rounded-2xl w-1/2 flex flex-col mt-[100px] mb-[30px] shadow-xl">
      <h1 className="font-semibold text-black text-xl">Cartão:</h1>
      <Cards
        number={state.number}
        expiry={state.expiry}
        cvc={state.cvc}
        name={state.name}
        focused={state.focus}
      />
      <div className="grid gap-[10px] mt-1">
        <TextInput
          type="text"
          name="number"
          label="Número do Cartão"
          placeholder="Digite o número..."
          value={state.number}
          onChange={handleInputNumberChange}
          onFocus={() => setState((prev) => ({ ...prev, focus: "number" }))}
          maxLength={19}
          disabled={isCardRegistered}
        />
        <TextInput
          type="text"
          name="name"
          label="Nome Completo"
          placeholder="Digite o nome..."
          value={state.name}
          onChange={handleInputNameChange}
          onFocus={() => setState((prev) => ({ ...prev, focus: "name" }))}
          maxLength={25}
          disabled={isCardRegistered}
        />
      </div>
      <div className="grid grid-cols-[1fr_1fr] gap-[10px] mt-2">
        <TextInput
          type="text"
          inputMode="numeric"
          name="expiry"
          label="Validade"
          placeholder="Digite a validade..."
          value={state.expiry}
          onChange={handleInputDateChange}
          onFocus={() => setState((prev) => ({ ...prev, focus: "expiry" }))}
          maxLength={5}
          disabled={isCardRegistered}
        />
        <TextInput
          type="text"
          name="cvc"
          label="CVC"
          placeholder="Digite o cvc..."
          value={state.cvc}
          onChange={handleInputCVCChange}
          onFocus={() => setState((prev) => ({ ...prev, focus: "cvc" }))}
          maxLength={3}
          disabled={isCardRegistered}
        />
      </div>
      <div className="w-full flex justify-center mt-5">
        {!isCardRegistered ? (
          <button
            onClick={onClickAddCardButton}
            className="w-[250px] flex justify-center p-2 bg-[#333] rounded-[4px] text-white hover:opacity-75"
          >
            <CreditCardIcon className="h-6 w-6 mr-2"/>Cadastrar
          </button>
        ) : (
          <button
            onClick={onClickPopCardButton}
            className="w-[250px] flex justify-center p-2 bg-[#333] rounded-[4px] text-white hover:opacity-75"
          >
            <TrashIcon className="h-6 w-6 mr-2"/>Apagar
          </button>
        )}
      </div>
    </div>
  );
};
