import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useFormStep } from "../../../hooks/useFormStep";
import { identificationValidation } from "../../../views/validations/identification-validation";
import { ButtonStepForm } from "../../ButtonStepForm";
import { ControlledInput } from "../../ControlledTextInput/ControlledTextInput";
import { ControlledInputMask } from "../../ControllerInputMask";

export const Identification: React.FC = () => {
  const { control, handleSubmit } = useForm({
    resolver: yupResolver(identificationValidation),
  });

  const { handleNextStep, handleOnChangeTextInput } = useFormStep();

  const onSubmit = (values: any) => {
    handleOnChangeTextInput(values);
    handleNextStep();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-6 mt-4"
    >
      <div className="flex gap-4 w-full items-center justify-between mb-4">
        <ControlledInput
          control={control}
          name="email"
          label="E-mail"
          placeholder="Digite seu E-mail"
          autoFocus
        />
        <ControlledInputMask
          mask="(99) 99999-9999"
          control={control}
          name="phone"
          label="Telefone"
          placeholder="Digite seu telefone"
        />
      </div>

      <div className="flex gap-4 w-full items-center justify-between">
        <ControlledInputMask
          mask="999.999.999-99"
          control={control}
          name="cpf"
          label="CPF"
          placeholder="Digite seu CPF"
        />
        <ControlledInputMask
          mask="99/99/9999"
          control={control}
          name="birthDate"
          label="Data de nascimento"
          placeholder="Digite sua data de nascimento"
        />
      </div>

      <div className="flex justify-end items-end mt-10">
        <ButtonStepForm />
      </div>
    </form>
  );
};
