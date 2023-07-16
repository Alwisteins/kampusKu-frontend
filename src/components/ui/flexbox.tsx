import { flexbox } from "../../utils/base";
import { cn } from "../../utils";
import { FlexboxProps } from "../../types/ui/flexbox";

const Flexbox: React.FC<FlexboxProps> = ({ className, ...props }) => {
  return <div className={cn(flexbox(props), className)} {...props} />;
};

export default Flexbox;
