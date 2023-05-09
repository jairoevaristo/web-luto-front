import React, {
  forwardRef,
  InputHTMLAttributes,
  ReactNode,
  useState,
} from "react";

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  offset?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  label?: string;
  error?: string;
  onClickRightIcon?: () => void;
  onClickLeftIcon?: () => void;
  className?: string;
}

export const TextInput: React.FC<TextInputProps> = forwardRef(
  (
    {
      error,
      leftIcon,
      rightIcon,
      onClickLeftIcon,
      onClickRightIcon,
      label,
      className,
      ...props
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = useState(false);

    function handleInputFocus() {
      setIsFocused(true);
    }

    function handleInputBlur() {
      setIsFocused(false);
    }

    return (
      <div className="flex flex-col justify-start w-ful">
        <label className="font-semibold text-black text-sm">{label}</label>
        <div
          onBlur={handleInputBlur}
          className={`border w-full border-gray-400 py-3 px-2 rounded-[4px] flex items-center mt-2 ${
            !error && isFocused && "ring-2 ring-slate-400"
          } ${
            error && "border-2 border-red-600"
          } transition duration-200 ease-in-out bg-white ${className}`}
        >
          <div className="mr-2" onClick={onClickLeftIcon}>
            {leftIcon}
          </div>
          <input
            type={props.type}
            value={props.value}
            onFocus={handleInputFocus}
            name={props.name}
            className={`w-full outline-none bg-none overflow-hidden ${
              error && "placeholder-red-600 text-red-600"
            }`}
            {...props}
          />
          <div className="cursor-pointer" onClick={onClickRightIcon}>
            {rightIcon}
          </div>
        </div>
      </div>
    );
  }
);
