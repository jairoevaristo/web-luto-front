import { Control, Controller } from "react-hook-form";

import { TextInput } from "../TextInput";
import { TextInputProps } from "../TextInput/TextInput";

type ControlledInputProps = {
  control: Control<any, object>;
  name: string;
  defaultValue?: string;
  rules?: any;
} & Omit<TextInputProps, "value">;

export const ControlledInput: React.FC<ControlledInputProps> = ({
  control,
  name,
  defaultValue = "",
  rules,
  ...rest
}) => {
  return (
    <>
      <Controller
        control={control}
        name={name}
        rules={rules}
        defaultValue={defaultValue}
        render={({ field, fieldState: { error } }) => {
          return (
            <div className="relative w-full">
              <TextInput {...field} {...rest} error={error?.message} />
              {error && (
                <div className="flex items-center justify-center absolute mb-10">
                  <span className="text-red-600">{error.message}</span>
                </div>
              )}
            </div>
          );
        }}
      />
    </>
  );
};
