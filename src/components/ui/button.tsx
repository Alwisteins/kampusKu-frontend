import { button } from "../../utils/base";
import { cn } from "../../utils";
import { ButtonProps } from "../../types/ui/button";

const Button: React.FC<ButtonProps> = ({ className, ...props }) => {
  return <button className={cn(button(props), className)} {...props} />;
};

export default Button;
