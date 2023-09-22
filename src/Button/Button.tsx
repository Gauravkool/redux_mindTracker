import { ButtonHTMLAttributes, FC } from "react";
type ButtonProps = {
  theme?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
} & ButtonHTMLAttributes<HTMLButtonElement>;
const Button: FC<ButtonProps> = ({ theme, size, className, ...rest }) => {
  // console.log("theme is", theme)
  let themeClasses = "text-white";

  if (theme == "primary") {
    themeClasses = "text-white";
  }

  let sizeClass = "";
  switch (size) {
    case "small":
      sizeClass = "sm";
      break;
    case "medium":
      sizeClass = "text-2xl";
      break;
    case "large":
      sizeClass = "text-3xl";
  }
  return (
    <button
      {...rest}
      className={
        "px-2 py-1 border rounded-md " +
        themeClasses +
        " " +
        className +
        " " +
        sizeClass
      }
    ></button>
  );
};

Button.defaultProps = {
  theme: "primary",
  size: "small",
};
export default Button;
