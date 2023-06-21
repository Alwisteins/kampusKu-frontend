import { forwardRef } from "react";
import { cn } from "../../utils";
import { input } from "../../utils/base";
import { InputProps } from "../../types/ui/input";

const Input: React.FC<InputProps> = forwardRef(({ className, ...props }) => {
  return <input className={cn(input(props), className)} {...props} />;
});

export default Input;
