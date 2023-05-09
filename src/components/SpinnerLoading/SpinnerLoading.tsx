interface SpinnerLoadingProps {
  size?: "SMALL" | "MEDIUM" | "LARGE";
  theme?: "light" | "dark";
}

export const SpinnerLoading: React.FC<SpinnerLoadingProps> = ({
  theme = "light",
  size = "SMALL"
}) => {
  const sizeSpinner = {
    SMALL: "w-6 h-6",
    MEDIUM: "w-10 h-10",
    LARGE: "w-16 h-16",
  };

  const color = (theme === "light" ? "border-[#fff]" : `border-[#333]`);

  return (
    <div
      style={{ borderTopColor: "transparent" }}
      className={`${sizeSpinner[size]} border-2 ${color} border-solid rounded-full animate-spin`}
    />
  );
};
