import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { useFormStep } from "../../../hooks/useFormStep";
import { useUploadImageProfile } from "../../../hooks/useUploadAvatar";
import { stepNameValidation } from "../../../views/validations/step-name-validation";
import { ButtonStepForm } from "../../ButtonStepForm";

import { ControlledInput } from "../../ControlledTextInput/ControlledTextInput";
import { UploadAvatar } from "../../UploadAvatar";

export const Name: React.FC = () => {
  const { handleSubmit, control } = useForm({
    resolver: yupResolver(stepNameValidation),
  });

  const { handleNextStep, handleOnChangeTextInput } = useFormStep();
  const [avatar, setAvatar] = useState<File[]>([]);

  const onSubmit = (values: any) => {
    handleOnChangeTextInput({
      avatar: avatar.length > 0 ? avatar : "",
      ...values,
    });

    handleNextStep();
  };

  return (
    <form
      className="flex flex-col gap-6 w-full"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col gap-8">
        <ControlledInput
          control={control}
          label="Primeiro nome"
          autoFocus
          placeholder="Digite seu primeiro nome"
          name="firstName"
        />
        <ControlledInput
          control={control}
          label="Segundo nome"
          placeholder="Digite seu segundo nome"
          name="lastName"
        />
      </div>

      <div className="mt-4">
        <UploadAvatar onHandleSelectedAvatar={setAvatar} />
      </div>

      <div className="flex justify-end items-end mt-10">
        <ButtonStepForm />
      </div>
    </form>
  );
};
