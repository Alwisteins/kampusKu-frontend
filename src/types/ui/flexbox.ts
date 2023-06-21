import { VariantProps } from "tailwind-variants";
import { flexbox } from "../../utils/base";

export interface FlexboxProps
  extends VariantProps<typeof flexbox>,
    React.HTMLAttributes<HTMLDivElement> {}
