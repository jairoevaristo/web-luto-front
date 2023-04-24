import { EyeIcon } from "@heroicons/react/24/outline";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import { useFormStep } from "../../../hooks/useFormStep";
import { securityValidation } from "../../../views/validations/security-validation";
import { ButtonStepForm } from "../../ButtonStepForm";
import { ControlledInput } from "../../ControlledTextInput/ControlledTextInput";

export const Security: React.FC = () => {
  const { control, handleSubmit } = useForm({
    resolver: yupResolver(securityValidation),
  });

  const { handleNextStep, handleOnChangeTextInput, data } = useFormStep();

  const onSubmit = (values: any) => {
    delete values.confirmedPassword;

    handleOnChangeTextInput(values);
    handleNextStep();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-6 mt-4"
    >
      <div className="flex gap-4 w-full items-center justify-between">
        <ControlledInput
          control={control}
          name="password"
          autoFocus
          label="Senha"
          type="password"
          placeholder="Digite uma senha"
          rightIcon={<EyeIcon className="text-[#333] w-5 h-5" />}
        />
        <ControlledInput
          control={control}
          type="password"
          name="confirmedPassword"
          label="Confirmar senha"
          placeholder="Confirme sua senha"
          rightIcon={<EyeIcon className="text-[#333] w-5 h-5" />}
        />
      </div>

      <div className="flex justify-end items-end mt-10">
        <ButtonStepForm />
      </div>
    </form>
  );
};
