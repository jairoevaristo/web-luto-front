import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { useFormStep } from "../../../hooks/useFormStep";
import { useGetAdressByViaCep } from "../../../hooks/useGetAdressByViaCep";
import { addressValidation } from "../../../views/validations/address-validation";
import { ButtonStepForm } from "../../ButtonStepForm";
import { ControlledInput } from "../../ControlledTextInput/ControlledTextInput";
import { ControlledInputMask } from "../../ControllerInputMask";
import { SpinnerLoading } from "../../SpinnerLoading/SpinnerLoading";

export const Address: React.FC = () => {
  const { control, handleSubmit, getValues, setValue } = useForm({
    resolver: yupResolver(addressValidation),
  });

  const { handleNextStep, handleOnChangeTextInput } = useFormStep();
  const [cep, setCep] = useState('');

  const { data, isLoading, refetch } = useGetAdressByViaCep(cep);

  const onSubmit = (values: any) => {
    handleOnChangeTextInput({
      address: {
        ...values,
      },
    });
    handleNextStep();
  };

  const handleBlurInputCep = () => {
    const cepValue = getValues("zipCode");
    setCep(cepValue);
  };

  useEffect(() => {
    if (cep) {
      refetch()
    }
  }, [cep])

  useEffect(() => {
    if (!!data) {
      setValue("neighborhood", data.bairro);
      setValue("addressLine", data.logradouro);
    }
  }, [data]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-6 mt-4"
    >
      <div className="flex gap-4 w-full items-center justify-between mb-4">
        <ControlledInputMask
          mask="99999-999"
          control={control}
          name="zipCode"
          label="CEP"
          autoFocus
          placeholder="Seu CEP"
          onBlur={handleBlurInputCep}
        />
        <ControlledInput
          control={control}
          name="addressLine"
          label="Rua"
          placeholder="Digite o nome da sua rua"
          rightIcon={
            isLoading && <SpinnerLoading size="SMALL" color="gray-300" />
          }
        />
      </div>

      <div className="flex gap-4 w-full items-center justify-between">
        <ControlledInput
          control={control}
          name="addressLineNumber"
          label="Nº da casa"
          placeholder="Digite o número da sua casa"
        />
        <ControlledInput
          control={control}
          name="neighborhood"
          label="Bairro"
          placeholder="Digite o nome do seu bairro"
          rightIcon={
            isLoading && <SpinnerLoading size="SMALL" color="gray-300" />
          }
        />
      </div>

      <div className="flex justify-end items-end mt-10">
        <ButtonStepForm />
      </div>
    </form>
  );
};
